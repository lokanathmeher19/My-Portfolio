import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Orbit, ArrowRight, Check } from 'lucide-react'
import ParticlesBackground from "../components/ParticlesBackground";

// 🖼️ Import Project Images
import novels_img from '../assets/novels.png'
import solar_img from '../assets/solar.png'

const PROJECTS = [
  {
    title: 'The Top 100 Novels',
    desc: "Immerse yourself in India's finest literary collection. Explore beautifully curated novels with stunning covers, detailed info, and a premium reading experience.",
    tag: 'LITERATURE',
    color: '#ff4b6e',
    icon: <BookOpen size={28} color="white" />,
    img: novels_img,
    features: ['100 Curated Novels', 'User Authentication', 'Premium UI/UX'],
    link: 'https://thesolarsystem.free.nf/loginpage/novels.html',
    btnText: 'Explore Collection'
  },
  {
    title: 'Solar System Explorer',
    desc: 'Journey through our cosmic neighborhood with stunning CSS animations. Discover planets, their moons, and fascinating astronomical facts.',
    tag: 'ASTRONOMY',
    color: '#0ea5e9',
    icon: <Orbit size={28} color="white" />,
    img: solar_img,
    features: ['9 Celestial Bodies', 'Interactive Animations', 'CSS-Only Design'],
    link: 'https://thesolarsystem.free.nf/solarpage/index.html',
    btnText: 'Explore Universe'
  }
]

import useScrollNavigation from '../hooks/useScrollNavigation'

export default function Projects() {
  useScrollNavigation('/gallery', '/')
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
      style={{ paddingBottom: 80, position: "relative", overflow: "hidden" }}
    >
      <ParticlesBackground />
      <div className="card" style={{ background: 'transparent', padding: 0 }}>
        <div style={{ textAlign: 'center', marginBottom: 60, position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: 20,
              background: 'rgba(14, 165, 233, 0.1)',
              border: '1px solid rgba(14, 165, 233, 0.3)',
              color: '#38bdf8',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 2,
              marginBottom: 16,
              textTransform: 'uppercase'
            }}
          >
            Portfolio Highlights
          </motion.div>

          <motion.h2
            className="text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              background: 'linear-gradient(to right, #fff, #38bdf8, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(56, 189, 248, 0.3)',
              letterSpacing: -1
            }}
          >
            My Masterpieces
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ color: '#94a3b8', fontSize: 18, maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}
          >
            A showcase of my most ambitious work, blending <span style={{ color: '#fff' }}>advanced technology</span> with <span style={{ color: '#fff' }}>creative design</span>.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              height: 4,
              background: 'linear-gradient(to right, #38bdf8, #a855f7)',
              margin: '30px auto 0',
              borderRadius: 2
            }}
          />
        </div>

        <div className="projects-grid" style={{ display: 'grid', gap: 30, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', maxWidth: 1000, margin: '0 auto' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{
                y: -10,
                boxShadow: `0 20px 50px ${p.color}30`,
                borderColor: p.color
              }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(20, 20, 20, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                position: 'relative',
                transition: 'border-color 0.3s ease'
              }}
            >
              {/* Project Image */}
              <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(to bottom, transparent 0%, #141414 100%)`,
                  zIndex: 1
                }} />
                <motion.img
                  src={p.img}
                  alt={p.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                />

                {/* Floating Tag */}
                <div style={{
                  position: 'absolute',
                  top: 15,
                  right: 15,
                  background: 'rgba(0,0,0,0.7)',
                  backdropFilter: 'blur(8px)',
                  border: `1px solid ${p.color}60`,
                  padding: '4px 10px',
                  borderRadius: 20,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 1,
                  color: p.color,
                  zIndex: 2,
                  boxShadow: `0 4px 15px ${p.color}30`
                }}>
                  {p.tag}
                </div>
              </div>

              <div style={{ padding: '0 24px 28px', position: 'relative', zIndex: 2, marginTop: -40 }}>
                {/* Icon Box */}
                <div style={{
                  width: 50,
                  height: 50,
                  borderRadius: 14,
                  background: `linear-gradient(135deg, ${p.color}, ${p.color}aa)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 18,
                  boxShadow: `0 10px 30px ${p.color}50`,
                  border: '3px solid #141414'
                }}>
                  {React.cloneElement(p.icon, { size: 24 })}
                </div>

                <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 10, letterSpacing: '-0.5px' }}>
                  {p.title}
                </h3>

                <p style={{ fontSize: 14, color: '#b0b0b0', marginBottom: 20, lineHeight: 1.6 }}>
                  {p.desc}
                </p>

                {/* Features List */}
                <div style={{ marginBottom: 24, background: 'rgba(255,255,255,0.03)', padding: 16, borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                  {p.features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, lastChild: { marginBottom: 0 } }}>
                      <div style={{
                        background: `${p.color}20`,
                        borderRadius: '50%',
                        padding: 3,
                        display: 'flex'
                      }}>
                        <Check size={10} color={p.color} />
                      </div>
                      <span style={{ fontSize: 13, color: '#ddd', fontWeight: 500 }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <motion.a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02, boxShadow: `0 10px 30px ${p.color}60` }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`,
                    color: '#fff',
                    padding: '12px',
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: `0 8px 20px ${p.color}40`,
                    border: `1px solid ${p.color}80`
                  }}
                >
                  {p.btnText} <ArrowRight size={16} />
                </motion.a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
