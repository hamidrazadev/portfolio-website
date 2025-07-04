"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdWork } from 'react-icons/md'
import { FaFolderOpen } from 'react-icons/fa6'
import AnimatedOnScroll from '@/components/layout/AnimatedOnScroll'

// Why Hire Me data object
const whyHireMeData = {
    title: "Why Hire Me?",
    description: "I bring unwavering dedication and sheer creativity to every project and infuse it with considerable technical expertise somehow effectively. I strive very hard to exceed expectations with razor-sharp focus on quality and remarkably high client satisfaction under tight deadlines. My knack for cracking tricky problems and conjuring effective fixes makes me pretty darn reliable for your ambitious ventures apparently.",
    image: "/assets/MyPic.png",
    stats: [
        { id: 1, number: "2+", label: "Years of Experience" },
        { id: 2, number: "3+", label: "Responsive Websites" },
        { id: 3, number: "100%", label: "Happy Customers" }
    ],
    buttons: [
        { text: "Hire Me", href: "#contact", isPrimary: true },
        { text: "Portfolio", href: "#portfolio", isPrimary: false }
    ]
}

export default function WhyHireMe() {
    return (
        <section
            id="whyhireme"
            className="py-10 lg:py-20 bg-slate-950 light:bg-light-secondary overflow-hidden"
            aria-labelledby="whyhireme-title"
        >
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Content */}
                    <AnimatedOnScroll animation="fade-right" delay={0.1}>
                        <div className="text-white light:text-light-primary space-y-8 order-2 lg:order-1">

                            {/* Main Title */}
                            <AnimatedOnScroll animation="fade-down" delay={0.2}>
                                <h2
                                    id="whyhireme-title"
                                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                                >
                                    Why <span className="text-primary light:text-light-primary">Hire Me?</span>
                                </h2>
                            </AnimatedOnScroll>

                            {/* Description */}
                            <AnimatedOnScroll animation="fade-up" delay={0.3}>
                                <p className="text-white/80 light:text-secondary text-lg leading-relaxed">
                                    {whyHireMeData.description}
                                </p>
                            </AnimatedOnScroll>

                            {/* Statistics Cards */}
                            <AnimatedOnScroll animation="zoom-in" delay={0.4}>
                                <div
                                    className="bg-slate-800/50 light:bg-light-primary/10 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 light:border-light-primary/50"
                                    aria-label="Key achievements"
                                >
                                    <div className="grid grid-cols-3 gap-6">
                                        {whyHireMeData.stats.map((stat, index) => (
                                            <AnimatedOnScroll
                                                key={stat.id}
                                                animation="fade-up"
                                                delay={0.5 + (index * 0.1)}
                                            >
                                                <article className="text-center" aria-labelledby={`stat-${stat.id}`}>
                                                    <div
                                                        id={`stat-${stat.id}`}
                                                        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2"
                                                    >
                                                        <span className={stat.id === 2 ? "text-primary light:text-light-primary" : "text-white light:text-light-primary"}>
                                                            {stat.number}
                                                        </span>
                                                    </div>
                                                    <p className="text-white/80 light:text-secondary text-sm sm:text-base leading-tight">
                                                        {stat.label}
                                                    </p>
                                                </article>
                                            </AnimatedOnScroll>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedOnScroll>

                            {/* Hire Me Buttons */}
                            <AnimatedOnScroll animation="fade-up" delay={0.8}>
                                <div className="flex flex-wrap gap-4 mt-6">
                                    {whyHireMeData.buttons.map((button, index) => (
                                        <Link
                                            key={index}
                                            href={button.href}
                                            className={`px-4 py-2 rounded-full font-semibold transition-all flex gap-2 items-center ${button.isPrimary
                                                ? 'bg-primary light:bg-secondary hover:bg-secondary light:hover:bg-primary text-white hover:text-primary light:hover:text-secondary border border-secondary light:border-secondary hover:border-primary light:hover:border-light-primary shadow-lg hover:shadow-xl'
                                                : 'bg-white/10 light:bg-light-primary/10 hover:bg-primary light:hover:bg-light-primary text-white light:text-light-primary light:hover:text-secondary border border-white/30 light:border-light-primary/50 backdrop-blur-sm'
                                                }`}
                                            aria-label={button.isPrimary ? "Contact Me" : "View My Portfolio"}
                                        >
                                            <span>{button.text}</span>
                                            {button.isPrimary ? (
                                                <MdWork className="w-4 h-4" />
                                            ) : (
                                                <FaFolderOpen className="w-4 h-4" />
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            </AnimatedOnScroll>
                        </div>
                    </AnimatedOnScroll>

                    {/* Right Side - Image */}
                    <AnimatedOnScroll animation="zoom-in" delay={0.2}>
                        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
                            <div className="relative z-10">
                                <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-full border-4 border-primary light:border-light-primary overflow-hidden bg-white relative">
                                    <Image
                                        src={whyHireMeData.image}
                                        alt="Muhammad Hamid Raza profile image"
                                        fill
                                        className="object-cover object-center"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </AnimatedOnScroll>
                </div>
            </div>
        </section>
    )
}
