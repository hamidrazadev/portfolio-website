import Link from 'next/link'
import { FaBriefcase } from 'react-icons/fa6'
import { HiHome, HiArrowLeft } from 'react-icons/hi'

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
    title: "404 | Page Not Found",
    description: "The page you are looking for does not exist on Muhammad Hamza Raza's portfolio website.",
    keywords: [
        "404 Page",
        "Page Not Found",
        "MHR Portfolio",
        "Muhammad Hamza Raza"
    ],
    authors: [{ name: "Muhammad Hamza Raza", url: process.env.NEXT_PUBLIC_WEBSITE_URL || "https://mhr-portfolio-five.vercel.app" }],
    creator: "Muhammad Hamza Raza",
    publisher: "Muhammad Hamza Raza",
    generator: "Next.js",
    applicationName: "MHR Portfolio",
    referrer: "origin-when-cross-origin",
    metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL || "https://mhr-portfolio-five.vercel.app"),
    alternates: {
        canonical: process.env.NEXT_PUBLIC_WEBSITE_URL + "/not-found" || "https://mhr-portfolio-five.vercel.app/not-found"
    },
    openGraph: {
        title: "404 | Page Not Found",
        description: "The page you are looking for does not exist on Muhammad Hamza Raza's portfolio website.",
        url: process.env.NEXT_PUBLIC_WEBSITE_URL + "/not-found" || "https://mhr-portfolio-five.vercel.app/not-found",
        siteName: "MHR Portfolio",
        images: [
            {
                url: (process.env.NEXT_PUBLIC_WEBSITE_URL || "https://mhr-portfolio-five.vercel.app") + "/assets/logo-512x512.png",
                width: 512,
                height: 512,
                alt: "404 Page Not Found"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "404 | Page Not Found",
        description: "The page you are looking for does not exist on Muhammad Hamza Raza's portfolio website.",
        site: "@HamidRaza_Dev",
        creator: "@HamidRaza_Dev",
        images: [(process.env.NEXT_PUBLIC_WEBSITE_URL || "https://mhr-portfolio-five.vercel.app") + "/assets/logo-512x512.png"]
    },
    category: "Error",
    archives: [],
    other: {
        "copyright": "© 2025 Muhammad Hamza Raza. All rights reserved.",
        "content-type": "website",
        "rating": "general"
    }
};

export default function NotFound() {
    return (
        <div className="min-h-screen py-10 bg-slate-950 relative overflow-hidden flex items-center justify-center">
            {/* Main Content */}
            <div className={`relative z-10 text-center px-4 transition-all opacity-100 translate-y-0`}>

                {/* 404 Number with Glitch Effect */}
                <div className="relative mb-8">
                    <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-primary leading-none select-none">
                        404
                    </h1>
                </div>

                {/* Error Message */}
                <div className="mb-12 space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                        The page you're looking for seems to have vanished into the digital void.
                        Don't worry, even the best explorers sometimes take a wrong turn!
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Link href={'/'} className="cursor-pointer group inline-flex items-center gap-3 bg-primary hover:bg-secondary text-white hover:text-primary border border-secondary hover:border-primary px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
                        <HiHome className="w-5 h-5" />
                        <span>Go Home</span>
                    </Link>

                    <Link href={'/#portfolio'} className="cursor-pointer group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-semibold transition-all hover:border-primary/50">
                        <FaBriefcase className="w-5 h-5" />
                        <span>Want to see Portfolio?</span>
                    </Link>
                </div>

                {/* Fun Stats */}
                {/* <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-primary/30 transition-all duration-300">
                        <div className="text-2xl font-bold text-primary mb-1">∞</div>
                        <div className="text-xs text-white/60">Possibilities</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-primary/30 transition-all duration-300">
                        <div className="text-2xl font-bold text-primary mb-1">0</div>
                        <div className="text-xs text-white/60">Pages Found</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-primary/30 transition-all duration-300">
                        <div className="text-2xl font-bold text-primary mb-1">1</div>
                        <div className="text-xs text-white/60">Way Forward</div>
                    </div>
                </div> */}

                {/* Helpful Links */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="text-white/60 mb-4">Or try these popular pages:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {links.map((link, index) => (
                            <Link
                                href={link?.href}
                                key={index}
                                className="text-primary hover:text-primary hover:underline transition-colors duration-200"
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