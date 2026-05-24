import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "../../themes/ThemeContext";

function ThemeToggle() {

    const { theme, toggleTheme } = useTheme();

    const isUpsideDown = theme === "upside-down";

    return (

        <button
            className="theme-toggle"
            onClick={toggleTheme}
        >

            <img
                src={
                    isUpsideDown
                        ? "/img/btn_up.png"
                        : "/img/btn_down.png"
                }
                alt="Toggle theme"
                className="theme-toggle-icon"
            />

        </button>
    );
}

export default ThemeToggle;