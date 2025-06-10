import React from 'react';

export default function Vibes() {
  return (
    <main className="animate-fade-in" style={{ maxWidth: 680, margin: '0 auto', padding: '2rem 1.5rem 4rem', fontSize: '9pt', textAlign: 'left' }}>
      <h1 style={{ fontFamily: 'Amiri, serif', fontWeight: 400, fontStyle: 'italic', fontSize: '1.2rem', textAlign: 'left', margin: '0 0 1.2rem 0', letterSpacing: '0.01em', width: 'fit-content' }}>
        favorites:
      </h1>

      <section style={{ marginBottom: '0.7rem' }}>
        <h2 style={{ fontSize: '1rem', color: 'var(--accent)', marginBottom: '0.3rem' }}>fav reads 📚</h2>
        <ul style={{ marginLeft: '1.2rem' }}>
          <li>when breath becomes air by paul kalanithi</li>
          <li>incognito: the secret lives of the brain by david eagleman</li>
          <li>the creative act: a way of being by rick rubin</li>
        </ul>
      </section>

      <section style={{ marginBottom: '0.7rem' }}>
        <h2 style={{ fontSize: '1rem', color: 'var(--accent)', marginBottom: '0.3rem' }}>fav watches 🎬</h2>
        <ul style={{ marginLeft: '1.2rem' }}>
          <li>kabhi kushi kabhi gham</li>
          <li>top gun: maverick &amp; top gun</li>
          <li>oppenheimer</li>
          <li>parasite</li>
        </ul>
      </section>

      <section style={{ marginBottom: '0.7rem' }}>
        <h2 style={{ fontSize: '1rem', color: 'var(--accent)', marginBottom: '0.3rem' }}>fav quotes</h2>
        <ul style={{ marginLeft: '1.2rem' }}>
          <li>"take your work seriously, never yourself" - hubert humphrey</li>
          <li>"speed is a feature&quot; - paul graham</li>
          <li>"if it&apos;s worth doing, it&apos;s worth doing well&quot; - lord chesterfield</li>
          <li>"courage is knowing what not to fear&quot; — plato</li>
        </ul>
      </section>

      <section style={{ marginBottom: '0.7rem' }}>
        <h2 style={{ fontSize: '1rem', color: 'var(--accent)', marginBottom: '0.3rem' }}>inspirations ✨</h2>
        <ul style={{ marginLeft: '1.2rem' }}>
          <li><strong>rosalind franklin</strong> - pioneering x-ray crystallographer who discovered DNA's double helix structure</li>
          <li><strong>malala yousafzai</strong> - nobel peace prize laureate and advocate for girls' education</li>
          <li><strong>steve jobs</strong> - visionary entrepreneur who revolutionized technology and design</li>
          <li><strong>fei-fei li</strong> - leading AI researcher and advocate for ethical artificial intelligence</li>
          <li><strong>jacinda ardern</strong> - former prime minister of new zealand known for compassionate leadership</li>
          <li><strong>atul gawande</strong> - surgeon, writer, and public health researcher improving healthcare systems</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: '1rem', color: 'var(--accent)', marginBottom: '0.3rem' }}>mini dopamine boosts</h2>
        <ul style={{ marginLeft: '1.2rem' }}>
          <li>hitting a perfect NYC subway transfer</li>
          <li>strawberry matcha lattes</li>
        </ul>
      </section>
    </main>
  );
} 