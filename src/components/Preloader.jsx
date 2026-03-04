import React from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: '#050509',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 99999, // Super high z-index to stay above everything
            }}
        >
            {/* Initials Container */}
            <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: [0.6, 1.2, 1], opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 style={{
                    fontSize: '5rem',
                    fontWeight: '900',
                    margin: 0,
                    background: 'linear-gradient(90deg, #38bdf8, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0px 0px 20px rgba(56, 189, 248, 0.4))',
                    letterSpacing: '2px',
                }}>
                    LM
                </h1>
            </motion.div>

            {/* Cyberpunk Loading Bar */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: 220 }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                style={{
                    height: 4,
                    background: 'linear-gradient(90deg, #38bdf8, #a855f7)',
                    marginTop: 25,
                    borderRadius: 4,
                    boxShadow: '0 0 15px rgba(56, 189, 248, 0.6)'
                }}
            />

            {/* Cyber/Tech Status Text */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.5, 1] }}
                transition={{ duration: 1.2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                style={{
                    color: '#94a3b8',
                    marginTop: 20,
                    fontSize: 13,
                    letterSpacing: 4,
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    fontFamily: 'monospace' // gives a nice terminal vibe
                }}
            >
                Initializing Portfolio._
            </motion.p>
        </motion.div>
    );
}
