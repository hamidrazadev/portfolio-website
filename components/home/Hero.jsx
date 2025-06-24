"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

// Hero data in JSON format
const heroData = {
    greeting: "Hello!",
    name: "Muhammad Hamid Raza",
    profession: "Full Stack Developer",
    description: "I am a Full Stack Developer with over 2 years of experience in building scalable web applications. I specialize in creating dynamic and responsive user interfaces, as well as robust backend systems. My passion for coding drives me to continuously learn and adapt to new technologies, ensuring that I deliver high-quality solutions that meet client needs.",
    image: "/assets/MyPic.png",
    experience: {
        years: "2+",
        label: "Years Experience"
    },
    buttons: [
        {
            text: "Portfolio",
            href: "#portfolio",
            isPrimary: true
        },
        {
            text: "Hire Me",
            href: "#contact",
            isPrimary: false
        }
    ],
    decorativeElements: [
        { type: "circle", color: "blue", size: "small", position: "top-left" },
        { type: "circle", color: "cyan", size: "medium", position: "top-right" },
        { type: "circle", color: "purple", size: "large", position: "center-left" },
        { type: "circle", color: "blue", size: "small", position: "center-right" },
        { type: "circle", color: "cyan", size: "medium", position: "bottom-left" },
        { type: "circle", color: "purple", size: "small", position: "bottom-right" }
    ]
}

export default function Hero() {
    return (
        <section id="top" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 overflow-hidden py-10 lg:py-20">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0">
                {heroData.decorativeElements.map((element, index) => (
                    <div
                        key={index}
                        className={`absolute rounded-full blur-sm opacity-60 ${element.size === 'small' ? 'w-12 h-12' :
                            element.size === 'medium' ? 'w-20 h-20' : 'w-32 h-32'
                            } ${element.color === 'purple' ? 'bg-purple-500' :
                                element.color === 'cyan' ? 'bg-cyan-400' : 'bg-blue-500'
                            } ${element.position === 'top-left' ? 'top-20 left-20' :
                                element.position === 'top-right' ? 'top-16 right-32' :
                                    element.position === 'center-left' ? 'top-1/2 left-1/4' :
                                        element.position === 'center-right' ? 'top-1/3 right-1/4' :
                                            element.position === 'bottom-left' ? 'bottom-32 left-16' :
                                                'bottom-20 right-20'
                            }`}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 py-10 relative z-10">
                <div className="flex flex-col-reverse justify-between lg:px-12 lg:flex-row gap-12 items-center min-h-[80vh]">

                    {/* Left Content */}
                    <div className="text-white space-y-8">
                        {/* Greeting */}
                        <div className="relative inline-block">
                            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                                <span className="text-primary font-medium">{heroData.greeting}</span>
                            </div>
                            {/* Decorative arrow */}
                            <div className="absolute -top-2 -right-2 text-primary text-2xl rotate-12">
                                <Image src='/assets/HeroTextUpper.png' width={20} height={20} />
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                I'm <span className="text-primary">{heroData.name}</span>,
                            </h1>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white/90">
                                {heroData.profession}
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-white/80 text-lg leading-relaxed max-w-lg">
                            {heroData.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            {heroData.buttons.map((button, index) => (
                                <Link
                                    key={index}
                                    href={button.href}
                                    className={`px-8 py-4 rounded-full font-semibold transition-all flex items-center ${button.isPrimary
                                        ? 'bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl'
                                        : 'bg-white/10 hover:bg-primary text-white border border-white/30 backdrop-blur-sm'
                                        }`}
                                >
                                    {button.text}
                                    {
                                        button.isPrimary && <span className="ml-2">
                                            <FaArrowUpRightFromSquare />
                                        </span>
                                    }
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Experience Badge */}
                        {/* <div className="absolute top-0 right-0 z-20 bg-white/10 backdrop-blur-sm rounded-2xl p-3 lg:p-4 border border-white/20">
                            <div className="flex items-center gap-1 mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-orange-400 text-xs lg:text-sm">⭐</span>
                                ))}
                            </div>
                            <div className="text-white font-bold text-sm lg:text-lg">{heroData.experience.years}</div>
                            <div className="text-white/80 text-xs lg:text-sm">{heroData.experience.label}</div>
                        </div> */}

                        {/* Main Image Container */}
                        <div className="relative">
                            {/* Circular Background */}
                            <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-orange-400/20 to-purple-600/20 backdrop-blur-sm border border-white/20 flex items-end justify-center overflow-hidden">
                                <div className="w-full h-full relative">
                                    <Image
                                        src={heroData.image}
                                        alt={heroData.name}
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Decorative rings */}
                            <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-110"></div>
                            <div className="absolute inset-0 rounded-full border border-purple-400/30 scale-125"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}