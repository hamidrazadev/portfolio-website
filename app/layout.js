import { Poppins } from 'next/font/google'
import "./globals.css";
import { Providers as ThemeProviderUtil } from "@/utils/ThemeProviderUtil";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import dynamic from 'next/dynamic';
import Script from 'next/script';

const CustomCursor = dynamic(() => import('@/components/layout/CustomCursor'));
const GlobalLoader = dynamic(() => import('@/components/layout/GlobalLoader'));

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/assets/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MHR Portfolio" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <GlobalLoader />
        <ThemeProviderUtil>
          <CustomCursor />
          <nav className="flex flex-col items-center sticky top-0 z-50 w-full py-4 bg-secondary light:bg-[#ffdfd6]">
            <Navbar />
          </nav>
          <main>
            {children}
          </main>
          <Analytics mode="lazyOnload" />
          <Toaster />
          <Footer />
        </ThemeProviderUtil>

        {/* JSON-LD Person Schema */}
        <Script id="jsonld-person" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Muhammad Hamid Raza",
            "url": "https://hamidrazadev.vercel.app",
            "image": "https://hamidrazadev.vercel.app/favicon.ico",
            "sameAs": [
              "https://twitter.com/HamidRaza_Dev",
              "https://www.linkedin.com/in/hamidrazadev",
              "https://github.com/hamidrazadev",
              "https://www.facebook.com/hamidraza.dev/",
              "https://www.instagram.com/hamidraza.dev/"
            ],
            "jobTitle": "Full Stack Developer",
            "description": "Muhammad Hamid Raza's personal portfolio website showcasing his skills, projects, and experience in web development. Supports both light and dark themes for user comfort.",
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
            "keywords": "Muhammad Hamid Raza, Hamid Raza Portfolio, Web Developer Portfolio, Frontend Developer, Backend Developer, Full Stack Developer, MHR Portfolio"
          })}
        </Script>

        {/* JSON-LD Website Schema */}
        <Script id="jsonld-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://hamidrazadev.vercel.app",
            "name": "Muhammad Hamid Raza Portfolio",
            "description": "A personal portfolio website by Muhammad Hamid Raza, supporting light and dark themes for an adaptive user experience.",
            "publisher": {
              "@type": "Organization",
              "name": "Muhammad Hamid Raza",
              "logo": {
                "@type": "ImageObject",
                "url": "https://hamidrazadev.vercel.app/favicon.ico"
              }
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Theme Support",
                "value": "Light and Dark Mode Supported"
              }
            ]
          })}
        </Script>
      </body>
    </html>
  )
}