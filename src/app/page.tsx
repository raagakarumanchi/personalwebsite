'use client';

import { Suspense, lazy } from 'react';
import { motion } from "framer-motion";

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
      
      <motion.main
        className="animate-fade-in"
        style={{ maxWidth: 900, margin: '0 auto', padding: '1.2rem 0.8rem 2rem', fontSize: '9pt' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          style={{ textAlign: 'left', fontSize: '14pt', marginBottom: '0.7rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          hi! i&apos;m raaga karumanchi 🪐
        </motion.h1>
        
        <motion.p
          style={{ fontSize: '9pt', fontStyle: 'italic', marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          Twenty. I was born and raised in the San Francisco Bay Area. Currently, I live in NYC. I enjoy exploring side quests and delving into rabbit holes. Interested in health/biotech, global health, and neuroscience.
        </motion.p>
        <div className="section-columns" style={{ gap: '2rem', marginBottom: '1rem' }}>
          <div>
            <h2 style={{ marginBottom: '0.4rem' }}>currently</h2>
            <ul>
              <motion.li className="item" id="currently-item-1-final" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <span className="item-number">01</span>
                Founder &amp; Executive Director @ Donate Essentials
              </motion.li>
              <motion.li className="item" id="currently-item-2-final" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <span className="item-number">02</span>
                Student @ Barnard College
              </motion.li>
              <motion.li className="item" id="currently-item-3-final" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <span className="item-number">03</span>
                Research @ UCSF
              </motion.li>
              <motion.li className="item" id="currently-item-4-final" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <span className="item-number">04</span>
                Research @ Columbia University Medical Center
              </motion.li>
            </ul>
          </div>
          <div>
            <h2 style={{ marginBottom: '0.4rem' }}>previously</h2>
            <ul>
              <motion.li className="item" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <span className="item-number">01</span>
                Research @ NIH All of Us Research Scholar Program
              </motion.li>
              <motion.li className="item" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <span className="item-number">02</span>
                Research @ UCSF Center for Cerebrovascular Research
              </motion.li>
              <motion.li className="item" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <span className="item-number">03</span>
                Volunteer @ Women&apos;s Health Clinic
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="photo-grid">
          <img src="/amusement_park.jpeg" alt="Amusement Park" style={{ width: '220px', height: '110px', objectFit: 'cover', borderRadius: '10px' }} />
          <img src="/snowy_day.jpeg" alt="Snowy Day" style={{ width: '220px', height: '110px', objectFit: 'cover', borderRadius: '10px' }} />
        </div>

        <footer style={{ zIndex: 1, position: 'relative' }}>
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
                href="/favorites"
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
      </motion.main>
    </>
  );
}
