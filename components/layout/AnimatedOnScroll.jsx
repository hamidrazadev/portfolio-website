// components/AnimatedOnScroll.jsx
'use client';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function AnimatedOnScroll({ children, animation = 'fade-up', delay = 0 }) {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const variants = {
        hidden: { opacity: 0, y: animation === 'fade-up' ? 50 : 0, x: animation === 'fade-left' ? -50 : animation === 'fade-right' ? 50 : 0 },
        visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, delay } }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}
