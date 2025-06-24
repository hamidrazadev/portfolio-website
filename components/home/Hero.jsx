"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import AnimatedOnScroll from '@/components/layout/AnimatedOnScroll'

// Hero data in JSON format
const heroData = {
    greeting: "Hello!",
    name: "Muhammad Hamid Raza",
    profession: "Full Stack Developer",
    description: "I've been building scalable web applications for over 2 years as a Full Stack Developer with considerable expertise. I craft snappy user interfaces with flair and beefy backend systems that work smoothly under pressure most of time. My coding fervor fuels relentless pursuit of novel tech paradigms ensuring high-grade deliverables that satisfy diverse client requirements pretty effectively nowadays.",
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
                    <AnimatedOnScroll animation="fade-right" delay={0.1}>
                        <div className="text-white space-y-8">
                            {/* Greeting */}
                            <AnimatedOnScroll animation="fade-down" delay={0.2}>
                                <div className="relative inline-block">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                                        <span className="text-primary font-medium">{heroData.greeting}</span>
                                    </div>
                                    {/* Decorative arrow */}
                                    <div className="absolute -top-2 -right-2 text-primary text-2xl rotate-12">
                                        <Image src='/assets/HeroTextUpper.png' width={20} height={20} />
                                    </div>
                                </div>
                            </AnimatedOnScroll>

                            {/* Main Heading */}
                            <AnimatedOnScroll animation="fade-up" delay={0.3}>
                                <div className="space-y-4">
                                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                        I'm <span className="text-primary">{heroData.name}</span>,
                                    </h1>
                                    <h2 className="text-4xl lg:text-5xl font-bold text-white/90">
                                        {heroData.profession}
                                    </h2>
                                </div>
                            </AnimatedOnScroll>

                            {/* Description */}
                            <AnimatedOnScroll animation="fade-up" delay={0.4}>
                                <p className="text-white/80 text-lg leading-relaxed max-w-lg">
                                    {heroData.description}
                                </p>
                            </AnimatedOnScroll>

                            {/* Action Buttons */}
                            <AnimatedOnScroll animation="fade-up" delay={0.5}>
                                <div className="flex flex-wrap gap-4">
                                    {heroData.buttons.map((button, index) => (
                                        <Link
                                            key={index}
                                            href={button.href}
                                            className={`px-4 py-2 rounded-full font-semibold transition-all flex items-center ${button.isPrimary
                                                ? 'bg-primary hover:bg-secondary text-white hover:text-primary border border-secondary hover:border-primary shadow-lg hover:shadow-xl'
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
                            </AnimatedOnScroll>
                        </div>
                    </AnimatedOnScroll>

                    {/* Right Content - Image */}
                    <AnimatedOnScroll animation="fade-left" delay={0.2}>
                        <div className="relative flex justify-center lg:justify-end">
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
                    </AnimatedOnScroll>
                </div>
            </div>
        </section>
    )
}
