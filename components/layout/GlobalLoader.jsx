'use client';

import { useEffect, useState } from 'react';

export default function GlobalLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [hideLoader, setHideLoader] = useState(false); // Control when to unmount

    useEffect(() => {
        if (document.readyState === 'complete') {
            startHideSequence();
            return;
        }

        const handleLoad = () => {
            startHideSequence();
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    const startHideSequence = () => {
        // Start the animation
        setIsLoading(false);

        // Delay unmounting the loader to allow animation to finish (500ms matches CSS duration)
        setTimeout(() => {
            setHideLoader(true);
        }, 500);
    };

    if (hideLoader) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col gap-5 items-center text-center justify-center bg-white dark:bg-black transition-opacity duration-500 ease-in-out ${isLoading ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
            <div className="loader"></div>
            <h2 className="sm:text-5xl text-3xl font-semibold animate-pulse duration-150">Getting Your Content Ready...</h2>
        </div>
    );
}
