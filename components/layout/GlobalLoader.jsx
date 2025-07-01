'use client';

import { useEffect, useState } from 'react';

export default function GlobalLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [hideLoader, setHideLoader] = useState(false);

    useEffect(() => {
        let timeout;

        const startHideSequence = () => {
            setIsLoading(false);
            timeout = setTimeout(() => {
                setHideLoader(true);
            }, 500); // Matches your CSS transition
        };

        if (document.readyState === 'complete') {
            startHideSequence();
        } else {
            const handleLoad = () => startHideSequence();
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }

        return () => clearTimeout(timeout); // Cleanup timeout
    }, []);

    if (hideLoader) return null;

    return (
        <div
            role="status"
            aria-live="polite"
            className={`fixed inset-0 z-[9999] flex flex-col gap-5 items-center text-center justify-center light:bg-light-secondary bg-black transition-opacity duration-500 ease-in-out ${isLoading ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
            <div className="loader" />
            <h2 className="sm:text-5xl text-3xl font-semibold animate-pulse duration-150">
                Loading Professional Showcase...
            </h2>
        </div>
    );
}