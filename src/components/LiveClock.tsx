'use client';

import { useState, useEffect } from 'react';

const options = {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
} as const;

const LiveClock = () => {
  const [time, setTime] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Set initial time
    setTime(new Date().toLocaleTimeString('en-US', options));
    
    // Update time every second
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', options));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Don't render anything until component is mounted on client
  if (!mounted) return <span>Loading...</span>;

  return <span className="live-clock">{time}</span>;
};

export default LiveClock; 