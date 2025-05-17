'use client';

import { Github, Linkedin, Twitter, Instagram, Pencil } from 'lucide-react';


interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/raagakarumanchi',
    icon: <Github size={10} />,
    label: 'GitHub'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/raagakarumanchi',
    icon: <Linkedin size={10} />,
    label: 'LinkedIn'
  },
  {
    name: 'X',
    url: 'https://x.com/raagakarumanchi',
    icon: <Twitter size={10} />,
    label: 'X'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/raagakarumanchi',
    icon: <Instagram size={10} />,
    label: 'Instagram'
  },
  {
    name: 'Writing',
    url: 'https://raagak.substack.com/',
    icon: <Pencil size={10} />,
    label: 'Writing'
  }
];

export const SocialLinks = () => {
  return (
    <div className="social-links" style={{ fontSize: '10pt' }}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}; 