import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prev => {
                if (prev < 100) return prev + 1;
                clearInterval(interval);
                return 100;
            });
        }, 12);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: '#020617',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 999999,
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ 
                        fontFamily: 'var(--font-heading)', 
                        fontSize: '1.5rem', 
                        fontWeight: 700, 
                        color: '#fff',
                        marginBottom: '24px',
                        letterSpacing: '-0.02em'
                    }}
                >
                    LM <span className="text-gradient">Portfolio</span>
                </motion.div>
                
                <div style={{ width: '180px', height: '2px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                    <motion.div 
                        initial={{ width: '0%' }}
                        animate={{ width: `${counter}%` }}
                        style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))' }}
                    />
                </div>
                
                <motion.div 
                    style={{ 
                        marginTop: '16px', 
                        fontFamily: 'var(--font-body)', 
                        fontSize: '0.75rem', 
                        color: 'var(--text-muted)',
                        letterSpacing: '0.2em'
                    }}
                >
                    {counter === 100 ? 'SYSTEM INITIALIZED' : 'LOADING EXPERIENCE'}
                </motion.div>
            </div>
            
            <div className="app-bg" style={{ opacity: 0.5 }}></div>
        </motion.div>
    );
}
