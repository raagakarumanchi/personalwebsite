'use client';

import { Suspense, lazy } from 'react';
import Link from 'next/link';

// Dynamic imports for client components with named exports
const AnimatedBackground = lazy(() => 
  import('../components/AnimatedBackground').then(mod => ({ default: mod.AnimatedBackground }))
);
const ScrollProgress = lazy(() => 
  import('../components/ScrollProgress').then(mod => ({ default: mod.ScrollProgress }))
);
const SocialLinks = lazy(() => 
  import('../components/SocialLinks').then(mod => ({ default: mod.SocialLinks }))
);

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollProgress />
      </Suspense>
      
      <Suspense fallback={null}>
        <AnimatedBackground />
      </Suspense>
      
      <main className="animate-fade-in" style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <h1 style={{ textAlign: 'left' }}>hi! i'm raaga karumanchi 🪐</h1>
        
        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem' }}>
          twenty. i was born and raised in the san francisco bay area. i've lived in india, and nyc before i was 5. currently, i live in nyc. I like to sidequest and dive into rabbit holes. interested in health tech, global health, and neuroscience.
        </p>
        <div className="section-columns">
          <div>
            <h2>currently</h2>
            <ul>
              <li className="item">
                <span className="item-number">01</span>
                Founder & Executive Director @ Donate Essentials
              </li>
              <li className="item">
                <span className="item-number">02</span>
                Studying Neuroscience @ Barnard
              </li>
              <li className="item">
                <span className="item-number">03</span>
                Research Assistant @ UCSF
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
                Volunteer at Women's Health Clinic
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
            <h3>connect</h3>
            <Suspense fallback={<div>Loading social links...</div>}>
              <SocialLinks />
            </Suspense>
          </div>
          
          <div>
            <h3>location</h3>
            <p>New York City, NY</p>
            <p>San Francisco Bay Area, CA</p>
          </div>

          <div>
            <h3>contact</h3>
            <p>
              <a href="mailto:rk3373@barnard.edu">rk3373@barnard.edu</a>
            </p>
            <p className="text-sm opacity-75">
              Last updated: May 2024
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
