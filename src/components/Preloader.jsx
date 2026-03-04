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
                zIndex: 99999,
            }}
        >
            {/* Cyberpunk Radar/Circle Container */}
            <div style={{ position: 'relative', width: 200, height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                {/* Outer Dashed Spinning Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '3px dashed rgba(56, 189, 248, 0.4)',
                        boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)'
                    }}
                />

                {/* Middle Solid Spinner (Counter-clockwise) */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        width: '80%',
                        height: '80%',
                        borderRadius: '50%',
                        borderTop: '4px solid #a855f7',
                        borderRight: '4px solid transparent',
                        borderBottom: '4px solid transparent',
                        borderLeft: '4px solid #a855f7',
                        opacity: 0.8
                    }}
                />

                {/* Inner Glowing Core */}
                <motion.div
                    animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        width: '50%',
                        height: '50%',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)',
                        boxShadow: 'inset 0 0 20px rgba(56, 189, 248, 0.5)'
                    }}
                />

                {/* Lock Icon / LM Initials */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ zIndex: 10 }}
                >
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: '900',
                        margin: 0,
                        background: 'linear-gradient(90deg, #38bdf8, #a855f7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0px 0px 10px rgba(168, 85, 247, 0.5))',
                        letterSpacing: '2px',
                    }}>
                        LM
                    </h1>
                </motion.div>
            </div>

            {/* Loading Progress Bar (Radar Sweep Style) */}
            <motion.div
                style={{
                    width: 200,
                    height: 2,
                    background: 'rgba(56, 189, 248, 0.2)',
                    marginTop: 40,
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={{
                        width: '50%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, #38bdf8, transparent)',
                        boxShadow: '0 0 10px #38bdf8'
                    }}
                />
            </motion.div>

            {/* Cybersecurity Status Text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                    color: '#38bdf8',
                    marginTop: 20,
                    fontSize: 12,
                    letterSpacing: 3,
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    fontFamily: 'monospace',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px'
                }}
            >
                <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "steps(3)" }}
                >
                    [ SYS.SECURE ]
                </motion.span>
                <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ color: '#94a3b8', fontSize: 10 }}
                >
                    DECRYPTING PORTFOLIO...
                </motion.span>
            </motion.div>

        </motion.div>
    );
}
