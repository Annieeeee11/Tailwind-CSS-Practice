"use client";
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes';

const ModeToggel = () => {
    const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setSystemTheme(mediaQuery.matches ? "dark" : "light");
        const handlechange = (e: MediaQueryListEvent) => {
            setSystemTheme(e.matches ? "dark" : "light");
        }
        mediaQuery.addEventListener("change", handlechange);
        return () => mediaQuery.removeEventListener("change", handlechange);
    }, [])

    const {theme, setTheme} = useTheme();
    const handleThemeChange = () => {
        setTheme(theme === "dark" ? 'light' : 'dark');
    }

    const switch_theme = () => {
        switch (theme) {
            case "dark":
                setTheme("light");
                break;
            case "light":
                setTheme("dark");
                break;
            default:
                setTheme("dark");
                break;
            case "system":
                setTheme(systemTheme === "dark" ? "light" : "dark");
                break;
        }
    }

    return (
        <button onClick={switch_theme} className='absolute size-8 border border-neutral-200 dark:border-neutral-800 rounded-md flex items-center justify-center top-4 right-4 cursor-pointer'>
            <span className='absolute inset-0 size-5 shrink-0 dark:text-white text-neutral-500 dark:scale-0 scale-100 dark:rotate-45 transition-all durantion-300 m-auto'>⛅️</span>
            <span className='absolute inset-0 size-5 shrink-0 dark:text-white text-neutral-500 dark:scale-100 scale-0 dark:rotate-45 transition-all durantion-300 m-auto'>☾</span>
        </button>
    )
}

export default ModeToggel;