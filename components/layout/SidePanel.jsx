"use client";
import Link from 'next/link';
import React from 'react';
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
    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Side Panel */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">

                    {/* Header */}
                    <AnimatedOnScroll animation="fade-down" delay={0.1}>
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <Link onClick={onClose} href={'#top'} className="items-center justify-center flex overflow-clip rounded-full h-12 w-12 lg:h-16 lg:w-16 bg-white shadow shadow-slate-50">
                                <Image src={'/assets/logo.png'} className="rounded-full" width={60} height={60} alt="Logo" priority />
                            </Link>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <IoClose className="text-2xl text-secondary" />
                            </button>
                        </div>
                    </AnimatedOnScroll>

                    {/* Navigation Links */}
                    <div className="flex-1 px-6 py-8 overflow-y-auto">
                        <nav className="space-y-6">
                            {NavUrls.map((navUrl, index) => (
                                <AnimatedOnScroll key={index} animation="fade-right" delay={0.2 + index * 0.1}>
                                    <Link
                                        href={navUrl.href}
                                        onClick={onClose}
                                        className="block text-lg font-semibold text-secondary hover:text-primary transition-colors py-2"
                                    >
                                        {navUrl.text}
                                    </Link>
                                </AnimatedOnScroll>
                            ))}
                        </nav>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 border-t border-gray-100 space-y-4">
                        {/* Theme Toggle */}
                        {/* <div className="flex items-center justify-between">
                            <span className="text-secondary font-medium">Theme</span>
                            <ThemeToggle />
                        </div> */}

                        {/* Let's Talk Button */}
                        <AnimatedOnScroll animation="fade-up" delay={0.5}>
                            <Link
                                href={'#contact'}
                                onClick={onClose}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary hover:bg-white border hover:border-primary border-white text-white hover:text-primary rounded-full transition-all font-medium"
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
