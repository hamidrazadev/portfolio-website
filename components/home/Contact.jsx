"use client";
import React, { useState } from 'react';
import { FaRegCommentDots } from 'react-icons/fa6';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import uploadFile from '@/utils/uploadFile';
import sendEmail from '@/utils/sendEmail';
import { toast } from 'react-hot-toast';
import AnimatedOnScroll from '@/components/layout/AnimatedOnScroll';

const bgImage = "/assets/ContactBackground.jpg";

const services = [
    { id: 1, title: "UI/UX Design" },
    { id: 2, title: "Video Editing" },
    { id: 3, title: "Responsive Web Design" },
    { id: 4, title: "Front-end Web Development" },
    { id: 5, title: "Full Stack Web Development" },
    { id: 6, title: "PWA Development" }
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        file: null,
        service: ''
    });

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        // Check if service is selected
        if (!formData.service) {
            toast.error('Please select a service.');
            return;
        }

        toast.promise(
            (async () => {
                let fileUrl = '';

                if (formData.file) {
                    fileUrl = await uploadFile(formData.file);
                }

                const result = await sendEmail({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    fileUrl,
                    service: formData.service
                });

                if (result.status === 200) {
                    setFormData({ name: '', email: '', message: '', file: null, service: '' });
                    e.target.reset();
                    return 'Settings saved!';
                } else {
                    throw new Error('Failed to send email.');
                }
            })(),
            {
                loading: 'Sending...',
                success: <b>Email sent successfully!</b>,
                error: <b>Could not send email.</b>,
            },
            {
                style: { background: '#0a0c18', color: 'white' },
            }
        );
    };

    const handleOnChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'file') {
            setFormData({ ...formData, file: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleServiceSelect = (service) => {
        setFormData({ ...formData, service });
        setDropdownOpen(false);
    };

    return (
        <section
            id="contact"
            className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-16 overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <AnimatedOnScroll animation="zoom-in" delay={0.1}>
                <div className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                        Let&apos;s make your brand brilliant!
                    </h1>

                    <form onSubmit={handleOnSubmit} className="space-y-6">
                        <AnimatedOnScroll animation="fade-up" delay={0.2}>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium">What&apos;s your name?</label>
                                <input
                                    id='name'
                                    name='name'
                                    type="text"
                                    value={formData.name}
                                    onChange={handleOnChange}
                                    className="w-full p-3 bg-gray-700/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                        </AnimatedOnScroll>

                        <AnimatedOnScroll animation="fade-up" delay={0.3}>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium">Your email</label>
                                <input
                                    id='email'
                                    name='email'
                                    type="email"
                                    value={formData.email}
                                    onChange={handleOnChange}
                                    className="w-full p-3 bg-gray-700/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="example@domain.com"
                                    required
                                />
                            </div>
                        </AnimatedOnScroll>

                        <AnimatedOnScroll animation="fade-up" delay={0.4}>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium">Tell me about your project</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleOnChange}
                                    className="w-full p-3 bg-gray-700/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32"
                                    placeholder="Tell me about your project"
                                    required
                                ></textarea>
                            </div>
                        </AnimatedOnScroll>

                        <AnimatedOnScroll animation="fade-up" delay={0.55}>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">Select a Service</label>
                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className="w-full p-3 bg-gray-700/80 rounded-lg flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <span>{formData.service || 'Choose a service'}</span>
                                        {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>

                                    {dropdownOpen && (
                                        <ul className="absolute z-20 mt-2 w-full bg-white text-black rounded-lg shadow-lg max-h-60 overflow-y-auto transition-all">
                                            {services.map((service) => (
                                                <li
                                                    key={service.id}
                                                    className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer transition-all"
                                                    onClick={() => handleServiceSelect(service.title)}
                                                >
                                                    {service.title}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </AnimatedOnScroll>

                        <AnimatedOnScroll animation="fade-up" delay={0.5}>
                            <div className="flex flex-col gap-2 cursor-pointer">
                                <label htmlFor="file" className="text-sm font-medium">Attach a file (optional)</label>
                                <input
                                    id='file'
                                    name='file'
                                    type="file"
                                    onChange={handleOnChange}
                                    className="flex w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary cursor-pointer transition-all"
                                />
                            </div>
                        </AnimatedOnScroll>

                        <AnimatedOnScroll animation="fade-up" delay={0.6}>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-primary hover:bg-secondary text-white hover:text-primary border border-secondary hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <span>Get a Quote</span>
                                    <FaRegCommentDots className="w-5 h-5" />
                                </button>
                            </div>
                        </AnimatedOnScroll>
                    </form>
                </div>
            </AnimatedOnScroll>
        </section>
    );
}
