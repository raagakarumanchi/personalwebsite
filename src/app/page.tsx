'use client';

import { ThemeToggle } from '../components/ThemeToggle';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { ScrollProgress } from '../components/ScrollProgress';
import { SocialLinks } from '../components/SocialLinks';
import LiveClock from '../components/LiveClock';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <AnimatedBackground />
      <ThemeToggle />
      
      <main className="animate-fade-in" style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <h1 style={{ textAlign: 'left' }}>hi! i'm raaga karumanchi 🪐</h1>
        
        <div className="section-columns">
          <div>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem' }}>
              twenty. i was born and raised in the san francisco bay area. i've also lived in india, and nyc all before i was 5. currently, i live in nyc. i like to sidequest & dive into rabbitholes. interested in healthtech, global health, and neuroscience.
            </p>
            <Link href="/sidequests" style={{ color: 'var(--accent)', textDecoration: 'underline', fontSize: '1rem', display: 'inline-block', marginBottom: '1.5rem' }}>→ hobbies</Link>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.1rem', margin: '1.5rem 0 0.5rem' }}>Favorites</h3>
              <ul style={{ fontSize: '1rem', opacity: 0.9, paddingLeft: '1.2em' }}>
                <li>Favorite Book: (add your favorite book here)</li>
                <li>Favorite Movie: (add your favorite movie here)</li>
                <li>Favorite Food: (add your favorite food here)</li>
                <li>Favorite Place: (add your favorite place here)</li>
              </ul>
            </div>
          </div>
          <div>
            <h2>currently</h2>
            <ul>
              <li className="item">
                <span className="item-number">01</span>
                Research Assistant @ UCSF
              </li>
              <li className="item">
                <span className="item-number">02</span>
                Founder & Executive Director @ Donate Essentials
              </li>
              <li className="item">
                <span className="item-number">03</span>
                Black Belt in Taekwondo
              </li>
              <li className="item">
                <span className="item-number">04</span>
                Research Assistant @ Columbia University Medical Center
              </li>
            </ul>
          </div>
          <div>
            <h2>previously</h2>
            <ul>
              <li className="item">
                <span className="item-number">01</span>
                Research @ NIH All of Us Research Scholar Program
              </li>
              <li className="item">
                <span className="item-number">02</span>
                Research @ UCSF Center for Cerebrovascular Research
              </li>
              <li className="item">
                <span className="item-number">03</span>
                Neuroscience Club Leadership
              </li>
            </ul>
          </div>
        </div>

        <h2>photos</h2>
        <div className="photo-grid">
          <img src="/amusement_park.jpeg" alt="Amusement Park" />
          <img src="/snowy_day.jpeg" alt="Snowy Day" />
          <img src="/baby_photo.jpeg" alt="Baby Photo" />
          <img src="/dad_and_me.jpeg" alt="Dad and Me" />
        </div>

        <footer>
          <div>
            <h3>Connect</h3>
            <SocialLinks />
          </div>
          
          <div>
            <h3>Location</h3>
            <p>New York City, NY</p>
            <p>Barnard College of Columbia University</p>
            <p>San Francisco Bay Area, CA</p>
          </div>

          <div>
            <h3>Contact</h3>
            <p>
              <a href="mailto:rk3373@barnard.edu">rk3373@barnard.edu</a>
            </p>
            <p className="text-sm opacity-75">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
