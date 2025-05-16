'use client';

import React, { useState } from 'react';

interface ClickToRevealProps {
  title: string;
  children: React.ReactNode; // Content to be revealed
}

const ClickToReveal: React.FC<ClickToRevealProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-[var(--foreground)] hover:text-[var(--foreground)]/80 transition-colors duration-200 flex items-center w-full text-left focus:outline-none"
      >
        <span className="mr-2 w-3 inline-block text-center text-lg">{isOpen ? '◦' : '•'}</span>
        {title}
      </button>
      {isOpen && (
        <div className="pt-1 pb-2 pl-[calc(0.75rem+0.5rem)] text-[var(--foreground)]/80 text-sm leading-relaxed animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

// Basic fadeIn animation for the revealed content
// We can add this to globals.css or keep it here if it's component-specific enough.
// For now, let's assume we'll add a generic fadeIn to globals.css

export default ClickToReveal; 