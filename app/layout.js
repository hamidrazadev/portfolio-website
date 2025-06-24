import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers as ThemeProviderUtil } from "@/utils/ThemeProviderUtil";
import ThemeToggle from "@/components/layout/ThemeToggle";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MHR Portfolio | Muhammad Hamza Raza Portfolio Website",
  description: "Muhammad Hamza Raza's personal portfolio website showcasing his skills, projects, and experience in web development.",
  keywords: [
    "Muhammad Hamza Raza",
    "Hamza Raza Portfolio",
    "Web Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "MHR Portfolio"
  ],
  authors: [{ name: "Muhammad Hamza Raza", url: process.env.NEXT_PUBLIC_WEBSITE_URL || "https://mhr-portfolio-five.vercel.app" }],
  creator: "Muhammad Hamza Raza",
  publisher: "Muhammad Hamza Raza",
  generator: "Next.js",
  applicationName: "MHR Portfolio",
  referrer: "origin-when-cross-origin",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL || "https://mhr-portfolio-five.vercel.app"),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_WEBSITE_URL || "https://mhr-portfolio-five.vercel.app",
    languages: {
      "en-US": process.env.NEXT_PUBLIC_WEBSITE_URL || "https://mhr-portfolio-five.vercel.app/en-US",
      "ur-PK": process.env.NEXT_PUBLIC_WEBSITE_URL || "https://mhr-portfolio-five.vercel.app/ur-PK"
    }
  },
  openGraph: {
    title: "MHR Portfolio | Muhammad Hamza Raza Portfolio Website",
    description: "Muhammad Hamza Raza's personal portfolio website showcasing his skills, projects, and experience in web development.",
    url: process.env.NEXT_PUBLIC_WEBSITE_URL || "https://mhr-portfolio-five.vercel.app",
    siteName: "MHR Portfolio",
    images: [
      {
        url: (process.env.NEXT_PUBLIC_WEBSITE_URL || "https://mhr-portfolio-five.vercel.app") + "/assets/logo-512x512.png",
        width: 512,
        height: 512,
        alt: "Muhammad Hamza Raza Portfolio Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MHR Portfolio | Muhammad Hamza Raza Portfolio Website",
    description: "Muhammad Hamza Raza's personal portfolio website showcasing his skills, projects, and experience in web development.",
    site: "@HamidRaza_Dev",
    creator: "@HamidRaza_Dev",
    images: [(process.env.NEXT_PUBLIC_WEBSITE_URL || "https://mhr-portfolio-five.vercel.app") + "/assets/logo-512x512.png",]
  },
  category: "Portfolio",
  archives: [],
  other: {
    "copyright": "© 2025 Muhammad Hamza Raza. All rights reserved.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/assets/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MHR Portfolio" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProviderUtil>
          <nav className="flex flex-col items-center sticky top-0 z-50 w-full my-4">
            <Navbar />
          </nav>
          <main className="min-h-[calc(2*100vh)]">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </ThemeProviderUtil>
      </body>
    </html >
  );
}
