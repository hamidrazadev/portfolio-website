import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import MyWorkSkills from "@/components/home/MyWorkSkills";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";
import WhyHireMe from "@/components/home/WhyHireMe";

export const dynamic = 'force-static';

export const metadata = {
  title: "MHR Portfolio | Muhammad Hamid Raza Portfolio Website",
  description: "Muhammad Hamid Raza's personal portfolio website showcasing his skills, projects, and experience in web development.",
  keywords: [
    "Muhammad Hamid Raza",
    "Hamid Raza Portfolio",
    "Web Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "MHR Portfolio"
  ],
  authors: [{ name: "Muhammad Hamid Raza", url: process.env.NEXT_PUBLIC_WEBSITE_URL || "https://hamidrazadev.vercel.app" }],
  creator: "Muhammad Hamid Raza",
  publisher: "Muhammad Hamid Raza",
  applicationName: "MHR Portfolio",
  referrer: "origin-when-cross-origin",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL || "https://hamidrazadev.vercel.app"),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_WEBSITE_URL || "https://hamidrazadev.vercel.app",
  },
  openGraph: {
    title: "MHR Portfolio | Muhammad Hamid Raza Portfolio Website",
    description: "Muhammad Hamid Raza's personal portfolio website showcasing his skills, projects, and experience in web development.",
    url: process.env.NEXT_PUBLIC_WEBSITE_URL || "https://hamidrazadev.vercel.app",
    siteName: "MHR Portfolio",
    images: [
      {
        url: (process.env.NEXT_PUBLIC_WEBSITE_URL || "https://hamidrazadev.vercel.app") + "/assets/logo-512x512.png",
        width: 512,
        height: 512,
        alt: "Muhammad Hamid Raza Portfolio Preview"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MHR Portfolio | Muhammad Hamid Raza Portfolio Website",
    description: "Muhammad Hamid Raza's personal portfolio website showcasing his skills, projects, and experience in web development.",
    site: "@HamidRaza_Dev",
    creator: "@HamidRaza_Dev",
    images: [(process.env.NEXT_PUBLIC_WEBSITE_URL || "https://hamidrazadev.vercel.app") + "/assets/logo-512x512.png",]
  },
  category: "Portfolio",
  archives: [],
  other: {
    "copyright": "© 2025 Muhammad Hamid Raza. All rights reserved.",
    "content-type": "website",
    "rating": "general"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: "no",
  themeColor: "#ffffff",
  colorScheme: "dark"
};

export default function Home() {
  return (
    <div className="bg-slate-500 light:bg-slate-100 text-white light:text-black">
      <Hero />
      <About />
      <Services />
      <WhyHireMe />
      <MyWorkSkills />
      <Portfolio />
      <Contact />
    </div>
  );
}
