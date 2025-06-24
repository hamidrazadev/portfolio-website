"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaDownload, FaPhone, FaGlobe, FaLocationDot, FaBusinessTime } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";

const footerData = {
    logo: "/assets/logo.png",
    companyName: "Muhammad Hamid Raza",
    description: "A full-stack developer with a passion for creating dynamic and responsive web applications. Specializing in React, Node.js, and modern web technologies.",
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
        { url: "https://www.facebook.com/profile.php?id=61560391502253" },
        { url: "https://x.com/@HamidRaza_Dev" },
        { url: "https://www.linkedin.com/in/hamid-raza786" },
        { url: "https://www.instagram.com/hamidraza.dev" },
    ],
    copyright:
        "Copyright © 2025 Muhammad Hamid Raza. All Rights Reserved.",
    policies: [
        { name: "Terms & Service", url: "#" }
    ]
};

export default function Footer() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(() => setDeferredPrompt(null));
        }
    };

    return (
        <footer className="bg-[#0f0f1c] text-white px-4 lg:px-16 pt-12 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 border-b border-gray-700 pb-8">
                {/* Company Info */}
                <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-3">
                        <Image src={footerData.logo} alt="Logo" width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                        <h2 className="text-2xl font-semibold text-primary">{footerData.companyName}</h2>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-xs">{footerData.description}</p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                    <ul className="space-y-2 flex flex-col items-start">
                        {footerData.navigation.map((item, index) => (
                            <li key={index}>
                                <Link href={item.url} className="flex items-center gap-2 cursor-pointer hover:text-primary transition">
                                    <span>&#8250;</span> {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2 text-sm text-gray-300 flex flex-col items-start">
                        <li>
                            <Link href={`tel:${footerData.contact.phone}`} className="hover:text-primary flex items-center">
                                <span className="mr-2">
                                    <FaPhone />
                                </span>
                                {footerData.contact.phone}
                            </Link>
                        </li>
                        <li>
                            <Link href={`mailto:${footerData.contact.email}`} className="hover:text-primary flex items-center">
                                <span className="mr-2">
                                    <HiOutlineMailOpen />
                                </span>
                                {footerData.contact.email}
                            </Link>
                        </li>
                        <li>
                            <Link href={`https://www.google.com/maps/search/${encodeURIComponent(footerData.contact.location)}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center">
                                <span className="mr-2">
                                    <FaLocationDot />
                                </span>
                                {footerData.contact.location}
                            </Link>
                        </li>
                        <li>
                            <Link href={footerData.contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center">
                                <span className="mr-2">
                                    <FaGlobe />
                                </span>
                                {footerData.contact.website}
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">
                                <FaBusinessTime />
                            </span>
                            {footerData.contact.hours}
                        </li>
                    </ul>
                </div>

                {/* Install App & Social Links */}
                <div className="flex flex-col lg:items-start gap-4">
                    <div className="flex flex-col lg:items-center gap-2">
                        <h3 className="text-lg font-semibold">Install App</h3>
                        <button onClick={handleInstallClick} className="cursor-pointer px-4 py-2 rounded-full font-semibold transition-all bg-primary hover:bg-secondary text-white hover:text-primary border border-secondary hover:border-primary shadow-lg hover:shadow-xl inline-flex gap-2 items-center w-fit">
                            <FaDownload /> Install App
                        </button>
                    </div>

                    <div className="flex flex-col gap-2 lg:items-center">
                        <h4 className="text-lg font-semibold mt-2">Follow Me</h4>
                        <div className="flex gap-4 text-xl">
                            <Link href={footerData.socialLinks[0].url} target="_blank" rel="noopener noreferrer" className="hover:text-primary"><FaFacebookF /></Link>
                            <Link href={footerData.socialLinks[1].url} target="_blank" rel="noopener noreferrer" className="hover:text-primary"><FaXTwitter /></Link>
                            <Link href={footerData.socialLinks[2].url} target="_blank" rel="noopener noreferrer" className="hover:text-primary"><FaLinkedinIn /></Link>
                            <Link href={footerData.socialLinks[3].url} target="_blank" rel="noopener noreferrer" className="hover:text-primary"><FaInstagram /></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-6 text-gray-400 text-sm text-center flex flex-col items-center gap-2">
                <span>{footerData.copyright}</span>
                {/* <div className="flex gap-4">
                    {footerData.policies.map((item, index) => (
                        <Link key={index} href={item.url} className="hover:text-white">{item.name}</Link>
                    ))}
                </div> */}
            </div>
        </footer>
    );
}
