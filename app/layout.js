import { Poppins } from 'next/font/google'
import "./globals.css";
import { Providers as ThemeProviderUtil } from "@/utils/ThemeProviderUtil";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
// import GlobalLoader from '@/components/layout/GlobalLoader';
import { Analytics } from "@vercel/analytics/next";
import dynamic from 'next/dynamic';
// import CustomCursor from '@/components/layout/CustomCursor';

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

        {/* SEO JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              "description": "Muhammad Hamid Raza's personal portfolio website showcasing his skills, projects, and experience in web development.",
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
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://hamidrazadev.vercel.app",
              "name": "Muhammad Hamid Raza Portfolio",
              "publisher": {
                "@type": "Organization",
                "name": "Muhammad Hamid Raza",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://hamidrazadev.vercel.app/favicon.ico"
                }
              }
            }),
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <GlobalLoader />
        <ThemeProviderUtil>
          <CustomCursor />
          <nav className="flex flex-col items-center sticky top-0 z-50 w-full my-4">
            <Navbar />
          </nav>
          <main className="">
            {children}
          </main>
          <Analytics mode="lazyOnload" />
          <Toaster />
          <Footer />
        </ThemeProviderUtil>
      </body>
    </html>
  )
}
