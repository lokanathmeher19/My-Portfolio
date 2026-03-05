import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import "../styles/Contact.css"
import '../index.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.contact || !form.subject || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const isEmail = emailPattern.test(form.contact);
    if (!isEmail && isNaN(form.contact)) {
      toast.error("Please enter a valid email or phone number.");
      return;
    }

    const toastId = toast.loading("Sending message...");

    fetch("https://formsubmit.co/ajax/meherlokanath314@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        contact: form.contact,
        subject: form.subject,
        message: form.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === "true" || data.success === true) {
          toast.success("Message sent successfully!", { id: toastId });
          setForm({ name: "", contact: "", subject: "", message: "" });
        } else {
          toast.error("Failed to send. Try again later.", { id: toastId });
        }
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error("Failed to send. Try again later.", { id: toastId });
      });
  };

  const quickLinks = [
    { img: "/github.png", title: "GitHub", link: "https://github.com/lokanathmeher19" },
    { img: "/linkedin.png", title: "LinkedIn", link: "https://www.linkedin.com/in/er-lokanath-meher-a79506353" },
    { img: "/gmail.png", title: "Email", link: "mailto:meherlokanath314@gmail.com" },
    { img: "/whatsapp.png", title: "WhatsApp", link: "https://wa.me/918018677061" },
    { img: "/insta.png", title: "Instagram", link: "https://www.instagram.com/nixcoder_19/" },
    { img: "/telegram.png", title: "Telegram", link: "http://t.me/ScorpioX99" },
  ];

  return (
    <section className="contact-section" style={{ position: "relative", overflow: "hidden" }}>

      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="contact-title"
      >
        Let’s Connect & Collaborate 🤝
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="contact-subtitle"
      >
        Whether it’s a new project, a collaboration, or just to say hi — I’d love to hear from you!
      </motion.p>

      {/* Quick Links */}
      <motion.div className="contact-links">
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="social-icon"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Your Email or Phone" value={form.contact} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message..." value={form.message} onChange={handleChange} rows="5" required />
        <motion.button type="submit" className="contact-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          🚀 Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
