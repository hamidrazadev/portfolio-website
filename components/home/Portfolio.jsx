"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiBinoculars } from 'react-icons/gi'
import AnimatedOnScroll from '@/components/layout/AnimatedOnScroll'

const portfolioData = {
    title: "Look at my Portfolio",
    description: "I've worked on various projects proudly showcasing skills with considerable creativity across pretty diverse domains and fields of endeavor. Hopefully you discover them thoroughly captivating and pretty insightful meanwhile finding some value within. Feel free reaching out anytime for discussing a project or exploring more of my eclectic body of work pretty thoroughly.",
    skills: [
        { id: 1, name: "Movie Stack", link: "https://movie-stack-tau.vercel.app/", image: "/assets/Portfolio/MovieStack.png" },
        { id: 2, name: "News Gen", link: "https://hamidrazadev.github.io/NewsGen/", image: "/assets/Portfolio/NewsGen.png" },
        { id: 3, name: "Text Utils", link: "https://hamidrazadev.github.io/TextUtils/", image: "/assets/Portfolio/TextUtils.png" },
        { id: 4, name: "Time Remaining in New Year", link: "https://hamidrazadev.github.io/Time-Remaining-in-New-Year/", image: "/assets/Portfolio/TimeRemaining.png" }
    ]
}

export default function Portfolio() {
    return (
        <section
            id='portfolio'
            className="py-10 lg:py-20 bg-gradient-to-br from-slate-900 via-secondary to-slate-900 light:bg-gradient-to-br light:from-light-secondary light:via-light-primary/30 light:to-light-secondary overflow-hidden"
            aria-labelledby="portfolio-title"
        >
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <AnimatedOnScroll animation="fade-down" delay={0.1}>
                    <div className="lg:text-center mb-10 lg:mb-16">
                        <h2
                            id="portfolio-title"
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white light:text-gray-900 mb-2 lg:mb-4"
                        >
                            Look at my <span className="text-primary light:text-light-primary">Portfolio</span>
                        </h2>
                        <p className="text-white/80 light:text-gray-700 text-lg w-full lg:max-w-[70%] mx-auto leading-relaxed lg:px-4">
                            {portfolioData.description}
                        </p>
                    </div>
                </AnimatedOnScroll>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {portfolioData.skills.map((skill, index) => (
                        <AnimatedOnScroll
                            key={skill.id}
                            animation="zoom-in-up"
                            delay={0.1 + (index * 0.1)}
                        >
                            <article
                                className="group rounded-2xl p-6 border border-slate-700/50 light:border-light-primary/20 hover:border-primary/30 light:hover:border-light-primary transition-all duration-300 hover:scale-[1.02] h-96 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 light:bg-gradient-to-br light:from-white light:via-light-primary/10 light:to-white backdrop-blur-sm"
                                aria-labelledby={`portfolio-item-${skill.id}`}
                            >
                                <Image
                                    priority
                                    src={skill.image}
                                    alt={`${skill.name} project preview`}
                                    fill
                                    className="object-cover group-hover:scale-110 group-hover:blur-[2px] group-hover:brightness-75 transition-all duration-500"
                                />

                                {/* Hover overlay with icon */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Link
                                        href={skill.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-primary light:bg-light-primary hover:bg-secondary light:hover:bg-secondary text-white hover:text-primary light:hover:text-light-primary border border-secondary light:border-secondary hover:border-primary light:hover:border-light-primary shadow-lg hover:shadow-xl rounded-full p-4 flex items-center justify-center transition-all"
                                        aria-label={`View ${skill.name} project in a new tab`}
                                    >
                                        <GiBinoculars className="text-2xl" />
                                    </Link>
                                </div>

                                {/* Project name badge */}
                                <div
                                    id={`portfolio-item-${skill.id}`}
                                    className="absolute bottom-4 left-4 bg-slate-900/80 light:bg-light-primary text-white light:text-gray-900 px-3 py-1 rounded-full text-sm backdrop-blur-sm"
                                >
                                    {skill.name}
                                </div>
                            </article>
                        </AnimatedOnScroll>
                    ))}
                </div>
            </div>
        </section>
    )
}
