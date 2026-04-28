import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, MapPin, Mail, Phone, ChevronLeft, Award, Code2, Binary, Terminal, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Resume() {
  const [showPDF, setShowPDF] = useState(false);
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "GIET University, Bhubaneswar",
      period: "2024 — 2028",
      grade: "8.5 CGPA",
      color: "#22d3ee",
      icon: <Code2 size={20} />,
      subjects: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "OOPs", "Web Technologies"]
    },
    {
      degree: "Higher Secondary (Class 12 PCM)",
      institution: "CHSE Board Odisha",
      period: "2022 — 2024",
      grade: "68% Score",
      color: "#a855f7",
      icon: <Binary size={20} />,
      subjects: ["Advanced Mathematics", "Physics", "Chemistry", "Information Technology"]
    },
    {
      degree: "Secondary Education (Class 10)",
      institution: "BSE Board Odisha",
      period: "2020 — 2022",
      grade: "78% Score",
      color: "#3b82f6",
      icon: <Terminal size={20} />,
      subjects: ["Mathematics", "General Science", "Social Studies", "English"]
    }
  ];

  const skills = [
    { category: "Programming Languages", items: ["Python", "JavaScript", "C++", "Java", "C"] },
    { category: "Web Development", items: ["React.js", "Node.js", "MongoDB", "Express.js", "HTML5", "CSS3"] },
    { category: "Core Competencies", items: ["Data Structures", "Algorithms", "DBMS", "Object Oriented Programming"] },
    { category: "Security & Analytics", items: ["Cyber Threat Analysis", "Splunk", "Kali Linux", "Data Analytics"] }
  ];

  return (
    <div className="section" style={{ minHeight: '100vh', paddingTop: '140px', paddingBottom: '100px' }}>
      <div className="app-bg"></div>
      <div className="glow-orb orb-1"></div>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Link to="/" className="btn-premium btn-secondary" style={{ marginBottom: '48px' }}>
          <ChevronLeft size={18} /> Back to Portfolio
        </Link>
        
        {/* 👤 Profile Header */}
        <div style={{ marginBottom: '60px' }}>
          <span className="badge">Professional Student Portfolio</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '20px' }}>Lokanath Meher</h1>
          
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', color: 'var(--text-secondary)', fontWeight: 600 }}>
            <a href="mailto:meherlokanath314@gmail.com" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={16} style={{ color: 'var(--accent-cyan)' }} />
              meherlokanath314@gmail.com
            </a>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} style={{ color: 'var(--accent-purple)' }} />
              +91 9937164359
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} style={{ color: 'var(--accent-blue)' }} />
              Bhubaneswar, India
            </span>
          </div>
        </div>

        {/* 🚀 Download Action Row */}
        <div className="glass-panel" style={{ padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Curriculum Vitae</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Verified academic and technical background.</p>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button 
              onClick={() => setShowPDF(!showPDF)} 
              className="btn-premium btn-secondary" 
              style={{ padding: '12px 24px', fontSize: '0.9rem' }}
            >
              {showPDF ? "Hide Document" : "Show Document"}
            </button>
            <a href="LOKANATH MEHER (2).pdf" download className="btn-premium btn-primary" style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
              Download Resume PDF <Download size={18} />
            </a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'start' }}>
          {/* 🎓 Education Timeline */}
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Award size={24} style={{ color: 'var(--accent-cyan)' }} /> Education
            </h2>

            <div style={{ position: 'relative', paddingLeft: '30px', borderLeft: '2px solid rgba(255,255,255,0.05)' }}>
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ position: 'relative', marginBottom: '40px' }}
                >
                  {/* Dot */}
                  <div style={{
                    position: 'absolute', left: '-39px', top: '6px',
                    width: '16px', height: '16px', borderRadius: '50%',
                    background: '#020617', border: `3px solid ${edu.color}`,
                    boxShadow: `0 0 10px ${edu.color}`
                  }} />

                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 700 }}>{edu.period}</span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginTop: '4px' }}>{edu.degree}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 500, marginBottom: '12px' }}>{edu.institution}</p>

                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '8px', background: `${edu.color}15`, border: `1px solid ${edu.color}30`, marginBottom: '12px' }}>
                    {edu.icon}
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>{edu.grade}</span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                    {edu.subjects.map((sub, i) => (
                      <span key={i} style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.02)', color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.04)' }}>{sub}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 💻 Skills Matrix */}
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Code2 size={24} style={{ color: 'var(--accent-purple)' }} /> Skills Matrix
            </h2>

            <div style={{ display: 'grid', gap: '24px' }}>
              {skills.map((skillGroup, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel" 
                  style={{ padding: '24px 30px' }}
                >
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', fontWeight: 700 }}>
                    {skillGroup.category}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {skillGroup.items.map((skill, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.03)', padding: '8px 14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <CheckCircle2 size={14} style={{ color: 'var(--accent-purple)' }} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 📁 Traditional PDF Viewer Fallback */}
        {showPDF && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ marginTop: '60px' }}
          >
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '24px', textAlign: 'center' }}>Original Resume Document</h2>
            <div className="glass-panel" style={{ padding: '20px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(5, 8, 22, 0.5)' }}>
              <img 
                src="resume.jpg" 
                alt="Resume Document" 
                style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} 
              />
            </div>
          </motion.div>
        )}

      </div>
    </div>
  )
}
