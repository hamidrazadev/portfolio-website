import React from 'react'
import Image from 'next/image'

// Skills data object
const skillsData = {
    title: "My Work Skills",
    description: "I have a diverse set of skills that I have honed over the years, allowing me to tackle various projects with confidence and creativity. From design to development, I bring a unique blend of expertise to every task.",
    skills: [
        {
            id: 1,
            name: "Figma",
            percentage: 99,
            icon: "/assets/logo.png"
        },
        {
            id: 2,
            name: "WordPress",
            percentage: 99,
            icon: "/assets/logo.png"
        },
        {
            id: 3,
            name: "Web Development",
            percentage: 95,
            icon: "/assets/logo.png"
        },
        {
            id: 4,
            name: "Web Design",
            percentage: 97,
            icon: "/assets/logo.png"
        },
        {
            id: 5,
            name: "Sketch",
            percentage: 93,
            icon: "/assets/logo.png"
        },
        {
            id: 6,
            name: "Xd",
            percentage: 99,
            icon: "/assets/logo.png"
        },
        {
            id: 7,
            name: "Video Editing",
            percentage: 94,
            icon: "/assets/logo.png"
        },
        {
            id: 8,
            name: "Mobile App",
            percentage: 90,
            icon: "/assets/logo.png"
        }
    ]
}

export default function MyWorkSkills() {
    return (
        <section id='myworkskills' className="py-10 lg:py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="lg:text-center mb-10 lg:mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 lg:mb-4">
                        My Work <span className="text-primary">Skills</span>
                    </h2>
                    <p className="text-white/80 text-lg w-full lg:max-w-[70%] mx-auto leading-relaxed lg:px-4">
                        {skillsData.description}
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="w-24 h-24 rounded-full flex items-center justify-center">
                                    <Image
                                        src={skill.icon}
                                        alt={skill.name}
                                        width={60}
                                        height={60}
                                        className="w-[60px] h-[60px] object-contain"
                                    />
                                </div>
                            </div>

                            {/* Skill Name */}
                            <h3 className="text-xl font-semibold text-white text-center mb-6">
                                {skill.name}
                            </h3>

                            {/* Progress Bar */}
                            <div className="space-y-2 relative">
                                {/* Progress Bar Background */}
                                <div className="w-full bg-slate-700/50 rounded-full h-6 overflow-hidden">
                                    {/* Progress Fill */}
                                    <div
                                        className="h-full bg-gradient-to-l from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.percentage}%` }}
                                    />
                                </div>

                                {/* Percentage Text */}
                                <div className="text-center absolute inset-0 flex items-center justify-center">
                                    <span className="text-white font-bold">
                                        {skill.percentage}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}