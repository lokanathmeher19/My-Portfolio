import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScanFace, Unlock } from 'lucide-react';

export default function Preloader() {
    const [text, setText] = useState('');
    const [unlocked, setUnlocked] = useState(false);
    const fullText = "SYSTEM.AUTHORIZED // LOKANATH";

    // Matrix/Hacker Decrypt Typing Effect
    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
        let iteration = 0;
        let interval = setInterval(() => {
            setText(fullText.split("").map((letter, index) => {
                if (index < iteration) {
                    return fullText[index];
                }
                return letters[Math.floor(Math.random() * 42)];
            }).join(""));

            if (iteration >= fullText.length) {
                clearInterval(interval);
            }
            iteration += 1 / 3;
        }, 30);

        // Face ID Unlock Trigger (matches the "ACCESS GRANTED" time)
        const unlockTimeout = setTimeout(() => {
            setUnlocked(true);
        }, 2200);

        return () => {
            clearInterval(interval);
            clearTimeout(unlockTimeout);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: '#030305',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 99999,
                overflow: 'hidden'
            }}
        >
            {/* Background Tech Grid */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                    linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
                zIndex: 1, pointerEvents: 'none'
            }} />

            {/* CRT TV Scanlines */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                backgroundSize: '100% 2px, 3px 100%', pointerEvents: 'none', zIndex: 2
            }} />

            {/* Glowing HUD Center */}
            <div style={{ position: 'relative', width: 280, height: 280, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10 }}>

                {/* Advanced SVG Geometric HUD */}
                <svg viewBox="0 0 100 100" style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'visible' }}>

                    {/* Outer Thin Ring */}
                    <motion.circle cx="50" cy="50" r="48" fill="none" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="0.5" />

                    {/* Rotating Dashed Ring 1 (Blue) */}
                    <motion.circle cx="50" cy="50" r="48" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="10 20 50 10"
                        animate={{ strokeDashoffset: [0, 100] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />

                    {/* Counter-rotating Dashed Ring 2 (Purple) */}
                    <motion.circle cx="50" cy="50" r="38" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="30 40 10 20"
                        animate={{ strokeDashoffset: [100, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />

                    {/* Pulsing Central Hexagon */}
                    <motion.polygon points="50,5 89,27 89,73 50,95 11,73 11,27" fill="rgba(56, 189, 248, 0.02)" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1"
                        animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.5, 1, 0.5] }} style={{ transformOrigin: 'center' }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />

                    {/* Fast Rotating Inner Triangle */}
                    <motion.polygon points="50,18 78,66 22,66" fill="none" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1"
                        animate={{ rotate: 360 }} style={{ transformOrigin: 'center' }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />

                </svg>

                {/* Top Inner Badge: LM Initials */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ position: 'absolute', top: 45, zIndex: 10 }}
                >
                    <h1 style={{
                        fontSize: '1.8rem',
                        fontWeight: '900',
                        margin: 0,
                        background: 'linear-gradient(135deg, #ffffff, #38bdf8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0px 0px 8px rgba(56, 189, 248, 0.8))',
                        letterSpacing: '2px',
                    }}>
                        LM
                    </h1>
                </motion.div>

                {/* Central Identity Box (Face Scanner) */}
                <motion.div
                    initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', damping: 12, delay: 0.2 }}
                    style={{
                        position: 'absolute', width: 90, height: 90,
                        background: unlocked ? 'rgba(16, 185, 129, 0.1)' : 'rgba(56, 189, 248, 0.05)',
                        backdropFilter: 'blur(5px)',
                        border: unlocked ? '1px solid #10b981' : '1px solid #38bdf8',
                        boxShadow: unlocked ? '0 0 30px rgba(16,185,129,0.5), inset 0 0 20px rgba(16,185,129,0.2)' : '0 0 20px rgba(56,189,248,0.3), inset 0 0 20px rgba(56,189,248,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                        transition: 'all 0.4s ease',
                        overflow: 'hidden'
                    }}
                >
                    {!unlocked ? (
                        <>
                            <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <ScanFace size={50} color="#38bdf8" strokeWidth={1.5} style={{ filter: 'drop-shadow(0px 0px 8px #38bdf8)' }} />
                            </motion.div>

                            {/* Sweeping Laser Line for Face ID Scan */}
                            <motion.div
                                animate={{ y: [-45, 45, -45] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '2px',
                                    background: '#38bdf8',
                                    boxShadow: '0 0 10px 2px #38bdf8',
                                    zIndex: 10
                                }}
                            />
                        </>
                    ) : (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.3, 1] }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        >
                            <Unlock size={50} color="#10b981" strokeWidth={2} style={{ filter: 'drop-shadow(0px 0px 10px #10b981)' }} />
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Hacker Decrypt Text */}
            <div style={{ marginTop: 50, fontFamily: 'monospace', color: '#38bdf8', fontSize: '1rem', letterSpacing: '4px', textShadow: '0 0 8px #38bdf8', zIndex: 10 }}>
                {text}
            </div>

            {/* Neon Progress Bar */}
            <div style={{ width: 260, height: 3, background: 'rgba(168, 85, 247, 0.15)', marginTop: 25, position: 'relative', overflow: 'hidden', zIndex: 10, borderRadius: 2 }}>
                <motion.div
                    initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 2.2, ease: 'easeOut', delay: 0.3 }}
                    style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, transparent, #a855f7, #38bdf8)', boxShadow: '0 0 15px #a855f7' }}
                />
            </div>

            {/* Final Status */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} style={{ color: '#10b981', marginTop: 15, fontFamily: 'monospace', fontSize: '0.85rem', zIndex: 10, letterSpacing: '3px', textShadow: '0 0 10px #10b981' }}>
                [ ACCESS GRANTED ]
            </motion.div>

            {/* Random binary background flashes for extra effect */}
            <motion.div
                animate={{ opacity: [0, 0.05, 0, 0.02, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', top: 20, left: 20, color: '#38bdf8', fontFamily: 'monospace', fontSize: 10, writingMode: 'vertical-rl', pointerEvents: 'none' }}
            >
                01001100 01101111 01101011 01100001 01101110 01100001 01110100 01101000
            </motion.div>
            <motion.div
                animate={{ opacity: [0, 0.02, 0, 0.05, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', bottom: 20, right: 20, color: '#a855f7', fontFamily: 'monospace', fontSize: 10, pointerEvents: 'none' }}
            >
                01001101 01100101 01101000 01100101 01110010
            </motion.div>

        </motion.div>
    );
}
