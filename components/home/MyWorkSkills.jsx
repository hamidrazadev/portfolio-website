"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import AnimatedOnScroll from '@/components/layout/AnimatedOnScroll';
import { useInView } from 'framer-motion';

// SkillCard Component
function SkillCard({ skill, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const [displayPercentage, setDisplayPercentage] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = skill.percentage;
            const duration = 1000; // total animation duration in ms
            const stepTime = Math.abs(Math.floor(duration / end)); // time per step

            let startTime = null;

            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const current = Math.min(Math.round((progress / duration) * end), end);
                setDisplayPercentage(current);
                if (current < end) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        } else {
            setDisplayPercentage(0); // Optional: Reset on scroll out
        }
    }, [isInView, skill.percentage]);

    return (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-primary/30 transition-all duration-300 hover:scale-105">
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
            <div className="space-y-2 relative" ref={ref}>
                {/* Progress Bar Background */}
                <div className="w-full bg-slate-700/50 rounded-full h-6 overflow-hidden">
                    {/* Progress Fill */}
                    <div
                        className="h-full bg-gradient-to-l from-primary to-primary/80 rounded-full transition-all duration-1000 ease-in-out"
                        style={{ width: isInView ? `${skill.percentage}%` : '0%' }}
                    />
                </div>

                {/* Percentage Text */}
                <div className="text-center absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold">
                        {displayPercentage}%
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function MyWorkSkills() {

    const skillsData = {
        title: "My Work Skills",
        description: "I've cultivated an eclectic array of skills enabling me handle diverse projects with flair and precision under varied circumstances. I fuse technical know-how with innovative problem-solving skills pretty effectively while building robust web apps and creating user-friendly designs. I achieve high-quality results pretty consistently by rapidly adapting and incrementally refining my approach in virtually every task undertaken.",
        skills: [
            { id: 1, name: "Adobe Illustrator", percentage: 83, icon: "/assets/MyWorkSkills/AdobeIllustrator.png" },
            { id: 2, name: "Adobe Photoshop", percentage: 86, icon: "/assets/MyWorkSkills/AdobePhotoshop.png" },
            { id: 3, name: "Adobe Premiere Pro", percentage: 80, icon: "/assets/MyWorkSkills/AdobePremierePro.png" },
            { id: 4, name: "HTML", percentage: 94, icon: "/assets/MyWorkSkills/HTML.png" },
            { id: 5, name: "CSS", percentage: 92, icon: "/assets/MyWorkSkills/CSS.png" },
            { id: 6, name: "JavaScript", percentage: 89, icon: "/assets/MyWorkSkills/JavaScript.png" },
            { id: 13, name: "Next JS", percentage: 85, icon: "/assets/MyWorkSkills/NextJS.png" },
            { id: 12, name: "Tailwind CSS", percentage: 90, icon: "/assets/MyWorkSkills/TailwindCSS.png" },
            { id: 8, name: "MongoDB", percentage: 80, icon: "/assets/MyWorkSkills/MongoDB.png" },
            { id: 9, name: "Express JS", percentage: 82, icon: "/assets/MyWorkSkills/ExpressJS.png" },
            { id: 10, name: "React JS", percentage: 88, icon: "/assets/MyWorkSkills/ReactJS.png" },
            { id: 11, name: "Node JS", percentage: 83, icon: "/assets/MyWorkSkills/NodeJS.png" },
        ]
    }

    return (
        <section id='myworkskills' className="py-10 lg:py-20 bg-slate-900">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <AnimatedOnScroll animation="fade-down" delay={0.1}>
                    <div className="lg:text-center mb-10 lg:mb-16">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 lg:mb-4">
                            My Work <span className="text-primary">Skills</span>
                        </h2>
                        <p className="text-white/80 text-lg w-full lg:max-w-[70%] mx-auto leading-relaxed lg:px-4">
                            {skillsData.description}
                        </p>
                    </div>
                </AnimatedOnScroll>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.skills.map((skill, index) => (
                        <AnimatedOnScroll
                            key={skill.id}
                            animation="zoom-in"
                            delay={0.1 + (index * 0.05)} // Quick staggered animation
                        >
                            <SkillCard skill={skill} index={index} />
                        </AnimatedOnScroll>
                    ))}
                </div>
            </div>
        </section>
    )
}
