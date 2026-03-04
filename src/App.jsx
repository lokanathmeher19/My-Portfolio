import React, { useState, useEffect, Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import ParticlesBackground from './components/ParticlesBackground'

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

  useEffect(() => {
    // Only show preloader on initial page load, hide it after 1.8s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
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
          <Suspense fallback={<div style={{ minHeight: '100vh', background: 'transparent' }} />}>
            <Routes location={location} key={location.pathname}>
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
        </AnimatePresence>
      </main>
      <footer className="footer" style={{ position: 'relative', zIndex: 10 }}>
        © {new Date().getFullYear()} Lokanath Meher — Built with React
      </footer>
    </div>
  )
}
