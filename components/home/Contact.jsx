"use client";
import React, { useState } from 'react';
import { FaRegCommentDots } from 'react-icons/fa6';
import uploadFile from '@/utils/uploadFile';
import sendEmail from '@/utils/sendEmail';
import { toast } from 'react-hot-toast'; // Import toast

const bgImage = "/assets/ContactBackground.jpg";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        file: null,
    });

    const handleOnSubmit = async (e) => {
        e.preventDefault();

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
                });

                if (result.status === 200) {
                    setFormData({ name: '', email: '', message: '', file: null });
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
                style: {
                    background: '#0a0c18',
                    color: 'white',
                },
            }
        );
        setFormData({ name: '', email: '', message: '', file: null });
        e.target.reset();
    };

    const handleOnChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'file') {
            setFormData({
                ...formData,
                file: files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    return (
        <section
            id="contact"
            className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-16"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                    Let&apos;s make your brand brilliant!
                </h1>

                <form onSubmit={handleOnSubmit} className="space-y-6">
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

                    {/* File Upload Field */}
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
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="cursor-pointer flex items-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
                        >
                            <span>Get a Quote</span>
                            <FaRegCommentDots className="w-5 h-5" />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
