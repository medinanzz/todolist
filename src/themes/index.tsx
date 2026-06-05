import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export function DarkMode() {
    const [isDark, setIsDark] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme ? storedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    });
       useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark]);
    function handleMode() {
        const darkMode = !isDark;
        setIsDark(darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
    return (
        <div>
        <button onClick={handleMode} className='absolute left-4 top-4 bg-[#ddd] text-black p-5 flex items-center justify-center rounded-full hover:bg-[#e3e3e3] transition-colors duration-300 dark:text-white dark:bg-[#111827] dark:hover:bg-[#111] cursor-pointer dark:hover:sahdow-[0_0_10px_rgba(255,255,255,0.2)] shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_10px_rgba(255,255,255,0.2)] animate-show '>
            <FiMoon className={`absolute ${isDark ? 'opacity-100' : 'opacity-0'}`} size={20} />
            <FiSun className={`absolute ${isDark ? 'opacity-0' : 'opacity-100'}`} size={20} />
        </button>
        </div>
  );
}