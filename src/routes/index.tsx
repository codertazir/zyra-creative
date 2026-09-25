import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Preloader } from "@/components/site/Preloader";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Stats } from "@/components/site/Stats";
import { Approach } from "@/components/site/Approach";
import { Portfolio } from "@/components/site/Portfolio";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <Approach />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
