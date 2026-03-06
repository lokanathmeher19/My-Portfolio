import React from 'react'
import { motion } from 'framer-motion'
import "../styles/Home.css"
import '../index.css'


// 🖼️ Import Assets
import photo from '../assets/photo.jpg'


import useScrollNavigation from '../hooks/useScrollNavigation'
import { PROFESSIONS, QUICK_LINKS, INFO_CARDS } from '../data/portfolioData'

export default function Home() {
  useScrollNavigation('/projects', null)

  return (
    <section className="home-section">

      {/* Typing Effect Styles */}
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* Top Section: Photo + Info */}
      <div className="home-top">
        {/* Left: Professional Photo Presentation */}
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="photo-container"
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {/* Subtle static background ring instead of rotating neon */}
          <div style={{
            position: 'absolute',
            width: '105%',
            height: '105%',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
            zIndex: 0
          }} />

          <motion.div
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
            transition={{ duration: 0.3 }}
            style={{
              zIndex: 1,
              borderRadius: '50%',
              overflow: 'hidden',
              background: '#111',
              border: '2px solid rgba(255,255,255,0.1)'
            }}
          >
            <img
              src={photo}
              alt="Lokanath Meher"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="home-name"
            >
              Lokanath Meher
            </motion.span>
          </h1>

          {/* Typing Animated Text */}
          <p className="typing-effect">
            Software Developer | Cybersecurity Analyst | Tech Explorer
          </p>

          {/* Profession Tags */}
          <motion.div className="profession-tags">
            {PROFESSIONS.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2, background: 'rgba(255,255,255,0.1)' }}
                transition={{ duration: 0.2 }}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontSize: '13px',
                  color: '#ccc',
                  cursor: 'default',
                  display: 'inline-block',
                  marginRight: '8px',
                  marginBottom: '8px'
                }}
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div className="info-cards">
            {INFO_CARDS.map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.2 }}
                className="info-card"
                style={{
                  background: 'rgba(20,20,20,0.6)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '12px',
                  padding: '16px',
                  flex: '1',
                  minWidth: '140px'
                }}
              >
                <strong style={{ display: 'block', color: '#888', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{info.label}</strong>
                <p style={{ margin: 0, color: '#eee', fontSize: '14px', fontWeight: '500' }}>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Quick Links */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {QUICK_LINKS.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)' }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

    </section>
  )
}


