'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full bg-primary text-white hover:text-primary cursor-pointer hover:bg-transparent border border-white hover:border-primary text-3xl h-12 w-12 items-center flex justify-center"
        >
            {theme === 'dark' ?
                <MdOutlineLightMode className="" /> :
                <MdOutlineDarkMode className="" />
            }
        </button>
    );
}