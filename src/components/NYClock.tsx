'use client';

import { useState, useEffect } from 'react';

export function NYClock() {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const nyTime = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}));
      
      // Format time (12-hour format with AM/PM)
      const timeString = nyTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'America/New_York'
      });
      
      // Format date
      const dateString = nyTime.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        timeZone: 'America/New_York'
      });
      
      setTime(timeString);
      setDate(dateString);
    };

    // Update immediately
    updateTime();
    
    // Update every second
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      display: 'inline-block',
      fontFamily: 'monospace',
      fontSize: '9pt',
      color: 'var(--text-secondary)',
      marginTop: '0.2rem'
    }}>
      <div style={{ fontWeight: 500 }}>{time}</div>
      <div style={{ fontSize: '8pt', opacity: 0.8 }}>{date}</div>
    </div>
  );
} 