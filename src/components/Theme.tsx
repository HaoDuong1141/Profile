"use client";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export const Theme = () => {
    const { theme, setTheme } = useTheme();
    const handleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    return (
        <button onClick={handleTheme}>
            {theme === "light" ? (
                <FontAwesomeIcon icon={faMoon} className="absolute h-8 w-8" />
            ) : (
                <FontAwesomeIcon icon={faSun} className="absolute h-8 w-8" />
            )}
        </button>
    );
};

export default Theme;
