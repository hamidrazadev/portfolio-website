"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaDownload, FaEnvelope } from 'react-icons/fa6'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import AnimatedOnScroll from '@/components/layout/AnimatedOnScroll'

// About data in JSON format
const aboutData = {
    badge: "About Me",
    title: "Muhammad Hamid Raza",
    description: "I craft pretty slick web applications with a passion for full stack development and a knack for creating razor-sharp user interfaces. I excel in front-end and back-end development possessing strong skills in HTML CSS JavaScript React Node.js and adept database management. I revel in tackling gnarly issues and excel vigorously in environments that are frenetic and replete with obstacles. Eagerly I explore new tech pretty frequently and enhance development skills relentlessly with obsessive fervor nowadays. I aim at crafting super slick digital interactions that pump out tangible worth for end users pretty quickly.",
    image: "/assets/MyPic.png",
    personalInfo: {
        name: {
            label: "Name:",
            value: "Muhammad Hamid Raza"
        },
        phone: {
            label: "Phone:",
            value: "+92 3168795804"
        },
        email: {
            label: "Email:",
            value: "itmughal2023@gmail.com"
        },
        twitter: {
            label: "Twitter:",
            value: "@HamidRaza_Dev"
        }
    },
    buttons: [
        {
            text: "Contact me",
            href: "#contact",
            isPrimary: true
        },
        {
            text: "Download my resume",
            href: "https://drive.google.com/file/d/13jOSzvoHMwV3RQvXFDCl0JzLTyZsIO-l/view?usp=sharing",
            isPrimary: false,
            hasIcon: true
        }
    ]
}

export default function About() {
    return (
        <section id="about" className="py-10 lg:py-20 bg-slate-950 light:bg-light-secondary overflow-hidden" aria-labelledby="about-title">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Image */}
                    <AnimatedOnScroll animation="fade-right" delay={0.1}>
                        <div className="relative flex justify-center lg:justify-start order-1 lg:order-1">
                            {/* Main image container */}
                            <div className="relative z-10">
                                <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-full border-4 border-primary light:border-light-primary overflow-hidden bg-gray-200 light:bg-gray-100">
                                    <Image
                                        src={aboutData.image}
                                        alt={`Profile picture of ${aboutData.personalInfo.name.value}`}
                                        width={450}
                                        height={450}
                                        className="w-full h-full object-cover object-top"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </AnimatedOnScroll>

                    {/* Right Side - Content */}
                    <AnimatedOnScroll animation="fade-left" delay={0.1}>
                        <div className="text-white light:text-secondary space-y-8 order-2 lg:order-2">

                            {/* Badge */}
                            <AnimatedOnScroll animation="fade-down" delay={0.2}>
                                <div className="inline-block" role="presentation" aria-hidden="true">
                                    <div className="bg-white/10 light:bg-light-secondary backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 light:border-secondary/20">
                                        <span className="text-primary light:text-light-primary font-medium">{aboutData.badge}</span>
                                    </div>
                                </div>
                            </AnimatedOnScroll>

                            {/* Main Title */}
                            <AnimatedOnScroll animation="fade-up" delay={0.3}>
                                <h2 id="about-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                    {aboutData.title}
                                </h2>
                            </AnimatedOnScroll>

                            {/* Description */}
                            <AnimatedOnScroll animation="fade-up" delay={0.4}>
                                <p className="text-white/80 light:text-secondary/80 text-lg leading-relaxed">
                                    {aboutData.description}
                                </p>
                            </AnimatedOnScroll>

                            {/* Personal Information Grid */}
                            <AnimatedOnScroll animation="fade-up" delay={0.5}>
                                <div className="bg-white/5 light:bg-secondary/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 light:border-secondary/10" aria-label="Personal Information">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <span className="text-primary light:text-light-primary font-medium text-sm">
                                                {aboutData.personalInfo.name.label}
                                            </span>
                                            <p className="text-white light:text-secondary font-medium">
                                                {aboutData.personalInfo.name.value}
                                            </p>
                                        </div>

                                        <div className="space-y-1">
                                            <span className="text-primary light:text-light-primary font-medium text-sm">
                                                {aboutData.personalInfo.phone.label}
                                            </span>
                                            <p className="text-white light:text-secondary font-medium">
                                                <Link href={`tel:${aboutData.personalInfo.phone.value}`} aria-label={`Call ${aboutData.personalInfo.phone.value}`}>{aboutData.personalInfo.phone.value}</Link>
                                            </p>
                                        </div>

                                        <div className="space-y-1">
                                            <span className="text-primary light:text-light-primary font-medium text-sm">
                                                {aboutData.personalInfo.email.label}
                                            </span>
                                            <p className="text-white light:text-secondary font-medium">
                                                <Link href={`mailto:${aboutData.personalInfo.email.value}`} aria-label={`Email ${aboutData.personalInfo.email.value}`}>{aboutData.personalInfo.email.value}</Link>
                                            </p>
                                        </div>

                                        <div className="space-y-1">
                                            <span className="text-primary light:text-light-primary font-medium text-sm">
                                                {aboutData.personalInfo.twitter.label}
                                            </span>
                                            <p className="text-white light:text-secondary font-medium">
                                                <Link href={`https://twitter.com/${aboutData.personalInfo.twitter.value}`} target="_blank" rel="noopener noreferrer" aria-label={`Visit Twitter profile of ${aboutData.personalInfo.twitter.value}`}>
                                                    {aboutData.personalInfo.twitter.value}
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedOnScroll>

                            {/* Action Buttons */}
                            <AnimatedOnScroll animation="fade-up" delay={0.6}>
                                <div className="flex flex-wrap gap-4">
                                    {aboutData.buttons.map((button, index) => (
                                        <Link
                                            key={index}
                                            href={button.href}
                                            target={button.isPrimary ? "_self" : "_blank"}
                                            rel={!button.isPrimary ? "noopener noreferrer" : undefined}
                                            aria-label={button.isPrimary ? button.text : `${button.text} (opens in new tab)`}
                                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${button.isPrimary
                                                ? 'bg-primary light:bg-light-primary hover:bg-secondary light:hover:bg-light-secondary text-white light:text-light-secondary hover:text-primary light:hover:text-light-primary border border-secondary hover:border-primary light:border-light-primary shadow-lg hover:shadow-xl'
                                                : 'bg-white/10 light:bg-secondary/10 hover:bg-primary light:hover:bg-light-primary text-white light:text-secondary border border-white/30 light:border-secondary/30 backdrop-blur-sm'
                                                }`}
                                        >
                                            <span>{button.text}</span>
                                            {
                                                button.isPrimary &&
                                                <FaEnvelope className="w-4 h-4" aria-hidden="true" />
                                            }
                                            {
                                                button.hasIcon && !button.isPrimary && (
                                                    <FaDownload className="w-4 h-4" aria-hidden="true" />
                                                )
                                            }
                                        </Link>
                                    ))}
                                </div>
                            </AnimatedOnScroll>
                        </div>
                    </AnimatedOnScroll>
                </div>
            </div>
        </section>
    )
}