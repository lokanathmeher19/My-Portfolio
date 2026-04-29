import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPos &&
          element.offsetTop + element.offsetHeight > scrollPos
        ) {
          setActive(`#${section}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="nav-container">
      <nav className="navbar">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`nav-item ${active === link.href ? "active" : ""}`}
            style={{ position: 'relative' }}
          >
            {active === link.href && (
              <motion.div
                layoutId="nav-glow"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "100px",
                  zIndex: -1,
                  boxShadow: "0 0 15px rgba(34, 211, 238, 0.15)",
                }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
