import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCompass } from 'react-icons/fa6'
import { FiExternalLink } from 'react-icons/fi'
import { GiBinoculars } from 'react-icons/gi';

const portfolioData = {
    title: "Look at my Portfolio",
    description: "These are some of the projects I've worked on in the past. I hope you find them interesting. If you want to see more, feel free to contact me.",
    skills: [
        {
            id: 1,
            name: "Figma",
            link: "https://www.example.com",
            image: "/assets/placeholder.png"
        },
        {
            id: 2,
            name: "WordPress",
            link: "https://www.example.com",
            image: "/assets/placeholder.png"
        },
        {
            id: 3,
            name: "Web Development",
            link: "https://www.example.com",
            image: "/assets/placeholder.png"
        },
        {
            id: 4,
            name: "Web Design",
            link: "https://www.example.com",
            image: "/assets/placeholder.png"
        }
    ]
}

export default function Portfolio() {
    return (
        <section id='portfolio' className="py-10 lg:py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="lg:text-center mb-10 lg:mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 lg:mb-4">
                        Look at my <span className="text-primary">Portfolio</span>
                    </h2>
                    <p className="text-white/80 text-lg w-full lg:max-w-[70%] mx-auto leading-relaxed lg:px-4">
                        {portfolioData.description}
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {portfolioData.skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="group rounded-2xl p-6 border border-slate-700/50 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-[1.02] h-72 flex items-center justify-center relative overflow-hidden"
                        >
                            <Image
                                src={skill.image}
                                alt={skill.name}
                                fill
                                className="object-cover group-hover:blur-sm group-hover:brightness-50 transition-all duration-300"
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
                    ))}
                </div>
            </div>
        </section>
    )
}