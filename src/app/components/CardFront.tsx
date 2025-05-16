'use client';

import React from 'react';

interface CardFrontProps {
  // onClick: () => void; // To handle flip from parent
}

const CardFront: React.FC<CardFrontProps> = ({ /*onClick*/ }) => {
  return (
    <div 
      className="absolute inset-0 w-full h-full bg-[var(--background)] text-[var(--foreground)] rounded-lg flex flex-col items-center justify-center p-6 backface-hidden shadow-lg"
      // onClick={onClick} // If click on front triggers flip
    >
      {/* Temp content - will be replaced by your actual front content */}
      <h1 className="text-3xl font-bold mb-2">Raaga Karumanchi 🪐</h1>
      <p className="text-lg">Your compelling photo here</p>
      <p className="mt-4 text-sm">rk3373@barnard.edu</p>
      <p className="mt-8 text-xs italic flex items-center gap-1">
        Flip for details <span className="text-base">✉️</span>
      </p>
    </div>
  );
};

export default CardFront; 