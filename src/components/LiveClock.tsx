'use client';

import { useState, useEffect } from 'react';

interface LiveClockProps {
  timeZone: string;
  className?: string;
}

const LiveClock: React.FC<LiveClockProps> = ({ timeZone, className }) => {
  const [time, setTime] = useState<string>('--:--:--');

  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: timeZone,
        hour12: true, // Or false if you prefer 24-hour format
      };
      setTime(new Date().toLocaleTimeString('en-US', options));
    };

    updateClock(); // Initial call to display time immediately
    const intervalId = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [timeZone]);

  return (
    <div className={className} style={{ color: 'var(--text)' }}>
      {time}
    </div>
  );
};

export default LiveClock; 