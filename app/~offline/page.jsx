import Link from 'next/link'
import { FaWifi } from 'react-icons/fa6'
import { HiHome, HiArrowPath, HiSignal, HiWifi } from 'react-icons/hi2'
import { TbRouter, TbPlane, TbSettings } from 'react-icons/tb'

const links = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Portfolio',
        href: '/#portfolio',
    },
    {
        name: 'Contact',
        href: '/#contact',
    },
    {
        name: 'About',
        href: '/#about',
    },
]

export const metadata = {
    title: "Offline | No Internet Connection",
    description: "You are currently offline. Please check your internet connection to view Muhammad Hamza Raza's portfolio website.",
    keywords: [
        "Offline Page",
        "No Internet",
        "Connection Error",
        "MHR Portfolio",
        "Muhammad Hamza Raza"
    ],
    authors: [{ name: "Muhammad Hamza Raza", url: process.env.NEXT_PUBLIC_WEBSITE_URL || "https://hamidrazadev.vercel.app" }],
    creator: "Muhammad Hamza Raza",
    publisher: "Muhammad Hamza Raza",
    generator: "Next.js",
    applicationName: "MHR Portfolio",
    referrer: "origin-when-cross-origin",
    metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL || "https://hamidrazadev.vercel.app"),
    alternates: {
        canonical: process.env.NEXT_PUBLIC_WEBSITE_URL + "/offline" || "https://hamidrazadev.vercel.app/offline"
    },
    openGraph: {
        title: "Offline | No Internet Connection",
        description: "You are currently offline. Please check your internet connection to view Muhammad Hamza Raza's portfolio website.",
        url: process.env.NEXT_PUBLIC_WEBSITE_URL + "/offline" || "https://hamidrazadev.vercel.app/offline",
        siteName: "MHR Portfolio",
        images: [
            {
                url: (process.env.NEXT_PUBLIC_WEBSITE_URL || "https://hamidrazadev.vercel.app") + "/assets/logo-512x512.png",
                width: 512,
                height: 512,
                alt: "Offline - No Internet Connection"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Offline | No Internet Connection",
        description: "You are currently offline. Please check your internet connection to view Muhammad Hamza Raza's portfolio website.",
        site: "@HamidRaza_Dev",
        creator: "@HamidRaza_Dev",
        images: [(process.env.NEXT_PUBLIC_WEBSITE_URL || "https://hamidrazadev.vercel.app") + "/assets/logo-512x512.png"]
    },
    category: "Error",
    archives: [],
    other: {
        "copyright": "© 2025 Muhammad Hamza Raza. All rights reserved.",
        "content-type": "website",
        "rating": "general"
    }
};

export default function Offline() {
    return (
        <div className="min-h-screen py-6 sm:py-10 bg-slate-950 relative overflow-hidden flex items-center justify-center px-4">
            {/* Main Content */}
            <div className="relative z-10 text-center w-full max-w-6xl mx-auto transition-all opacity-100 translate-y-0">

                {/* Offline Icon with Animation */}
                <div className="relative mb-6 sm:mb-8">
                    <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[8rem] text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-primary leading-none select-none flex justify-center items-center">
                        <HiWifi className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 text-primary animate-pulse" />
                    </div>
                </div>

                {/* Error Message */}
                <div className="mb-8 sm:mb-12 space-y-3 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
                        You're Offline
                    </h2>
                    <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
                        It seems like you've lost your internet connection.
                        Check your network settings and try again to explore my digital world!
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
                    <Link
                        href="/~offline"
                        className="w-full sm:w-auto cursor-pointer group inline-flex items-center justify-center gap-3 bg-primary hover:bg-secondary text-white hover:text-primary border border-secondary hover:border-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                        <HiArrowPath className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-300" />
                        <span>Try Again</span>
                    </Link>

                    <Link
                        href="/"
                        className="w-full sm:w-auto cursor-pointer group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all hover:border-primary/50 text-sm sm:text-base"
                    >
                        <HiHome className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Go to Homepage</span>
                    </Link>
                </div>

                {/* Connection Status */}
                <div className="mb-8 sm:mb-12 px-4">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 max-w-sm sm:max-w-md mx-auto">
                        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                            <FaWifi className="w-5 h-5 sm:w-6 sm:h-6 text-white/40" />
                            <span className="text-sm sm:text-base text-white/60">Connection Status</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-red-400 font-medium text-sm sm:text-base">Disconnected</span>
                        </div>
                    </div>
                </div>

                {/* Troubleshooting Tips */}
                <div className="mb-8 sm:mb-12 px-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Quick Fixes:</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-primary/30 transition-all duration-300">
                            <div className="flex justify-center mb-2 sm:mb-3">
                                <HiSignal className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                            </div>
                            <div className="text-xs sm:text-sm text-white/80 font-medium mb-1">Check Signal</div>
                            <div className="text-xs text-white/60 leading-tight">Verify network strength</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-primary/30 transition-all duration-300">
                            <div className="flex justify-center mb-2 sm:mb-3">
                                <TbRouter className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                            </div>
                            <div className="text-xs sm:text-sm text-white/80 font-medium mb-1">Restart Router</div>
                            <div className="text-xs text-white/60 leading-tight">Power cycle your router</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-primary/30 transition-all duration-300">
                            <div className="flex justify-center mb-2 sm:mb-3">
                                <TbPlane className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                            </div>
                            <div className="text-xs sm:text-sm text-white/80 font-medium mb-1">Airplane Mode</div>
                            <div className="text-xs text-white/60 leading-tight">Toggle on/off</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-primary/30 transition-all duration-300">
                            <div className="flex justify-center mb-2 sm:mb-3">
                                <TbSettings className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                            </div>
                            <div className="text-xs sm:text-sm text-white/80 font-medium mb-1">Check Settings</div>
                            <div className="text-xs text-white/60 leading-tight">Review network config</div>
                        </div>
                    </div>
                </div>

                {/* Helpful Links */}
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 px-4">
                    <p className="text-white/60 mb-3 sm:mb-4 text-sm sm:text-base">Once back online, explore these pages:</p>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {links.map((link, index) => (
                            <Link
                                href={link?.href}
                                key={index}
                                className="text-primary hover:text-primary hover:underline transition-colors duration-200 text-sm sm:text-base px-2 py-1"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}