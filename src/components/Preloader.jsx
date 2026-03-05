import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Terminal, Cpu } from 'lucide-react';
import profilePhoto from '../assets/photo.jpg';

export default function Preloader() {
    const [text, setText] = useState('');
    const [unlocked, setUnlocked] = useState(false);
    const [logs, setLogs] = useState([]);
    const fullText = "USER: LOKANATH MEHER";

    // Matrix/Hacker Decrypt Typing Effect
    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        let iteration = 0;
        let interval = setInterval(() => {
            setText(fullText.split("").map((letter, index) => {
                if (index < iteration) return fullText[index];
                return letters[Math.floor(Math.random() * letters.length)];
            }).join(""));

            if (iteration >= fullText.length) clearInterval(interval);
            iteration += 1 / 2;
        }, 40);

        // Boot system logs
        const bootSequence = [
            "> INITIALIZING KERNEL...",
            "> BYPASSING SECURITY PROTOCOLS...",
            "> DECRYPTING PROFILE DATA...",
            "> LOADING CYBER-DEFENSE MODULES...",
            "> ESTABLISHING SECURE CONNECTION...",
            "> BIOMETRIC SCAN IN PROGRESS..."
        ];

        let logIndex = 0;
        const logInterval = setInterval(() => {
            if (logIndex < bootSequence.length) {
                setLogs(prev => [...prev.slice(-3), bootSequence[logIndex]]);
                logIndex++;
            } else {
                clearInterval(logInterval);
            }
        }, 350);

        // Face ID Unlock Trigger (matches the "ACCESS GRANTED" time)
        const unlockTimeout = setTimeout(() => {
            setUnlocked(true);
        }, 2500);

        return () => {
            clearInterval(interval);
            clearInterval(logInterval);
            clearTimeout(unlockTimeout);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: '#050505',
                backgroundImage: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.05) 0%, #050505 70%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 99999,
                overflow: 'hidden',
                fontFamily: `'Courier New', Courier, monospace`
            }}
        >
            {/* Background Grid Lines (Cyberpunk feel) */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.1,
                backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)`,
                backgroundSize: '40px 40px', zIndex: 0
            }} />

            {/* Top Terminal Header */}
            <div style={{ position: 'absolute', top: 30, left: 30, color: '#10b981', fontSize: '0.9rem', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '8px', opacity: 0.8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Terminal size={18} /> ROOT TERMINAL v9.0.1</div>
                <div>SYS_TICK: {Math.floor(Date.now() / 1000)}</div>
                <div style={{ color: '#38bdf8' }}>STATUS: {unlocked ? 'SECURED' : 'LOCKED'}</div>
            </div>

            {/* Boot Logs */}
            <div style={{ position: 'absolute', bottom: 40, left: 30, color: '#10b981', fontSize: '0.85rem', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '6px', opacity: 0.7 }}>
                {logs.map((log, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                        {log}
                    </motion.div>
                ))}
                {unlocked && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#38bdf8' }}>{"> ACCESS GRANTED."}</motion.div>}
            </div>

            {/* Holographic CPU / HUD Elements */}
            <div style={{ position: 'absolute', top: 40, right: 40, opacity: 0.6, zIndex: 1 }}>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
                    <Cpu size={40} color={unlocked ? '#38bdf8' : '#10b981'} />
                </motion.div>
            </div>

            {/* The Photo and Orbital Rings Container */}
            <div style={{ position: 'relative', width: 340, height: 340, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>

                {/* Outer Complex HUD Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute', width: '100%', height: '100%',
                        borderRadius: '50%', border: '1px solid rgba(16, 185, 129, 0.2)',
                        borderTop: '2px solid #10b981', borderBottom: '2px solid #10b981'
                    }}
                />

                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute', width: '85%', height: '85%',
                        borderRadius: '50%', border: '2px dashed rgba(56, 189, 248, 0.3)',
                        borderLeft: '2px solid #38bdf8', borderRight: '2px solid #38bdf8'
                    }}
                />

                {/* Data Nodes orbiting */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ position: 'absolute', width: '70%', height: '70%', borderRadius: '50%', zIndex: 3 }}
                >
                    <div style={{ position: 'absolute', top: -4, left: '50%', width: 8, height: 8, background: '#10b981', borderRadius: '50%', boxShadow: '0 0 15px #10b981' }} />
                    <div style={{ position: 'absolute', bottom: -4, left: '50%', width: 8, height: 8, background: '#38bdf8', borderRadius: '50%', boxShadow: '0 0 15px #38bdf8' }} />
                </motion.div>

                {/* Inner Scan Ring */}
                <motion.div
                    animate={unlocked ? { scale: 1.05, borderColor: '#38bdf8', boxShadow: '0 0 40px rgba(56,189,248,0.5)' } : { scale: 1, borderColor: '#10b981', boxShadow: '0 0 20px rgba(16,185,129,0.3)' }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'absolute',
                        width: '60%',
                        height: '60%',
                        borderRadius: '50%',
                        border: '3px solid',
                        zIndex: 2,
                    }}
                />

                {/* The Profile Photo */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    style={{
                        position: 'relative',
                        width: '58%',
                        height: '58%',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        zIndex: 3,
                    }}
                >
                    <img
                        src={profilePhoto}
                        alt="Profile"
                        style={{
                            width: '100%', height: '100%', objectFit: 'cover',
                            objectPosition: 'center top',
                            filter: unlocked ? 'brightness(1.1) contrast(1.1)' : 'brightness(0.6) sepia(100%) hue-rotate(100deg) saturate(300%) contrast(1.2)', // Cyber-green initially
                            transition: 'filter 0.5s ease',
                            transform: 'scale(1.05)'
                        }}
                    />

                    {/* Scanning Core Laser Grid */}
                    {!unlocked && (
                        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(16,185,129,0.2) 2px, rgba(16,185,129,0.2) 4px)' }} />
                    )}

                    {!unlocked && (
                        <motion.div
                            animate={{ y: [-50, 250, -50] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '15px',
                                background: 'linear-gradient(to bottom, transparent, rgba(16, 185, 129, 0.8), transparent)',
                                boxShadow: '0 0 25px 10px rgba(16, 185, 129, 0.4)',
                                zIndex: 4
                            }}
                        />
                    )}

                    {/* Unlock Glow Overlay */}
                    {unlocked && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{
                                position: 'absolute', inset: 0,
                                background: 'rgba(56, 189, 248, 0.2)',
                                display: 'flex', justifyContent: 'center', alignItems: 'center',
                                zIndex: 5
                            }}
                        >
                        </motion.div>
                    )}
                </motion.div>

                {/* Lock/Unlock Icon overlapping */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{ position: 'absolute', bottom: '10%', zIndex: 10 }}
                >
                    <div style={{
                        background: '#050505', padding: '10px', borderRadius: '50%',
                        border: `2px solid ${unlocked ? '#38bdf8' : '#10b981'}`,
                        boxShadow: `0 0 20px ${unlocked ? '#38bdf8' : '#10b981'}`
                    }}>
                        {unlocked ? <Unlock color="#38bdf8" size={24} /> : <Lock color="#10b981" size={24} />}
                    </div>
                </motion.div>

            </div>

            {/* Main Status Text */}
            <div style={{
                marginTop: 40,
                color: unlocked ? '#38bdf8' : '#10b981',
                fontSize: '1.2rem', letterSpacing: '4px', fontWeight: 'bold',
                textShadow: unlocked ? '0 0 15px #38bdf8' : '0 0 15px #10b981',
                zIndex: 10, transition: 'color 0.4s', textAlign: 'center'
            }}>
                {unlocked ? "[ NEURAL LINK ESTABLISHED ]" : text}
            </div>

            {/* Loading Progress Bar */}
            <div style={{ width: 320, height: 4, background: 'rgba(255,255,255,0.05)', marginTop: 25, position: 'relative', overflow: 'hidden', zIndex: 10, borderRadius: 2 }}>
                <motion.div
                    initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 2.5, ease: 'easeOut' }}
                    style={{
                        width: '100%', height: '100%',
                        background: unlocked ? '#38bdf8' : 'linear-gradient(90deg, transparent, #10b981, #10b981)',
                        boxShadow: unlocked ? '0 0 20px #38bdf8' : '0 0 20px #10b981'
                    }}
                />
            </div>

            {/* Cyberpunk decorative elements */}
            <div style={{ position: 'absolute', bottom: 40, right: 40, display: 'flex', gap: '10px', opacity: 0.5 }}>
                <div style={{ width: 20, height: 20, borderTop: `2px solid ${unlocked ? '#38bdf8' : '#10b981'}`, borderRight: `2px solid ${unlocked ? '#38bdf8' : '#10b981'}` }} />
                <div style={{ width: 20, height: 20, borderTop: `2px solid ${unlocked ? '#38bdf8' : '#10b981'}`, borderRight: `2px solid ${unlocked ? '#38bdf8' : '#10b981'}` }} />
                <div style={{ width: 20, height: 20, borderTop: `2px solid ${unlocked ? '#38bdf8' : '#10b981'}`, borderRight: `2px solid ${unlocked ? '#38bdf8' : '#10b981'}` }} />
            </div>
            <div style={{ position: 'absolute', top: 40, left: 40, width: 50, height: 50, borderTop: `3px solid #10b981`, borderLeft: `3px solid #10b981`, opacity: 0.5 }} />
            <div style={{ position: 'absolute', bottom: 40, right: 40, width: 50, height: 50, borderBottom: `3px solid #10b981`, borderRight: `3px solid #10b981`, opacity: 0.5 }} />

        </motion.div>
    );
}
