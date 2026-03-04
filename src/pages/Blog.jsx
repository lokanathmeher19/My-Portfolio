import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import emailjs from "emailjs-com";
import "../styles/blog.css";

export default function Blog() {
  const defaultPosts = [
    {
      id: 1,
      title: "Why I Love Building AI Projects",
      text: "Working on AI-based systems like mammogram cancer detection has taught me how impactful technology can be when applied to healthcare. Combining deep learning with real-world problems is my favorite way to innovate.",
    },
    {
      id: 2,
      title: "My Thoughts on Design & Aesthetics",
      text: "I believe design should be a balance between functionality and emotion. Dark themes with minimalist layouts always inspire me to create something that feels personal and futuristic.",
    },
    {
      id: 3,
      title: "Balancing Tech and Creativity",
      text: "As someone who codes and dances, I’ve realized creativity isn’t limited to art — it also lives in algorithms. Each project is like choreography for the mind.",
    },
    {
      id: 4,
      title: "The Beauty of Simple Code",
      text: "Clean code isn’t just about fewer lines — it’s about clarity. Elegance in code feels like poetry to me — each function should have rhythm and purpose.",
    },
    {
      id: 5,
      title: "Curating the Classics",
      text: "Building 'The Top 100 Novels' wasn't just about coding; it was about honoring literature. Creating a digital library that feels as premium as a leather-bound book was a challenge I loved tackling.",
    },
    {
      id: 6,
      title: "Simulating the Cosmos",
      text: "With 'Solar System Explorer', I wanted to bring the universe to the browser. Using pure CSS for orbital animations taught me that sometimes the most complex beauty can be built with simple tools.",
    },
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("kd_blog_votes") || "{}");
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    const withVotes = defaultPosts.map((p) => ({
      ...p,
      agree: savedVotes[p.id]?.agree || 0,
      disagree: savedVotes[p.id]?.disagree || 0,
      userVote: votedByUser[p.id] || null,
    }));
    setPosts(withVotes);
  }, []);

  function vote(id, type) {
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    const currentVote = votedByUser[id];

    let nextPosts;
    let newVotedByUser = { ...votedByUser };
    let action = "";

    if (currentVote === type) {
      // Toggle off (unlike)
      nextPosts = posts.map((p) =>
        p.id === id ? { ...p, [type]: Math.max(0, p[type] - 1), userVote: null } : p
      );
      delete newVotedByUser[id];
      action = `removed their ${type} vote from`;
    } else if (currentVote) {
      // Switch vote
      nextPosts = posts.map((p) =>
        p.id === id
          ? {
            ...p,
            [currentVote]: Math.max(0, p[currentVote] - 1),
            [type]: p[type] + 1,
            userVote: type,
          }
          : p
      );
      newVotedByUser[id] = type;
      action = `switched their vote to ${type} on`;
    } else {
      // New vote
      nextPosts = posts.map((p) =>
        p.id === id ? { ...p, [type]: p[type] + 1, userVote: type } : p
      );
      newVotedByUser[id] = type;
      action = `voted ${type} on`;
    }

    setPosts(nextPosts);

    const votes = Object.fromEntries(
      nextPosts.map((p) => [p.id, { agree: p.agree, disagree: p.disagree }])
    );
    localStorage.setItem("kd_blog_votes", JSON.stringify(votes));
    localStorage.setItem("kd_blog_voted", JSON.stringify(newVotedByUser));

    // Send Email Notification
    const postTitle = posts.find((p) => p.id === id)?.title || "Unknown Post";

    // Using existing environment variables from Contact.jsx
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceID && templateID && publicKey) {
      emailjs.send(
        serviceID,
        templateID,
        {
          from_name: "Blog Visitor",
          contact_info: "N/A", // Placeholder as we don't have user email here
          subject: `Blog Interaction: ${postTitle}`,
          message: `A user has ${action} the post: "${postTitle}".\n\nCurrent Stats - Agree: ${votes[id].agree}, Disagree: ${votes[id].disagree}`,
        },
        publicKey
      ).then(() => {
        console.log("Email notification sent successfully");
      }).catch((err) => {
        console.error("Failed to send email notification", err);
      });
    } else {
      console.warn("EmailJS environment variables not set. Notification skipped.");
    }
  }

  return (
    <motion.section
      className="blog-section"
      style={{ position: "relative", overflow: "hidden" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      
      <motion.h2
        className="blog-title"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        📝 My Blog
      </motion.h2>
      <p className="blog-sub">
        Personal thoughts, experiences, and reflections — feel free to react!
      </p>

      <div className="blog-grid">
        {posts.map((p, idx) => (
          <motion.div
            key={p.id}
            className="blog-post"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 20px rgba(255,255,255,0.1)",
            }}
          >
            <h3 className="post-title">{p.title}</h3>
            <p className="post-text">{p.text}</p>

            <div className="vote-container">
              <motion.button
                onClick={() => vote(p.id, "agree")}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.15 }}
                className={`vote-btn-circle agree ${p.userVote === "agree" ? "active" : ""
                  }`}
              >
                <ThumbsUp size={20} />
                <motion.span
                  key={p.agree}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="vote-count"
                >
                  {p.agree}
                </motion.span>
              </motion.button>

              <motion.button
                onClick={() => vote(p.id, "disagree")}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.15 }}
                className={`vote-btn-circle disagree ${p.userVote === "disagree" ? "active" : ""
                  }`}
              >
                <ThumbsDown size={20} />
                <motion.span
                  key={p.disagree}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="vote-count"
                >
                  {p.disagree}
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
