import React from "react";
import { motion } from "framer-motion";
import { Download, MapPin, Mail, Phone, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="section" style={{ minHeight: '100vh', paddingTop: '140px' }}>
      <div className="app-bg"></div>
      <div className="glow-orb orb-1"></div>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Link to="/" className="btn-premium btn-secondary" style={{ marginBottom: '48px' }}>
          <ChevronLeft size={18} /> Back to Portfolio
        </Link>
        
        <div style={{ marginBottom: '80px' }}>
          <span className="badge">Technical Case Study</span>
          <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Curriculum Vitae</h1>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={18} /> meherlokanath314@gmail.com</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={18} /> +91 8018677061</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={18} /> Bhubaneswar, India</div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: 0, overflow: 'hidden', marginBottom: '48px' }}>
          <div style={{ padding: '24px 40px', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.2rem' }}>Interactive PDF Viewer</h3>
            <a href="LOKANATH MEHER (2).pdf" download className="btn-premium btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
              Download PDF <Download size={16} />
            </a>
          </div>
          <div style={{ background: '#000', height: '800px' }}>
            <iframe
              src="LOKANATH MEHER (2).pdf#toolbar=0"
              title="Resume"
              style={{ width: '100%', height: '100%', border: 'none', opacity: 0.95 }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div className="glass-panel" style={{ padding: '40px' }}>
            <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}>Objective</h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Dedicated Computer Science engineer focused on the intersection of security and intelligence. 
              Seeking to leverage deep technical knowledge to build resilient, state-of-the-art software systems.
            </p>
          </div>
          <div className="glass-panel" style={{ padding: '40px' }}>
            <h4 style={{ color: 'var(--accent-purple)', marginBottom: '16px' }}>Core Philosophy</h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Performance is a feature. Security is the foundation. I build with the end-user in mind while maintaining 
              the rigorous standards required for enterprise-grade applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
