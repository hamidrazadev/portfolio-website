"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaDownload } from 'react-icons/fa6'
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
        <section id="about" className="py-10 lg:py-20 bg-slate-950 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Image */}
                    <AnimatedOnScroll animation="fade-right" delay={0.1}>
                        <div className="relative flex justify-center lg:justify-start order-1 lg:order-1">
                            {/* Main image container */}
                            <div className="relative z-10">
                                <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-full border-4 border-primary overflow-hidden bg-gray-200">
                                    <Image
                                        src={aboutData.image}
                                        alt={aboutData.personalInfo.name.value}
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
                        <div className="text-white space-y-8 order-2 lg:order-2">

                            {/* Badge */}
                            <AnimatedOnScroll animation="fade-down" delay={0.2}>
                                <div className="inline-block">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                                        <span className="text-primary font-medium">{aboutData.badge}</span>
                                    </div>
                                </div>
                            </AnimatedOnScroll>

                            {/* Main Title */}
                            <AnimatedOnScroll animation="fade-up" delay={0.3}>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                    {aboutData.title}
                                </h2>
                            </AnimatedOnScroll>

                            {/* Description */}
                            <AnimatedOnScroll animation="fade-up" delay={0.4}>
                                <p className="text-white/80 text-lg leading-relaxed">
                                    {aboutData.description}
                                </p>
                            </AnimatedOnScroll>

                            {/* Personal Information Grid */}
                            <AnimatedOnScroll animation="fade-up" delay={0.5}>
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <span className="text-primary font-medium text-sm">
                                                {aboutData.personalInfo.name.label}
                                            </span>
                                            <p className="text-white font-medium">
                                                {aboutData.personalInfo.name.value}
                                            </p>
                                        </div>

                                        <div className="space-y-1">
                                            <span className="text-primary font-medium text-sm">
                                                {aboutData.personalInfo.phone.label}
                                            </span>
                                            <p className="text-white font-medium">
                                                <Link href={`tel:${aboutData.personalInfo.phone.value}`}>{aboutData.personalInfo.phone.value}</Link>
                                            </p>
                                        </div>

                                        <div className="space-y-1">
                                            <span className="text-primary font-medium text-sm">
                                                {aboutData.personalInfo.email.label}
                                            </span>
                                            <p className="text-white font-medium">
                                                <Link href={`mailto:${aboutData.personalInfo.email.value}`}>{aboutData.personalInfo.email.value}</Link>
                                            </p>
                                        </div>

                                        <div className="space-y-1">
                                            <span className="text-primary font-medium text-sm">
                                                {aboutData.personalInfo.twitter.label}
                                            </span>
                                            <p className="text-white font-medium">
                                                <Link href={`https://twitter.com/${aboutData.personalInfo.twitter.value}`} target="_blank">{aboutData.personalInfo.twitter.value}</Link>
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
                                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${button.isPrimary
                                                ? 'bg-primary hover:bg-secondary text-white hover:text-primary border border-secondary hover:border-primary shadow-lg hover:shadow-xl'
                                                : 'bg-white/10 hover:bg-primary text-white border border-white/30 backdrop-blur-sm'
                                                }`}
                                        >
                                            <span>{button.text}</span>
                                            {
                                                button.isPrimary &&
                                                <MdOutlineKeyboardArrowRight className="w-8 h-8" />
                                            }
                                            {
                                                button.hasIcon && !button.isPrimary && (
                                                    <FaDownload className="w-4 h-4" />
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
