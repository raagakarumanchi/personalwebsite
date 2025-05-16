'use client';

import React, { useState, useEffect } from 'react';

interface LiveTimeProps {
  timezone: string;
  label?: string; // Optional label like 'nyc' or 'sf bay area'
  showTimezone?: boolean; // Optional: to show (PST) or (EST)
}

const LiveTime: React.FC<LiveTimeProps> = ({ timezone, label, showTimezone }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit', // Adding seconds can make it look a bit busy
        hour12: true,
        timeZone: timezone,
      };
      let formattedTime = now.toLocaleTimeString('en-US', options);

      if (showTimezone) {
        const tzShort = now.toLocaleTimeString('en-US', { timeZoneName:'short', timeZone: timezone }).split(' ').pop();
        formattedTime = `${formattedTime} ${tzShort}`;
      }
      
      setTime(formattedTime);
    };

    updateClock(); // Initial call to set time immediately
    const intervalId = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [timezone, showTimezone]);

  return (
    <span className="lowercase">
      {label && <span className="mr-1">{label}</span>}
      {time}
    </span>
  );
};

export default LiveTime; 