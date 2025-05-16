'use client'; // Still useful if any client-side interactions are added later

import React, { useState } from 'react';
import LiveTime from './components/LiveTime'; // Added LiveTime import
// Removed imports for LiveTime, ClickToReveal, CardFront, CardBack as they are not used in the new design
// Will add LiveTime back if we implement the clock

const currentlyItemsData = [
  { 
    id: '1', 
    text: 'research assistant at Columbia University Medical Center',
    details: 'Working on projects related to neurodevelopmental disorders and brain imaging techniques.'
  },
  { 
    id: '2', 
    text: 'research assistant at UCSF',
    // No details for this one for now
  },
  { 
    id: '3', 
    text: 'researching the post-menopausal demographic at the NIH All of Us Research Program (1st place nationally & people\'s choice award recipient!)',
    details: 'My research focused on health disparities and presented at the national convention.'
  },
  { 
    id: '4', 
    text: 'building cool things' 
  },
];

const previouslyItemsData = [
  {
    id: '1',
    text: 'research assistant at UCSF Center for Cerebrovascular Research',
    details: 'Contributed to data analysis for studies on stroke recovery and prevention.'
  },
  {
    id: '2',
    text: 'led my high school\'s neuroscience club (we did sheep brain dissections and invited professors to speak!)',
    details: 'Organized events that fostered a passion for neuroscience among students.'
  },
  {
    id: '3',
    text: 'passionate about science'
  },
];

const socialLinks = [
  { id: 'x', href: 'https://x.com/RaagaKarumanchi', label: 'x', isExternal: true },
  { id: 'github', href: 'https://github.com/raagakarumanchi', label: 'github', isExternal: true },
  { id: 'linkedin', href: 'https://linkedin.com/in/raagakarumanchi', label: 'linkedin', isExternal: true },
  { id: 'instagram', href: 'https://instagram.com/raagakarumanchi', label: 'instagram', isExternal: true },
  { id: 'lists', href: '#favorites', label: 'lists', isExternal: false },
];

export default function Home() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 text-[var(--foreground)] bg-[var(--background)]">
      <div className="w-full max-w-3xl space-y-12"> {/* Increased max-width for better spacing */}
        {/* Header Section */}
        <header className="text-left">
          <h1 className="font-serif text-5xl md:text-6xl font-normal mb-2 lowercase">
            hi! i'm <span className="font-cursive capitalize transition-all duration-300 ease-in-out hover:scale-105 hover:text-white">Raaga Karumanchi</span> <span role="img" aria-label="Saturn emoji" className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-[10deg]">🪐</span>
          </h1>
          <p className="text-sm text-[var(--foreground)]/70 mb-4 animate-fadeIn transition-colors duration-200 hover:text-[var(--foreground)]">
            <LiveTime timezone="America/Los_Angeles" label="sf bay area" showTimezone={true} />
          </p>
          <div className="space-y-3 text-base md:text-lg leading-relaxed text-[var(--foreground)]/90 animate-fadeIn">
            <p>
              Second-year at Columbia studying Neuroscience.
            </p>
            <p>
              Founder & Executive Director of <a href="https://donateessentials.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--foreground)]/70 transition-colors">Donate Essentials</a>, a 501(c)(3) nonprofit.
            </p>
            <p>
              Passionate about global health, healthtech, and neuroscience.
            </p>
            <p>
              I like to sidequest often.
            </p>
          </div>
          <p className="mt-4 text-base text-[var(--foreground)]/80 animate-fadeIn">
            Feel free to <a href="mailto:rk3373@barnard.edu" className="underline hover:text-[var(--foreground)] transition-colors">reach out to me</a>.
          </p>
        </header>

        {/* Childhood Photos Section */}
        <section className="py-8 animate-fadeIn">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
            <img
              src="/dad_and_me.jpeg" // Ensure this image is in your /public folder
              alt="Raaga with her dad as a child"
              className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-lg shadow-xl aspect-square transition-transform duration-300 hover:scale-105"
            />
            <img
              src="/baby_photo.jpeg" // Ensure this image is in your /public folder
              alt="Raaga as a baby"
              className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-lg shadow-xl aspect-square transition-transform duration-300 hover:scale-105"
            />
          </div>
        </section>

        {/* Currently Section */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-normal mb-6 animate-fadeIn transition-colors duration-200 hover:text-[var(--foreground)]">
            currently
          </h2>
          <ul className="space-y-1 list-none">
            {currentlyItemsData.map((item) => (
              <li key={item.id} className="text-base text-[var(--foreground)]/90 rounded-md transition-all duration-200 ease-in-out hover:bg-[var(--foreground)]/5">
                <div 
                  className={`flex items-center p-2 cursor-pointer hover:text-[var(--foreground)] ${item.details ? '' : 'pointer-events-none'}`}
                  onClick={() => item.details && toggleItem(item.id)}
                >
                  <span className="mr-3 text-[var(--foreground)]/70">
                    {item.details ? (expandedItems[item.id] ? '◦' : '•') : '•'}
                  </span>
                  <span>{item.text}</span>
                </div>
                {item.details && (
                  <div 
                    className={`pl-10 pr-2 pb-2 overflow-hidden transition-all duration-300 ease-in-out ${expandedItems[item.id] ? 'max-h-screen' : 'max-h-0'}`}
                  >
                    <p className="text-sm text-[var(--foreground)]/70">
                      {item.details}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Previously Section */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-normal mb-6 animate-fadeIn transition-colors duration-200 hover:text-[var(--foreground)]">
            previously
          </h2>
          <ul className="space-y-1 list-none">
            {previouslyItemsData.map((item) => (
              <li key={item.id} className="text-base text-[var(--foreground)]/90 rounded-md transition-all duration-200 ease-in-out hover:bg-[var(--foreground)]/5">
                <div 
                  className={`flex items-center p-2 cursor-pointer hover:text-[var(--foreground)] ${item.details ? '' : 'pointer-events-none'}`}
                  onClick={() => item.details && toggleItem(item.id)}
                >
                  <span className="mr-3 text-[var(--foreground)]/70">
                    {item.details ? (expandedItems[item.id] ? '◦' : '•') : '•'}
                  </span>
                  <span>{item.text}</span>
                </div>
                {item.details && (
                  <div 
                    className={`pl-10 pr-2 pb-2 overflow-hidden transition-all duration-300 ease-in-out ${expandedItems[item.id] ? 'max-h-screen' : 'max-h-0'}`}
                  >
                    <p className="text-sm text-[var(--foreground)]/70">
                      {item.details}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Favorites Section - New */}
        <section id="favorites" className="animate-fadeIn">
          <h2 className="font-serif text-3xl md:text-4xl font-normal mb-6 transition-colors duration-200 hover:text-[var(--foreground)]">
            favorites ✨
          </h2>
          <div className="text-base text-[var(--foreground)]/90 space-y-4">
            <p>
              A curated collection of things I love and recommend. Check back soon for updates!
            </p>
            {/* You can add more structured lists here later, e.g.: */}
            {/* 
            <h3 className="font-serif text-xl mt-6 mb-2">Books</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Book 1 - <span className="text-sm text-[var(--foreground)]/70">Short note</span></li>
              <li>Book 2</li>
            </ul>
            <h3 className="font-serif text-xl mt-6 mb-2">Movies</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Movie 1</li>
            </ul> 
            */}
          </div>
        </section>

        {/* Bottom Photos Section */}
        <section className="py-8 animate-fadeIn">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
            <img
              src="/snowy_day.jpeg" // Ensure this image is in your /public folder
              alt="Raaga on a snowy day"
              className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-lg shadow-xl aspect-square transition-transform duration-300 hover:scale-105"
            />
            <img
              src="/amusement_park.jpeg" // Ensure this image is in your /public folder
              alt="Raaga at an amusement park"
              className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-lg shadow-xl aspect-square transition-transform duration-300 hover:scale-105"
            />
          </div>
        </section>

        {/* Footer Section */}
        <footer className="pt-12 mt-10 border-t border-[var(--foreground)]/20 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: Socials */}
            <div>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target={link.isExternal ? '_blank' : '_self'} 
                      rel={link.isExternal ? 'noopener noreferrer' : ''}
                      className="text-base text-[var(--foreground)]/80 hover:text-[var(--foreground)] hover:underline transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Other Info */}
            <div className="space-y-2 text-right md:text-left"> {/* Adjusted alignment for consistency */}
              <p>
                <a
                  href="mailto:rk3373@barnard.edu"
                  className="text-base text-[var(--foreground)]/80 hover:text-[var(--foreground)] hover:underline transition-colors"
                >
                  rk3373@barnard.edu
                </a>
              </p>
              <p className="text-base text-[var(--foreground)]/80 transition-colors duration-200 hover:text-[var(--foreground)]">
                <LiveTime timezone="America/New_York" label="nyc" /> | <LiveTime timezone="America/Los_Angeles" label="sf" />
              </p>
              <p className="text-sm text-[var(--foreground)]/70 italic transition-colors duration-200 hover:text-[var(--foreground)]">
                Last thoughts scribbled on: {dateString}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
