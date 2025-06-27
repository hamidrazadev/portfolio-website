"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { CgMenu } from "react-icons/cg";
import SidePanel from './SidePanel';
import AnimatedOnScroll from '@/components/layout/AnimatedOnScroll';

const NavUrls = [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '#services' },
    { text: 'Portfolio', href: '#portfolio' },
    { text: 'About', href: '#about' },
    { text: 'Contact', href: '#contact' }
];

export default function Navbar() {
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

    return (
        <div className="container mx-auto rounded-full bg-white shadow-md shadow-gray-300 lg:p-4 flex items-center justify-between lg:h-[80px] h-[60px] p-2">
            {/* Logo */}
            <AnimatedOnScroll animation="fade-right" delay={0.1}>
                <Link href={'#top'} className="items-center justify-center flex overflow-clip rounded-full h-12 w-12 lg:h-16 lg:w-16 bg-white shadow shadow-slate-50">
                    <Image src={'/assets/logo.png'} className="rounded-full" width={60} height={60} alt="Logo" priority />
                </Link>
            </AnimatedOnScroll>

            {/* Navigation Links */}
            <div className="items-center gap-6 lg:flex hidden text-lg">
                {NavUrls.map((NavUrl, index) => (
                    <AnimatedOnScroll key={index} animation="fade-down" delay={0.2 + index * 0.1}>
                        <Link href={NavUrl.href} className="hover:text-primary font-semibold text-secondary">
                            {NavUrl.text}
                        </Link>
                    </AnimatedOnScroll>
                ))}
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-2">
                {/* Let's Talk Button */}
                <AnimatedOnScroll animation="fade-left" delay={0.6}>
                    <Link href={'#contact'} className="sm:flex hidden items-center gap-2 px-4 py-2 bg-primary hover:bg-white border hover:border-primary border-white text-white hover:text-primary rounded-full transition-all">
                        <p>Let's Talk</p>
                        <FaArrowUpRightFromSquare />
                    </Link>
                </AnimatedOnScroll>

                {/* Mobile Menu Button */}
                <AnimatedOnScroll animation="fade-left" delay={0.7}>
                    <button onClick={() => setIsSidePanelOpen(!isSidePanelOpen)} className="flex lg:hidden items-center justify-center p-2 rounded-full shadow shadow-slate-50 bg-primary text-2xl text-white">
                        <CgMenu />
                    </button>
                </AnimatedOnScroll>
            </div>

            {/* Side Panel */}
            <SidePanel isOpen={isSidePanelOpen} onClose={() => setIsSidePanelOpen(false)} />
        </div>
    )
}
