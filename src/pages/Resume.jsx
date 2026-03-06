import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0", position: "relative", overflow: "hidden" }}>

      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 LOKANATH MEHER
            </h3>
            <div style={{ marginTop: 10, fontSize: 15, color: "#ccc", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <span>2nd Year B.Tech — CSE |</span>
              <img src="giet-logo.jpg" alt="GIET" style={{ width: "20px", height: "20px", objectFit: "contain", borderRadius: "50%" }} />
              <span>GIET, GHANGAPTNA, BBSR</span>
            </div>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 ghangapatna, Bhubneswar, Odisha
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ meherlokanath314@gmail.com | 📞 +91 8018677061
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              i am a 2nd-year B.Tech CSE student experienced in AI, Machine Learning, Deep Learning, and Web Development.
              Skilled in Python, JavaScript, Node.js, TensorFlow, React, C++, and MySQL. Passionate about building
              innovative AI-driven solutions and seeking opportunities to apply technical skills in real-world projects.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Timeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "30px 24px",
            background: "rgba(255,255,255,0.03)",
            transition: "all 0.3s ease",
          }}
          whileHover={{ boxShadow: "0 10px 30px rgba(0, 180, 255, 0.15)", borderColor: "rgba(0, 180, 255, 0.4)", transform: "translateY(-5px)" }}
        >
          <h4 style={{ fontSize: 22, color: "#00b4ff", marginBottom: 25 }}>
            🎓 Education Journey
          </h4>
          <div style={{ position: "relative", paddingLeft: 30 }}>
            {/* Vertical Line */}
            <div style={{ position: "absolute", left: 8, top: 0, bottom: 0, width: 2, background: "rgba(0, 180, 255, 0.2)" }} />

            {[
              {
                title: "B.Tech in Computer Science & Engineering",
                school: "Gandhi Institued of Excellent Technocrats (GIET)",
                logo: "giet-logo.jpg",
                year: "2024–2028",
                desc: "3rd Sem | GPU Accelerated Processing, ML & Network Security focus."
              },
              {
                title: "12th Board (CHSE)",
                school: "Dadhibaman Higher Secondary School (DBHS)",
                logo: "dadhibaman-logo.jpg",
                year: "2024",
                desc: "63% | Advanced Mathematics & Physics."
              },
              {
                title: "10th Board (BSE Odisha)",
                school: "S.A.I.I.E&R, Bargarh",
                logo: "saiier-logo.jpg",
                year: "2022",
                desc: "78% | General Science Framework."
              }
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                style={{ position: "relative", marginBottom: idx === 2 ? 0 : 35 }}
              >
                {/* Timeline Dot */}
                <div style={{
                  position: "absolute", left: -31, top: 6, width: 18, height: 18,
                  borderRadius: "50%", background: "#0b0b0b", border: "3px solid #00b4ff",
                  boxShadow: "0 0 15px #00b4ff"
                }} />

                <h5 style={{ fontSize: 18, color: "#fff", margin: "0 0 6px 0", letterSpacing: 0.5 }}>{edu.title}</h5>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#ccc", fontSize: 14 }}>
                  <img src={edu.logo} alt="logo" style={{ width: 18, height: 18, borderRadius: "50%", objectFit: "contain", background: "white" }} />
                  {edu.school} <span style={{ color: "#00b4ff", fontWeight: "bold" }}>• {edu.year}</span>
                </div>
                <p style={{ margin: "8px 0 0 0", color: "#888", fontSize: 14 }}>{edu.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <motion.li whileHover={{ x: 10, color: "#00b4ff" }} transition={{ type: "spring", stiffness: 300 }}>1️⃣ <strong>The Top 100 Novels:</strong> Curated Digital Archive</motion.li>
            <motion.li whileHover={{ x: 10, color: "#00b4ff" }} transition={{ type: "spring", stiffness: 300 }}>2️⃣ <strong>Solar System Explorer:</strong> Interactive Orbital Simulation</motion.li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Python",
              "C",
              "C++",
              "Java",
              "TensorFlow",
              "React",
              "MySQL",
              "Git",
              "Explainable AI (XAI)",
              "Problem Solving",
              "Teamwork",
              "Adaptability",
              "Creativity",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.15, backgroundColor: "rgba(0,180,255,0.3)", boxShadow: "0 5px 15px rgba(0, 180, 255, 0.4)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                  cursor: "default"
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "💻 GitHub", link: "https://github.com/lokanathmeher19" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/er-lokanath-meher-a79506353" },
            { name: "📸 Instagram", link: "https://www.instagram.com/nixcoder_19/" },
            { name: "✈️ Telegram", link: "http://t.me/ScorpioX99" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff", textShadow: "0 0 8px rgba(0, 180, 255, 0.8)" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
          }}
        >
          <iframe
            src="LOKANATH MEHER (2).pdf#zoom=500"
            title="Lokanath Meher Resume"
            style={{
              width: "100%",
              height: "800px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <motion.a
            href="LOKANATH MEHER (2).pdf"
            download="Lokanath_Meher_Resume.pdf"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 180, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #00b4ff, #0077ff)",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 600,
              letterSpacing: 0.5,
              fontSize: 16
            }}
          >
            ⬇️ Download Resume
          </motion.a>
        </div>


      </motion.div>
    </section>
  );
}
