import React, { useState, useEffect, Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import ParticlesBackground from './components/ParticlesBackground'
import CustomCursor from './components/CustomCursor'

// Lazy-loaded routes for massive efficiency gains
const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Certificates = lazy(() => import('./pages/Certificates'))
const Blog = lazy(() => import('./pages/Blog'))
const Resume = lazy(() => import('./pages/Resume'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))
const SkillNetwork = lazy(() => import('./pages/Skills'))

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Show preloader for 2.8 seconds to allow the awesome cyber animation to play
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <CustomCursor />
      {/* Neon Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
          transformOrigin: '0%',
          zIndex: 10001,
          boxShadow: '0 0 15px var(--accent)'
        }}
      />

      {/* Global persistent particle background */}
      <ParticlesBackground />

      {/* 🚀 Mount Preloader */}
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      <Toaster position="bottom-right" reverseOrder={false} />
      <Navbar />
      {/* Ensure main routes animate cleanly if we want route transitions later */}
      <main style={{ flex: 1, position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ width: '100%', height: '100%' }}
          >
            <Suspense fallback={<div style={{ minHeight: '100vh', background: 'transparent' }} />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/skills" element={<SkillNetwork />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="footer" style={{ position: 'relative', zIndex: 10 }}>
        © {new Date().getFullYear()} Lokanath Meher — Built with React
      </footer>
    </div>
  )
}
