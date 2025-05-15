'use client';

import React, { useState, useEffect } from 'react';

interface LiveTimeProps {
  timezone: string;
}

const LiveTime: React.FC<LiveTimeProps> = ({ timezone }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setTime(timeString);
    };

    updateClock(); // Initial call to set time immediately
    const intervalId = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [timezone]);

  return (
    <span className="font-mono text-sm text-white/80">
      {time}
    </span>
  );
};

export default LiveTime; 