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
];

export const PROFESSIONS = [
    'Cyber Threat Analyst(Learner)',
    'Python Programmer',
    'Full Stack Developer',
    'MERN Stack Developer',
];

export const QUICK_LINKS = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/lokanathmeher19' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/er-lokanath-meher-a79506353' },
    { img: gmailLogo, title: 'Email', link: 'https://mail.google.com/mail/?view=cm&fs=1&to=meherlokanath314@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/918018677061' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/nixcoder_19/' },
    { img: telegramLogo, title: 'Telegram', link: 'http://t.me/ScorpioX99' },
];

export const INFO_CARDS = [
    { label: '📍 Location', value: 'Bargarh, Odisha, 768028' },
    { label: '💼 Expertise', value: 'Python,Problem Solving' },
    { label: '📧 Contact', value: 'meherlokanath314@gmail.com' },
];
