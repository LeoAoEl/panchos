import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  // Estado inicial: se obtiene la preferencia almacenada o se usa la media query
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        return stored as "light" | "dark";
      }
      // Si no hay preferencia almacenada, se usa la media query
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    return "light";
  });

  // Aplica o remueve la clase "dark" en el <html> y guarda la preferencia
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Función que alterna el tema
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="p-2 cursor-pointer rounded-md bg-gray-200 dark:bg-primary transition-colors duration-300 focus:outline-none"
    >
      <div className="relative w-6 h-6">
        {/* Ícono de sol */}
        <Sun
          className={`absolute top-0 left-0 w-6 h-6 transition-transform duration-300 transform ${
            theme === "dark" ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        />
        {/* Ícono de luna */}
        <Moon
          className={`absolute top-0 left-0 w-6 h-6 transition-transform duration-300 transform ${
            theme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
