import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('clickable')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
            backgroundColor: "transparent",
            border: "2px solid var(--accent)",
        },
        hover: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1.5,
            backgroundColor: "rgba(0, 255, 157, 0.2)",
            border: "2px solid var(--accent)",
        }
    };

    return (
        <>
            <motion.div
                className="custom-cursor"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
                transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference'
                }}
            />
            <motion.div
                className="custom-cursor-dot"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
                transition={{ type: "tween", ease: "linear", duration: 0 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: 8,
                    height: 8,
                    backgroundColor: 'var(--accent-2)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 10000,
                }}
            />
        </>
    );
}
