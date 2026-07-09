import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ error: "Invalid request body" }, { status: 400 });
        }

        const parsed = contactSchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json(
            { error: parsed.error.issues[0]?.message ?? "Invalid input" },
            { status: 400 },
          );
        }

        const from = process.env.CONTACT_SENDER_EMAIL;
        const to = process.env.CONTACT_RECIPIENT_EMAIL;
        const password = process.env.CONTACT_SENDER_APP_PASSWORD;

        if (!from || !to || !password) {
          console.error("Contact form: missing email configuration secrets");
          return Response.json(
            { error: "Email is not configured yet. Please try again later." },
            { status: 500 },
          );
        }

        const { name, email, message } = parsed.data;

        try {
          const nodemailer = await import("nodemailer");
          const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: { user: from, pass: password },
          });

          await transporter.sendMail({
            from: `"Zyra Creative" <${from}>`,
            to,
            replyTo: `"${name}" <${email}>`,
            subject: `New enquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            html: `
              <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
                <h2 style="margin:0 0 16px">New enquiry from the website</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p style="margin-top:16px"><strong>Message:</strong></p>
                <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
              </div>
            `,
          });

          return Response.json({ ok: true });
        } catch (error) {
          console.error("Contact form: failed to send email", error);
          return Response.json(
            { error: "Something went wrong while sending your message." },
            { status: 502 },
          );
        }
      },
    },
  },
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}