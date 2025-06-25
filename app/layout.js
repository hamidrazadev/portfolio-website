import { Poppins } from 'next/font/google'
import "./globals.css";
import { Providers as ThemeProviderUtil } from "@/utils/ThemeProviderUtil";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import GlobalLoader from '@/components/layout/GlobalLoader';
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO */}
        <title>MHR Portfolio - Muhammad Hamza Raza</title>
        <meta name="description" content="Muhammad Hamza Raza's personal portfolio website showcasing his skills, projects, and experience in web development." />
        <meta name="keywords" content="Muhammad Hamza Raza, Hamza Raza Portfolio, Web Developer Portfolio, Frontend Developer, Backend Developer, Full Stack Developer, MHR Portfolio" />
        <meta name="author" content="Muhammad Hamza Raza" />
        <link rel="canonical" href="https://hamidrazadev.vercel.app" />

        {/* Open Graph for Social Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hamidrazadev.vercel.app" />
        <meta property="og:title" content="MHR Portfolio - Muhammad Hamza Raza" />
        <meta property="og:description" content="Muhammad Hamza Raza's personal portfolio showcasing his skills, projects, and experience in web development." />
        <meta property="og:image" content="https://hamidrazadev.vercel.app/assets/logo-512x512.png" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HamidRaza_Dev" />
        <meta name="twitter:title" content="MHR Portfolio - Muhammad Hamza Raza" />
        <meta name="twitter:description" content="Muhammad Hamza Raza's personal portfolio showcasing his skills, projects, and experience in web development." />
        <meta name="twitter:image" content="https://hamidrazadev.vercel.app/assets/logo-512x512.png" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/assets/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MHR Portfolio" />
        <link rel="manifest" href="/manifest.json" />

        {/* Viewport and Theme */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="dark" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* SEO JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Muhammad Hamza Raza",
            "url": "https://hamidrazadev.vercel.app",
            "image": "https://hamidrazadev.vercel.app/assets/logo-512x512.png",
            "sameAs": [
              "https://twitter.com/@HamidRaza_Dev",
              "https://www.linkedin.com/in/hamidrazadev",
              "https://github.com/hamidrazadev",
              "https://www.facebook.com/hamidraza.dev/",
              "https://www.instagram.com/hamidraza.dev/"
            ],
            "jobTitle": "Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "MHR Portfolio"
            },
            "description": "Muhammad Hamza Raza's personal portfolio website showcasing his skills, projects, and experience in web development.",
            "knowsAbout": [
              "Frontend Development",
              "Backend Development",
              "Full Stack Development",
              "Web Development",
              "React.js",
              "Next.js",
              "Node.js",
              "MongoDB"
            ],
            "keywords": "Muhammad Hamza Raza, Hamza Raza Portfolio, Web Developer Portfolio, Frontend Developer, Backend Developer, Full Stack Developer, MHR Portfolio"
          })
        }} />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <GlobalLoader />
        <ThemeProviderUtil>
          <nav className="flex flex-col items-center sticky top-0 z-50 w-full my-4">
            <Navbar />
          </nav>
          <main className="">
            {children}
          </main>
          <Analytics />
          <Toaster />
          <Footer />
        </ThemeProviderUtil>
      </body>
    </html>
  )
}
