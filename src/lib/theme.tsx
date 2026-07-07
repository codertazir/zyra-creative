import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Theme = "dark" | "light";

type Ctx = { theme: Theme; setTheme: (t: Theme) => void; toggle: () => void };

const ThemeContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "zyra-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  // Read saved preference after mount (avoids SSR hydration mismatch)
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") setThemeState(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = (t: Theme) => setThemeState(t);
  const toggle = () => setThemeState((p) => (p === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
