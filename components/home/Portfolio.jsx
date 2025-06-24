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
        { id: 2, name: "News Gen", link: "•https://hamidwebs.github.io/NewsGen/", image: "/assets/Portfolio/NewsGen.png" },
        { id: 3, name: "Text Utils", link: "https://hamidwebs.github.io/TextUtils/", image: "/assets/Portfolio/TextUtils.png" },
        { id: 4, name: "Time Remaining in New Year", link: "https://hamidwebs.github.io/Time-Remaining-in-New-Year/", image: "/assets/Portfolio/TimeRemaining.png" }
    ]
}

export default function Portfolio() {
    return (
        <section id='portfolio' className="py-10 lg:py-20 bg-secondary overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <AnimatedOnScroll animation="fade-down" delay={0.1}>
                    <div className="lg:text-center mb-10 lg:mb-16">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 lg:mb-4">
                            Look at my <span className="text-primary">Portfolio</span>
                        </h2>
                        <p className="text-white/80 text-lg w-full lg:max-w-[70%] mx-auto leading-relaxed lg:px-4">
                            {portfolioData.description}
                        </p>
                    </div>
                </AnimatedOnScroll>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {portfolioData.skills.map((skill, index) => (
                        <AnimatedOnScroll
                            key={skill.id}
                            animation="zoom-in-up"
                            delay={0.1 + (index * 0.1)}
                        >
                            <div className="group rounded-2xl p-6 border border-slate-700/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] h-96 flex items-center justify-center relative overflow-hidden">

                                <Image
                                    src={skill.image}
                                    alt={skill.name}
                                    fill
                                    className="object-cover group-hover:scale-110 group-hover:blur-[2px] group-hover:brightness-75 transition-all duration-500"
                                />

                                {/* Hover overlay with icon */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Link
                                        href={skill.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-primary hover:bg-secondary text-white hover:text-primary border border-secondary hover:border-primary shadow-lg hover:shadow-xl rounded-full p-4 flex items-center justify-center transition-all"
                                        aria-label={`View ${skill.name} project`}
                                    >
                                        <GiBinoculars className="text-2xl" />
                                    </Link>
                                </div>

                                {/* Skill name badge */}
                                <div className="absolute bottom-4 left-4 bg-slate-900/80 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                    {skill.name}
                                </div>
                            </div>
                        </AnimatedOnScroll>
                    ))}
                </div>
            </div>
        </section>
    )
}
