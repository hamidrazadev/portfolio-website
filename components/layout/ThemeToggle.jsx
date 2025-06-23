'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 border rounded bg-slate-200 dark:bg-slate-700 text-black dark:text-white"
        >
            Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
    );
}
