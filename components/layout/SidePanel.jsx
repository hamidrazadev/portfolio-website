"use client";
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';
import AnimatedOnScroll from '@/components/layout/AnimatedOnScroll';

const NavUrls = [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '#services' },
    { text: 'Portfolio', href: '#portfolio' },
    { text: 'About', href: '#about' },
    { text: 'Contact', href: '#contact' }
];

export default function SidePanel({ isOpen, onClose }) {

    // Optional: Prevent body scroll when panel is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; }
    }, [isOpen]);

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Side Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-secondary light:bg-light-secondary shadow-2xl shadow-slate-500 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
            >
                <div className="flex flex-col h-full">

                    {/* Header */}
                    <AnimatedOnScroll animation="fade-down" delay={0.1}>
                        <div className="flex items-center justify-between p-6 border-b border-secondary light:border-light-primary">
                            <Link onClick={onClose} href={'#top'} className="items-center justify-center flex overflow-clip rounded-full h-12 w-12 lg:h-16 lg:w-16 bg-primary light:bg-light-secondary shadow shadow-slate-50 light:shadow-primary">
                                <Image src={'/assets/logo.png'} className="rounded-full" width={60} height={60} alt="Logo" priority />
                            </Link>
                            <button
                                onClick={onClose}
                                aria-label="Close menu"
                                className="p-2 rounded-full hover:bg-secondary light:hover:bg-light-secondary transition-colors"
                            >
                                <IoClose className="text-2xl text-light-secondary light:text-light-primary" />
                            </button>
                        </div>
                    </AnimatedOnScroll>

                    {/* Navigation Links */}
                    <div className="flex-1 px-6 py-8 overflow-y-auto">
                        <nav className="space-y-6">
                            {NavUrls.map((navUrl, index) => (
                                <AnimatedOnScroll key={index} animation="fade-up" delay={0.2 + index * 0.1}>
                                    <Link
                                        href={navUrl.href}
                                        onClick={onClose}
                                        className="block text-lg font-semibold text-light-secondary light:text-light-primary hover:text-primary light:hover:text-light-primary transition-colors py-2"
                                    >
                                        {navUrl.text}
                                    </Link>
                                </AnimatedOnScroll>
                            ))}
                        </nav>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 border-t border-secondary light:border-light-primary space-y-4">
                        {/* Theme Toggle */}
                        <div className="flex items-center justify-between">
                            <span className="text-light-secondary light:text-light-primary font-medium">Theme</span>
                            <ThemeToggle />
                        </div>

                        {/* Let's Talk Button */}
                        <AnimatedOnScroll animation="fade-up" delay={0.5}>
                            <Link
                                href={'#contact'}
                                onClick={onClose}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary light:bg-light-primary hover:bg-secondary light:hover:bg-light-secondary border hover:border-primary border-primary light:border-light-primary hover:text-primary light:hover:text-light-primary text-light-secondary light:text-light-secondary rounded-full transition-all font-medium"
                            >
                                <span>Let's Talk</span>
                                <FaArrowUpRightFromSquare />
                            </Link>
                        </AnimatedOnScroll>
                    </div>
                </div>
            </div>
        </>
    );
}
