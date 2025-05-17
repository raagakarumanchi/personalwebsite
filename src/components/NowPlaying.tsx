'use client';

import { useState, useEffect } from 'react';
import { Music } from 'lucide-react';

interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  albumArtUrl: string;
  trackUrl: string;
  isPlaying: boolean;
}

export const NowPlaying = () => {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        // Replace with your actual Spotify API endpoint
        const response = await fetch('/api/spotify');
        const data = await response.json();

        if (data.isPlaying) {
          setTrack({
            name: data.name,
            artist: data.artist,
            album: data.album,
            albumArtUrl: data.albumArtUrl,
            trackUrl: data.trackUrl,
            isPlaying: true
          });
        } else {
          setTrack(null);
        }
      } catch (err) {
        setError('Failed to fetch current track');
        console.error('Error fetching Spotify data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="now-playing loading">
        <Music size={16} />
        <span>Loading...</span>
      </div>
    );
  }

  if (error) {
    return null; // Don't show anything if there's an error
  }

  if (!track) {
    return (
      <div className="now-playing">
        <Music size={16} />
        <span>Not playing anything</span>
      </div>
    );
  }

  return (
    <a
      href={track.trackUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="now-playing active"
    >
      <div className="now-playing-content">
        <img
          src={track.albumArtUrl}
          alt={`${track.album} album art`}
          className="album-art"
        />
        <div className="track-info">
          <div className="track-name">{track.name}</div>
          <div className="track-artist">{track.artist}</div>
        </div>
      </div>
      <div className="now-playing-bar">
        <div className="now-playing-bar-inner" />
      </div>
    </a>
  );
}; 