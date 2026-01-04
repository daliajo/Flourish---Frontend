import { createContext, useState, useEffect} from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // const [theme, setTheme] = useState("light"); // "light" | "dark"

   /*
    Every time the theme changes, we save it to localStorage.
    This is what makes the theme survive:
    - page navigation
    - refresh
    - reopening the app
  */

    // Run once on app start:
// Get the saved theme from localStorage instead of checking it on every render.

   const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  
 function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
