'use client';

import { Suspense, lazy } from 'react';

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
      
      <main className="animate-fade-in" style={{ maxWidth: 900, margin: '0 auto', padding: '1.2rem 0.8rem 2rem', fontSize: '9pt' }}>
        <h1 style={{ textAlign: 'left', fontSize: '2.5rem', marginBottom: '0.7rem' }}>hi! i&apos;m raaga karumanchi 🪐</h1>
        
        <p style={{ fontSize: '9pt', fontStyle: 'italic', marginBottom: '2rem' }}>
          Twenty. I was born and raised in the San Francisco Bay Area. Currently, I live in NYC. I enjoy exploring side quests and delving into rabbit holes. Interested in health/biotech, global health, and neuroscience.
        </p>
        <div className="section-columns" style={{ gap: '2rem', marginBottom: '1rem' }}>
          <div>
            <h2 style={{ marginBottom: '0.4rem' }}>currently</h2>
            <ul>
              <li className="item" id="currently-item-1-final">
                <span className="item-number">01</span>
                Founder &amp; Executive Director @ Donate Essentials
              </li>
              <li className="item" id="currently-item-2-final">
                <span className="item-number">02</span>
                Student @ Barnard College
              </li>
              <li className="item" id="currently-item-3-final">
                <span className="item-number">03</span>
                Research Assistant @ UCSF
              </li>
              <li className="item" id="currently-item-4-final">
                <span className="item-number">04</span>
                Research Assistant @ Columbia University Medical Center
              </li>
            </ul>
          </div>
          <div>
            <h2 style={{ marginBottom: '0.4rem' }}>previously</h2>
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
                Volunteer at Women&apos;s Health Clinic
              </li>
            </ul>
          </div>
        </div>

        <div className="photo-grid">
          <img src="/amusement_park.jpeg" alt="Amusement Park" />
          <img src="/snowy_day.jpeg" alt="Snowy Day" />
          <img src="/baby_photo.jpeg" alt="Baby Photo" />
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
            <p style={{ marginTop: '1.2rem' }}>
              <a
                href="/vibes"
                style={{
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  borderBottom: '2px solid var(--accent)',
                  paddingBottom: '2px',
                  fontWeight: 500,
                  fontSize: '9pt',
                  transition: 'border-color 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.borderColor = 'var(--accent-hover)')}
                onMouseOut={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              >
                favorites
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
