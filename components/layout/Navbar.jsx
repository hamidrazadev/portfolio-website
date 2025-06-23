import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
    return (
        <div className="container mx-auto rounded-full bg-slate-500 p-4 flex items-center justify-between">
            <Link href={'#top'} className="items-center justify-center">
                <Image src={'/assets/logo.png'} width={150} height={150} />
            </Link>
            <div className="items-center gap-2 lg:flex hidden">
                {
                    NavUrls?.map((NavUrl, index) => {
                        return (
                            <Link href={NavUrl?.href} key={index} className="text-white hover:text-slate-400">{NavUrl?.text}</Link>
                        )
                    })
                }
            </div>
            <Link href={'#contact'} className="flex items-center gap-2">
                <p>Let's Talk</p>
            </Link>
        </div>
    )
}