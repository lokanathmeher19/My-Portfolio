import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Award } from "lucide-react";


// 🖼️ Import Certificate Images
import nxtwave_responsive from "../assets/certs/nxtwave_responsive.jpg";
import nxtwave_autonomous from "../assets/certs/nxtwave_autonomous.jpg";
import nxtwave_static from "../assets/certs/nxtwave_static.jpg";
import coursera_wordpress from "../assets/certs/coursera_wordpress.jpg";
import coursera_genai from "../assets/certs/coursera_genai.jpg";
import coursera_cybersecurity from "../assets/certs/coursera_cybersecurity.jpg";
import coursera_gemini from "../assets/certs/coursera_gemini.jpg";
import giet_cad_bootcamp from "../assets/certs/giet_cad_bootcamp.jpg";
import giet_suravi_model from "../assets/certs/giet_suravi_model.jpg";
import giet_nccengt_paper from "../assets/certs/giet_nccengt_paper.jpg";
import giet_drone_bootcamp from "../assets/certs/giet_drone_bootcamp.jpg";
import giet_iccoset_conf from "../assets/certs/giet_iccoset_conf.jpg";
import codtech_python from "../assets/certs/codtech_python.jpg";
import codec_python_achievement from "../assets/certs/codec_python_achievement.jpg";
import codec_python_internship from "../assets/certs/codec_python_internship.jpg";
import simplilearn_software_dev from "../assets/certs/simplilearn_software_dev.jpg";
import deloitte_data_analytics from "../assets/certs/deloitte_data_analytics.png";

// ✅ Certificates data (added URLs for View button)
const CERTS = {
  nxtwave: [
    {
      title: "Build Your Own Responsive Website",
      org: "NxtWave",
      date: "2025",
      img: nxtwave_responsive,
      link: nxtwave_responsive,
    },
    {
      title: "Autonomous Vehicles Masterclass",
      org: "NxtWave",
      date: "2025",
      img: nxtwave_autonomous,
      link: nxtwave_autonomous,
    },
    {
      title: "Build Your Own Static Website",
      org: "NxtWave",
      date: "2025",
      img: nxtwave_static,
      link: nxtwave_static,
    },
  ],
  coursera: [
    {
      title: "Build a free website with WordPress",
      org: "Coursera Project Network",
      date: "2025",
      img: coursera_wordpress,
      link: coursera_wordpress,
    },
    {
      title: "Introduction to Generative AI",
      org: "Google Cloud",
      date: "2025",
      img: coursera_genai,
      link: coursera_genai,
    },
    {
      title: "Introduction to Cybersecurity Essentials",
      org: "IBM",
      date: "2025",
      img: coursera_cybersecurity,
      link: coursera_cybersecurity,
    },
    {
      title: "Introduction to Gemini for Google Workspace",
      org: "Google Cloud",
      date: "2025",
      img: coursera_gemini,
      link: coursera_gemini,
    },
  ],
  giet: [
    {
      title: "Bootcamp on CAD Designs to 3D Printing",
      org: "NIELIT & GIET",
      date: "2025",
      img: giet_cad_bootcamp,
      link: giet_cad_bootcamp,
    },
    {
      title: "Model Fiesta 'SURAVI-2K25'",
      org: "GIET",
      date: "2025",
      img: giet_suravi_model,
      link: giet_suravi_model,
    },
    {
      title: "Paper Presentation NCCENGT-2025",
      org: "GIET",
      date: "2025",
      img: giet_nccengt_paper,
      link: giet_nccengt_paper,
    },
    {
      title: "Drone Aeromechanics Bootcamp",
      org: "NIELIT",
      date: "2025",
      img: giet_drone_bootcamp,
      link: giet_drone_bootcamp,
    },
    {
      title: "International Conference ICCOSET-2024",
      org: "GIET",
      date: "2024",
      img: giet_iccoset_conf,
      link: giet_iccoset_conf,
    },
  ],
  other: [
    {
      title: "Python Programming Internship",
      org: "CodTech IT Solutions",
      date: "2025",
      img: codtech_python,
      link: codtech_python,
    },
    {
      title: "Python Developer Internship (Achievement)",
      org: "Codec Technologies",
      date: "2025",
      img: codec_python_achievement,
      link: codec_python_achievement,
    },
    {
      title: "Python Developer Internship",
      org: "Codec Technologies",
      date: "2025",
      img: codec_python_internship,
      link: codec_python_internship,
    },
    {
      title: "What is Software Development?",
      org: "Simplilearn",
      date: "2025",
      img: simplilearn_software_dev,
      link: simplilearn_software_dev,
    },
    {
      title: "Data Analytics Job Simulation",
      org: "Deloitte",
      date: "2025",
      img: deloitte_data_analytics,
      link: deloitte_data_analytics,
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("nxtwave");
  const [selectedCert, setSelectedCert] = useState(null);

  const getTabIcon = (t) => {
    switch (t) {
      case "nxtwave":
        return <img src="/gallery/nxtwave_logo.png" alt="NxtWave" style={{ width: 20, height: 20, objectFit: "contain" }} />;
      case "giet":
        return <img src="/gallery/giet_logo.jpg" alt="GIET" style={{ width: 20, height: 20, objectFit: "cover", borderRadius: "50%" }} />;
      case "coursera":
        return <img src="/gallery/coursera_logo.png" alt="Coursera" style={{ width: 20, height: 20, objectFit: "contain", borderRadius: "50%" }} />;
      case "other":
        return <Award size={18} />;
      default:
        return null;
    }
  };

  return (
    <section className="container" style={{ padding: "40px 0", position: "relative", overflow: "hidden" }}>
      
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
          {["nxtwave", "coursera", "giet", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {getTabIcon(t)}
              <span>{t === "nxtwave" ? "NXTWAVE" : t === "coursera" ? "COURSERA" : t === "giet" ? "GIET,BBER" : "Others"}</span>
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
