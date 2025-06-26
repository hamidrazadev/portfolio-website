'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { HiHome, HiArrowPath, HiExclamationTriangle, HiBugAnt } from 'react-icons/hi2'
import { TbFaceIdError, TbAlertTriangle, TbReload, TbBrowser } from 'react-icons/tb'

const links = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Portfolio',
        href: '/#portfolio',
    },
    {
        name: 'Contact',
        href: '/#contact',
    },
    {
        name: 'About',
        href: '/#about',
    },
]

const errorMessages = {
    404: {
        title: "Page Not Found",
        description: "The page you're looking for seems to have wandered off into the digital void. Let's get you back on track!",
        icon: TbFaceIdError
    },
    500: {
        title: "Server Error",
        description: "Something went wrong on our end. Our digital gremlins are working hard to fix this issue!",
        icon: HiBugAnt
    },
    default: {
        title: "Something Went Wrong",
        description: "An unexpected error occurred. Don't worry, even the best code has its moments!",
        icon: HiExclamationTriangle
    }
}

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Error occurred:', error)
    }, [error])

    // Determine error type based on error message or status
    const getErrorType = () => {
        if (error?.digest?.includes('NEXT_NOT_FOUND') || error?.message?.includes('404')) {
            return '404'
        }
        if (error?.message?.includes('500') || error?.digest?.includes('INTERNAL_SERVER_ERROR')) {
            return '500'
        }
        return 'default'
    }

    const errorType = getErrorType()
    const errorConfig = errorMessages[errorType]
    const ErrorIcon = errorConfig.icon

    return (
        <div className="min-h-screen py-6 sm:py-10 bg-slate-950 relative overflow-hidden flex items-center justify-center px-4">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/3 rounded-full blur-2xl animate-bounce"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center w-full max-w-6xl mx-auto transition-all opacity-100 translate-y-0">

                {/* Error Icon with Animation */}
                <div className="relative mb-6 sm:mb-8">
                    <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[8rem] text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-primary leading-none select-none flex justify-center items-center">
                        <ErrorIcon className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 text-red-500 animate-bounce" />
                    </div>
                </div>

                {/* Error Code Display */}
                {errorType !== 'default' && (
                    <div className="mb-4 sm:mb-6">
                        <span className="inline-block text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 animate-pulse">
                            {errorType}
                        </span>
                    </div>
                )}

                {/* Error Message */}
                <div className="mb-8 sm:mb-12 space-y-3 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
                        {errorConfig.title}
                    </h2>
                    <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
                        {errorConfig.description}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
                    <button
                        onClick={reset}
                        className="w-full sm:w-auto cursor-pointer group inline-flex items-center justify-center gap-3 bg-primary hover:bg-secondary text-white hover:text-primary border border-secondary hover:border-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                        <HiArrowPath className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-300" />
                        <span>Try Again</span>
                    </button>

                    <Link
                        href="/"
                        className="w-full sm:w-auto cursor-pointer group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all hover:border-primary/50 text-sm sm:text-base"
                    >
                        <HiHome className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Go to Homepage</span>
                    </Link>
                </div>

                {/* Error Status */}
                <div className="mb-8 sm:mb-12 px-4">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 max-w-sm sm:max-w-md mx-auto">
                        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                            <TbAlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-white/40" />
                            <span className="text-sm sm:text-base text-white/60">Error Status</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-red-400 font-medium text-sm sm:text-base">
                                {errorType !== 'default' ? `Error ${errorType}` : 'Error Detected'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Troubleshooting Tips */}
                <div className="mb-8 sm:mb-12 px-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">What you can try:</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-primary/30 transition-all duration-300">
                            <div className="flex justify-center mb-2 sm:mb-3">
                                <TbReload className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                            </div>
                            <div className="text-xs sm:text-sm text-white/80 font-medium mb-1">Refresh Page</div>
                            <div className="text-xs text-white/60 leading-tight">Reload the current page</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-primary/30 transition-all duration-300">
                            <div className="flex justify-center mb-2 sm:mb-3">
                                <TbBrowser className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                            </div>
                            <div className="text-xs sm:text-sm text-white/80 font-medium mb-1">Clear Cache</div>
                            <div className="text-xs text-white/60 leading-tight">Clear browser cache</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-primary/30 transition-all duration-300">
                            <div className="flex justify-center mb-2 sm:mb-3">
                                <HiArrowPath className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                            </div>
                            <div className="text-xs sm:text-sm text-white/80 font-medium mb-1">Go Back</div>
                            <div className="text-xs text-white/60 leading-tight">Return to previous page</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:border-primary/30 transition-all duration-300">
                            <div className="flex justify-center mb-2 sm:mb-3">
                                <HiHome className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                            </div>
                            <div className="text-xs sm:text-sm text-white/80 font-medium mb-1">Home Page</div>
                            <div className="text-xs text-white/60 leading-tight">Visit main page</div>
                        </div>
                    </div>
                </div>

                {/* Error Details (Development Only) */}
                {process.env.NODE_ENV === 'development' && error && (
                    <div className="mb-8 sm:mb-12 px-4">
                        <details className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 max-w-4xl mx-auto text-left">
                            <summary className="text-white/80 font-medium cursor-pointer hover:text-white transition-colors mb-4">
                                Error Details (Development Mode)
                            </summary>
                            <div className="bg-black/20 rounded-lg p-4 overflow-auto">
                                <pre className="text-xs sm:text-sm text-red-300 whitespace-pre-wrap break-words">
                                    {error.message}
                                    {error.stack && '\n\nStack Trace:\n' + error.stack}
                                </pre>
                            </div>
                        </details>
                    </div>
                )}

                {/* Helpful Links */}
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 px-4">
                    <p className="text-white/60 mb-3 sm:mb-4 text-sm sm:text-base">Meanwhile, explore these pages:</p>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {links.map((link, index) => (
                            <Link
                                href={link?.href}
                                key={index}
                                className="text-primary hover:text-secondary hover:underline transition-colors duration-200 text-sm sm:text-base px-2 py-1"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Footer Message */}
                <div className="mt-6 sm:mt-8 px-4">
                    <p className="text-white/40 text-xs sm:text-sm">
                        If this error persists, please contact support or try again later.
                    </p>
                </div>
            </div>
        </div>
    )
}