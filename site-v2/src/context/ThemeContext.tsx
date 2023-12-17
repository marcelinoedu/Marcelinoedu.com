import { createContext, useState, ReactNode } from "react"; // Corrigido

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light", 
    toggleTheme: () => {} 
});

interface ThemeProviderProps {
    children: ReactNode; 
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme == "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

