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
    icon: <Github size={20} />,
    label: 'GitHub Profile'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/raagakarumanchi',
    icon: <Linkedin size={20} />,
    label: 'LinkedIn Profile'
  },
  {
    name: 'X',
    url: 'https://x.com/raagakarumanchi',
    icon: <Twitter size={20} />,
    label: 'X Profile'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/raagakarumanchi',
    icon: <Instagram size={20} />,
    label: 'Instagram Profile'
  },
  {
    name: 'Writing',
    url: 'https://raagak.substack.com/',
    icon: <Pencil size={20} />,
    label: 'Substack Writing'
  }
];

export const SocialLinks = () => {
  return (
    <div className="social-links" style={{ fontSize: '9pt' }}>
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
          <span className="social-link-text">{link.name}</span>
        </a>
      ))}
    </div>
  );
}; 