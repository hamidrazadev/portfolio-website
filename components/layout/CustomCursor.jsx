'use client';

import { useEffect, useRef, useCallback } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });
    const followerPos = useRef({ x: 0, y: 0 });
    const scrollTimeout = useRef(null);
    const animationId = useRef(null);

    // Scroll progress tracking
    const updateScrollProgress = useCallback(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

        document.documentElement.style.setProperty('--scroll-progress', `${scrollProgress}%`);
    }, []);

    useEffect(() => {
        // Check if device supports hover (not touch device)
        const hasHover = window.matchMedia('(hover: hover)').matches;
        if (!hasHover) return;

        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        // Initialize cursor position
        mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        cursorPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        followerPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        // Mouse move handler
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        // Mouse enter handler
        const handleMouseEnter = () => {
            document.body.classList.remove('cursor-hidden');
        };

        // Mouse leave handler
        const handleMouseLeave = () => {
            document.body.classList.add('cursor-hidden');
        };

        // Mouse down handler
        const handleMouseDown = () => {
            document.body.classList.add('cursor-click');
        };

        // Mouse up handler
        const handleMouseUp = () => {
            document.body.classList.remove('cursor-click');
        };

        // Enhanced scroll handler
        const handleScroll = () => {
            document.body.classList.add('actively-scrolling');
            document.body.classList.add('scrolling');

            // Clear previous timeout
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            // Update scroll progress
            updateScrollProgress();

            // Remove scrolling class after delay
            scrollTimeout.current = setTimeout(() => {
                document.body.classList.remove('actively-scrolling');
                document.body.classList.remove('scrolling');
            }, 150);
        };

        // Enhanced hover handlers for interactive elements
        const handleElementHover = (e) => {
            const target = e.target;

            // Check if hovering over scrollbar area
            const isNearScrollbar = e.clientX > window.innerWidth - 20;
            if (isNearScrollbar) {
                document.body.classList.remove('cursor-hover', 'cursor-button', 'cursor-link', 'cursor-text');
                document.body.classList.add('cursor-scrolling');
                return;
            }

            // Remove scrolling class if not near scrollbar
            document.body.classList.remove('cursor-scrolling');

            if (target.matches('a, button, [role="button"], input, textarea, select, .interactive, .cursor-hover-trigger')) {
                // Remove any existing cursor classes
                document.body.classList.remove('cursor-hover', 'cursor-button', 'cursor-link', 'cursor-text');

                if (target.matches('button, [role="button"], .btn, .cursor-button-trigger')) {
                    document.body.classList.add('cursor-button');
                } else if (target.matches('a, .link, .cursor-link-trigger')) {
                    document.body.classList.add('cursor-link');
                } else if (target.matches('input, textarea, select, [contenteditable], .cursor-text-trigger')) {
                    document.body.classList.add('cursor-text');
                } else {
                    document.body.classList.add('cursor-hover');
                }
            }
        };

        const handleElementLeave = (e) => {
            const target = e.target;

            if (target.matches('a, button, [role="button"], input, textarea, select, .interactive, .cursor-hover-trigger') ||
                document.body.classList.contains('cursor-scrolling')) {
                document.body.classList.remove('cursor-hover', 'cursor-button', 'cursor-link', 'cursor-text', 'cursor-scrolling');
            }
        };

        // Wheel event for scroll detection
        const handleWheel = () => {
            document.body.classList.add('scrolling');

            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            scrollTimeout.current = setTimeout(() => {
                document.body.classList.remove('scrolling');
            }, 300);
        };

        // Enhanced animation loop with performance optimization
        const animate = () => {
            // Smooth cursor movement with variable speed based on distance
            const distanceX = mousePos.current.x - cursorPos.current.x;
            const distanceY = mousePos.current.y - cursorPos.current.y;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            // Dynamic easing based on distance
            const ease = Math.min(0.9, Math.max(0.1, distance / 100));

            cursorPos.current.x += distanceX * ease;
            cursorPos.current.y += distanceY * ease;

            // Smooth follower movement (slower)
            followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.12;
            followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.12;

            // Apply transforms with sub-pixel precision
            const cursorX = Math.round((cursorPos.current.x - 10) * 10) / 10;
            const cursorY = Math.round((cursorPos.current.y - 10) * 10) / 10;
            const followerX = Math.round((followerPos.current.x - 20) * 10) / 10;
            const followerY = Math.round((followerPos.current.y - 20) * 10) / 10;

            if (cursor && follower) {
                cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
                follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
            }

            animationId.current = requestAnimationFrame(animate);
        };

        // Intersection Observer for scroll progress on specific elements
        const observeElements = () => {
            const progressElements = document.querySelectorAll('.progress-scrollbar');
            if (progressElements.length === 0) return () => { };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const rect = entry.boundingClientRect;
                        const progress = Math.max(0, Math.min(100,
                            ((window.innerHeight - rect.top) / window.innerHeight) * 100
                        ));
                        entry.target.style.setProperty('--scroll-progress', `${progress}%`);
                    }
                });
            }, { threshold: Array.from({ length: 101 }, (_, i) => i / 100) });

            progressElements.forEach(el => observer.observe(el));

            return () => observer.disconnect();
        };

        // Keyboard navigation support
        const handleKeyDown = (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('cursor-text');
            }
        };

        const handleKeyUp = (e) => {
            if (e.key === 'Tab') {
                setTimeout(() => {
                    document.body.classList.remove('cursor-text');
                }, 100);
            }
        };

        // Window resize handler
        const handleResize = () => {
            // Update cursor position on resize
            const rect = cursor.getBoundingClientRect();
            if (rect.left < 0 || rect.top < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight) {
                mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            }
        };

        // Event listeners
        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseover', handleElementHover);
        document.addEventListener('mouseout', handleElementLeave);
        document.addEventListener('scroll', handleScroll, { passive: true });
        document.addEventListener('wheel', handleWheel, { passive: true });
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        window.addEventListener('resize', handleResize, { passive: true });

        // Initialize
        const cleanupObserver = observeElements();
        updateScrollProgress();
        animate();

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleElementHover);
            document.removeEventListener('mouseout', handleElementLeave);
            document.removeEventListener('scroll', handleScroll);
            document.removeEventListener('wheel', handleWheel);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
            window.removeEventListener('resize', handleResize);

            if (animationId.current) {
                cancelAnimationFrame(animationId.current);
            }

            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            cleanupObserver();

            // Clean up classes
            document.body.classList.remove(
                'cursor-hidden', 'cursor-click', 'cursor-hover', 'cursor-button',
                'cursor-link', 'cursor-text', 'cursor-scrolling', 'actively-scrolling', 'scrolling'
            );
        };
    }, [updateScrollProgress]);

    return (
        <>
            <div ref={cursorRef} className="cursor" />
            <div ref={followerRef} className="cursor-follower" />
        </>
    );
};

export default CustomCursor;