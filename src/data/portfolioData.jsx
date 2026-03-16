import React from 'react';
import { BookOpen, Orbit } from 'lucide-react';

import novels_img from '../assets/novels.png';
import solar_img from '../assets/solar.png';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';
import gmailLogo from '../assets/gmail.png';
import whatsappLogo from '../assets/whatsapp.png';
import instagramLogo from '../assets/insta.png';
import telegramLogo from '../assets/telegram.png';

export const PROJECTS = [
    {
        title: 'The Top 100 Novels',
        desc: "Explore India's finest literary collection with stunning covers and a premium reading experience.",
        category: 'Web Apps',
        tag: 'LITERATURE',
        color: '#ff4b6e',
        icon: <BookOpen size={28} color="white" />,
        img: novels_img,
        tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
        live: 'https://thesolarsystem.free.nf/loginpage/novels.html',
        github: 'https://github.com/lokanathmeher19',
        btnText: 'Launch App'
    },
    {
        title: 'Solar System Explorer',
        desc: 'Journey through our cosmic neighborhood with interactive CSS-driven celestial animations.',
        category: 'Web Apps',
        tag: 'ASTRONOMY',
        color: '#0ea5e9',
        icon: <Orbit size={28} color="white" />,
        img: solar_img,
        tech: ['React', 'Framer Motion', 'CSS3'],
        live: 'https://thesolarsystem.free.nf/solarpage/index.html',
        github: 'https://github.com/lokanathmeher19',
        btnText: 'Explore Universe'
    },
    {
        title: 'AI Image Generator',
        desc: 'A high-performance AI integration for generating artistic visuals from text prompts.',
        category: 'AI',
        tag: 'ARTIFICIAL INTELLIGENCE',
        color: '#8b5cf6',
        icon: <Orbit size={28} color="white" />,
        img: solar_img,
        tech: ['Python', 'OpenAI API', 'Node.js'],
        live: '#',
        github: 'https://github.com/lokanathmeher19',
        btnText: 'Try AI'
    },
    {
        title: 'Crypto Portfolio Tracker',
        desc: 'Real-time dashboard for monitoring digital assets with secure API integrations.',
        category: 'Web Apps',
        tag: 'FINTECH',
        color: '#10b981',
        icon: <Orbit size={28} color="white" />,
        img: novels_img,
        tech: ['MERN', 'WebSocket', 'Tailwind'],
        live: '#',
        github: 'https://github.com/lokanathmeher19',
        btnText: 'View Tracker'
    },
    {
        title: 'Automated Logic Core',
        desc: 'Custom Python framework for high-speed algorithmic execution and data processing.',
        category: 'Python',
        tag: 'AUTOMATION',
        color: '#f59e0b',
        icon: <Orbit size={28} color="white" />,
        img: solar_img,
        tech: ['Python', 'Pandas', 'NumPy'],
        live: '#',
        github: 'https://github.com/lokanathmeher19',
        btnText: 'Check Docs'
    },
    {
        title: 'Log Analysis Shield',
        desc: 'Security automation tool for identifying anomalous patterns in server traffic.',
        category: 'Cybersecurity',
        tag: 'SECURITY',
        color: '#22d3ee',
        icon: <Orbit size={28} color="white" />,
        img: novels_img,
        tech: ['Python', 'Splunk', 'Kali'],
        live: '#',
        github: 'https://github.com/lokanathmeher19',
        btnText: 'Analyze'
    }
];

export const PROFESSIONS = [
    'Cyber Threat Analyst (Learner)',
    'Python Programmer',
    'MERN Full-Stack Architect',
    'Computer Science Engineer',
];

export const QUICK_LINKS = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/lokanathmeher19' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/lokanath-meher-a79506353/' },
    { img: gmailLogo, title: 'Email', link: 'https://mail.google.com/mail/?view=cm&fs=1&to=meherlokanath314@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/919937164359?text=Hello%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/syntxerror_01/' },
    { img: null, title: 'X', link: 'https://x.com/Lokanath_meher_' },
    { img: telegramLogo, title: 'Telegram', link: 'http://t.me/ScorpioX99' },
];

export const INFO_CARDS = [
    { label: 'Expertise', value: 'Python, Problem Solving', icon: '💼' },
    { label: 'Contact', value: 'meherlokanath314@gmail.com', icon: '📧' },
    { label: 'Location', value: 'Bargarh, Odisha, 768028', icon: '📍' },
];
