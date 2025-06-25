"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import AnimatedOnScroll from "@/components/layout/AnimatedOnScroll";
import {
    FaFacebookF,
    FaXTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaDownload,
    FaPhone,
    FaGlobe,
    FaLocationDot,
    FaBusinessTime,
    FaGithub
} from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";

const footerData = {
    logo: "/assets/logo.png",
    companyName: "Muhammad Hamid Raza",
    description: "Thanks for dropping by my pretty snazzy portfolio hopefully you found some rad stuff in there. I'm perpetually receptive to novel ventures and collaborations that spark intense enthusiasm within rather exotic professional circles. I'm always here and happy help bring your concepts alive somehow down line.",
    navigation: [
        { text: "Home", url: "#top" },
        { text: "About", url: "#about" },
        { text: "Services", url: "#services" },
        { text: "Portfolio", url: "#portfolio" },
        { text: "Contact", url: "#contact" }
    ],
    contact: {
        phone: "+(92) 3168795804",
        email: "itmughal2023@gmail.com",
        location: "Lahore, Pakistan",
        website: "https://www.hamidrazadev.com",
        hours: "Mon - Fri / 8am - 10pm"
    },
    socialLinks: [
        { url: "https://github.com/hamidrazadev", label: "GitHub" },
        { url: "https://www.linkedin.com/in/hamidrazadev", label: "LinkedIn" },
        { url: "https://x.com/@HamidRaza_Dev", label: "Twitter" },
        { url: "https://www.instagram.com/hamidraza.dev", label: "Instagram" },
        { url: "https://www.facebook.com/hamidraza.dev/", label: "Facebook" },
    ],
    copyright:
        "Copyright © 2025 Muhammad Hamid Raza. All Rights Reserved.",
};

export default function Footer() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isAppInstalled, setIsAppInstalled] = useState(false);

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };

        window.addEventListener("beforeinstallprompt", handler);

        window.addEventListener("appinstalled", () => {
            setIsAppInstalled(true);
            toast.success('App already installed.', { style: { background: '#0a0c18', color: 'white' } });
        });

        if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
            setIsAppInstalled(true);
        }

        return () => {
            window.removeEventListener("beforeinstallprompt", handler);
        };
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    toast.success('App installed successfully!', { style: { background: '#0a0c18', color: 'white' } });
                } else {
                    toast.error('App installation was dismissed.', { style: { background: '#0a0c18', color: 'white' } });
                }
                setDeferredPrompt(null);
            });
        } else {
            toast.error('App installation not available.', { style: { background: '#0a0c18', color: 'white' } });
        }
    };

    return (
        <footer className="bg-[#0f0f1c] text-white px-4 lg:px-16 pt-12 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 border-b border-gray-700 pb-8">
                {/* Company Info */}
                <AnimatedOnScroll animation="fade-down" delay={0.1}>
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex items-center gap-3">
                            <Image src={footerData.logo} alt="Logo" width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                            <h3 className="text-2xl font-semibold text-primary">{footerData.companyName}</h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">{footerData.description}</p>
                    </div>
                </AnimatedOnScroll>

                {/* Navigation */}
                <AnimatedOnScroll animation="fade-up" delay={0.2}>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2 flex flex-col items-start">
                            {footerData.navigation.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.url} className="flex items-center gap-2 cursor-pointer hover:text-primary transition">
                                        <span className="text-xl">&#8250;</span> {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </AnimatedOnScroll>

                {/* Contact Info */}
                <AnimatedOnScroll animation="fade-up" delay={0.3}>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-gray-300 flex flex-col items-start">
                            <li>
                                <Link href={`tel:${footerData.contact.phone}`} className="hover:text-primary flex items-center">
                                    <span className="mr-2"><FaPhone /></span> {footerData.contact.phone}
                                </Link>
                            </li>
                            <li>
                                <Link href={`mailto:${footerData.contact.email}`} className="hover:text-primary flex items-center">
                                    <span className="mr-2"><HiOutlineMailOpen /></span> {footerData.contact.email}
                                </Link>
                            </li>
                            <li>
                                <Link href={`https://www.google.com/maps/search/${encodeURIComponent(footerData.contact.location)}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center">
                                    <span className="mr-2"><FaLocationDot /></span> {footerData.contact.location}
                                </Link>
                            </li>
                            <li>
                                <Link href={footerData.contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center">
                                    <span className="mr-2"><FaGlobe /></span> Visit Website
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2"><FaBusinessTime /></span> {footerData.contact.hours}
                            </li>
                        </ul>
                    </div>
                </AnimatedOnScroll>

                {/* Install App & Social Links */}
                <AnimatedOnScroll animation="fade-left" delay={0.4}>
                    <div className="flex flex-col lg:items-start gap-4">
                        <div className="flex flex-col lg:items-center gap-2">
                            <h3 className="text-lg font-semibold">Install App</h3>
                            {!isAppInstalled && (
                                <button
                                    onClick={handleInstallClick}
                                    className="cursor-pointer px-4 py-2 rounded-full font-semibold transition-transform transform hover:scale-105 bg-primary hover:bg-secondary text-white hover:text-primary border border-secondary hover:border-primary shadow-lg hover:shadow-xl inline-flex gap-2 items-center w-fit"
                                >
                                    <FaDownload /> Install App
                                </button>
                            )}
                            {isAppInstalled && (
                                <span className="text-sm text-gray-400">App is already installed.</span>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 lg:items-center">
                            <h4 className="text-lg font-semibold mt-2">Follow Me</h4>
                            <div className="flex gap-4 text-xl">
                                {footerData.socialLinks.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={item.label}
                                        className="hover:text-primary transition-transform transform hover:scale-110"
                                    >
                                        {index === 0 && <FaGithub />}
                                        {index === 1 && <FaLinkedinIn />}
                                        {index === 2 && <FaXTwitter />}
                                        {index === 3 && <FaInstagram />}
                                        {index === 4 && <FaFacebookF />}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedOnScroll>
            </div>

            {/* Bottom Section */}
            <AnimatedOnScroll animation="fade-down" delay={0.2}>
                <div className="mt-6 text-gray-400 text-sm text-center flex flex-col items-center gap-2">
                    <span>{footerData.copyright}</span>
                </div>
            </AnimatedOnScroll>
        </footer>
    );
}
