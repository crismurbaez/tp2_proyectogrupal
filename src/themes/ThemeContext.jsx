import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "hawkins";
    });

    useEffect(() => {

        document.documentElement.setAttribute(
            "data-theme",
            theme
        );

        localStorage.setItem("theme", theme);

    }, [theme]);

    const toggleTheme = () => {

        setTheme((prevTheme) =>
            prevTheme === "hawkins"
                ? "upside-down"
                : "hawkins"
        );
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}