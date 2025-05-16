'use client';

import React from 'react';
// We'll import LiveTime and ClickToReveal if needed once content is migrated
// import LiveTime from './LiveTime';
// import ClickToReveal from './ClickToReveal';

interface CardBackProps {
  // onClick: () => void; // To handle flip from parent
}

const CardBack: React.FC<CardBackProps> = ({ /*onClick*/ }) => {
  // const currentDate = new Date().toLocaleDateString('en-US', {
  //   year: 'numeric', 
  //   month: 'long', 
  //   day: 'numeric' 
  // });

  return (
    <div 
      className="absolute inset-0 w-full h-full bg-[var(--background)] text-[var(--foreground)] rounded-lg backface-hidden transform rotate-y-180 overflow-y-auto p-6 md:p-8 shadow-lg"
      // onClick={onClick} // If click on back also triggers flip
    >
      <div className="prose prose-invert max-w-none">
        {/* Placeholder for all your current page content */}
        <h2 className="text-xl font-bold">About Me (Detailed)</h2>
        <p>This section will contain your intro, currently, occasionally, experience, photos, and social links.</p>
        <p>It will be scrollable if the content exceeds the card height.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
};

export default CardBack; 