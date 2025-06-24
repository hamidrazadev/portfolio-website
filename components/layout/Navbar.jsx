"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ThemeToggle from './ThemeToggle';
import { CgMenu } from "react-icons/cg";
import SidePanel from './SidePanel';

const NavUrls = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'Services',
        href: '#services'
    },
    {
        text: 'Portfolio',
        href: '#portfolio'
    },
    {
        text: 'About',
        href: '#about'
    },
    {
        text: 'Contact',
        href: '#contact'
    }
]

export default function Navbar() {
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

    return (
        <div className="container mx-auto rounded-full bg-white shadow shadow-slate-50 lg:p-4 flex items-center justify-between lg:h-[80px] h-[60px] p-2">
            <Link href={'#top'} className="items-center justify-center flex">
                <Image src={'/assets/logo.png'} width={150} height={150} />
            </Link>
            <div className="items-center gap-6 lg:flex hidden text-lg">
                {
                    NavUrls?.map((NavUrl, index) => {
                        return (
                            <Link href={NavUrl?.href} key={index} className="hover:text-primary font-semibold  text-secondary">{NavUrl?.text}</Link>
                        )
                    })
                }
            </div>
            <div className="flex items-center gap-2">
                {/* <div className="lg:flex hidden items-center justify-center">
                    <ThemeToggle />
                </div> */}
                <Link href={'#contact'} className="sm:flex hidden items-center gap-2 px-4 py-2 bg-primary hover:bg-white border hover:border-primary border-white text-white hover:text-primary rounded-full transition-all">
                    <p>Let's Talk</p>
                    <FaArrowUpRightFromSquare />
                </Link>
                <button onClick={() => setIsSidePanelOpen(!isSidePanelOpen)} className="flex lg:hidden items-center justify-center p-2 rounded-full shadow shadow-slate-50 bg-primary text-2xl text-white">
                    <CgMenu />
                </button>
            </div>

            <SidePanel
                isOpen={isSidePanelOpen}
                onClose={() => setIsSidePanelOpen(false)}
            />
        </div>
    )
}