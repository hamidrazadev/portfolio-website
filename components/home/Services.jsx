import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

// Services data
const servicesData = {
    title: "My Services",
    description: "Explore the range of services I offer to help you achieve your goals. From UI/UX design to web development, I provide comprehensive solutions tailored to your needs.",
    services: [
        {
            id: 1,
            title: "UI/ UX Design",
            image: "/assets/placeholder.png", // Replace with your actual image path
            href: "https://example.com"
        },
        {
            id: 2,
            title: "Web Design",
            image: "/assets/placeholder.png", // Replace with your actual image path
            href: "https://example.com"
        },
        {
            id: 3,
            title: "Web Development",
            image: "/assets/placeholder.png", // Replace with your actual image path
            href: "https://example.com"
        },
        {
            id: 4,
            title: "Web Development",
            image: "/assets/placeholder.png", // Replace with your actual image path
            href: "https://example.com"
        },
        {
            id: 5,
            title: "Web Development",
            image: "/assets/placeholder.png", // Replace with your actual image path
            href: "https://example.com"
        },
        {
            id: 6,
            title: "Web Development",
            image: "/assets/placeholder.png", // Replace with your actual image path
            href: "https://example.com"
        }
    ],
    seeAllButton: {
        text: "See All",
        href: "#all-services"
    }
}

export default function Services() {
    return (
        <section id='services' className="lg:py-20 py-10 bg-slate-900">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="lg:text-center mb-10 lg:mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white lg:mb-6 mb-2">
                        My <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-white/80 text-lg w-full lg:max-w-[70%] mx-auto leading-relaxed lg:px-4">
                        {servicesData.description}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {servicesData.services.map((service) => (
                        <div key={service.id} className="group relative">
                            {/* Service Card */}
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 hover:border-primary/30 transition-all duration-300">
                                {/* Service Title */}
                                <h3 className="text-xl font-semibold text-white mb-6">
                                    {service.title}
                                </h3>

                                {/* Image Container */}
                                <div className="relative rounded-2xl overflow-hidden bg-slate-700/30 aspect-[4/3] mb-6">
                                    <Image
                                        src={service.image || "/assets/placeholder.png"}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Arrow Button */}
                                <Link
                                    target="_blank"
                                    href={service.href}
                                    className="absolute bottom-8 right-8 w-12 h-12 bg-primary hover:bg-secondary border border-secondary text-white hover:text-primary hover:border-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                >
                                    <FaArrowUpRightFromSquare className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See All Button */}
                {/* <div className="text-center">
                    <Link
                        href={servicesData.seeAllButton.href}
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <span>{servicesData.seeAllButton.text}</span>
                        <HiArrowRight className="w-4 h-4" />
                    </Link>
                </div> */}
            </div>
        </section>
    )
}