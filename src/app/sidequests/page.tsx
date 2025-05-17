import Link from 'next/link';

export default function Sidequests() {
  return (
    <main className="animate-fade-in" style={{ maxWidth: 680, margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
      <h1 style={{ fontFamily: 'Amiri, serif', fontWeight: 400, fontStyle: 'italic', fontSize: 42, textAlign: 'center', marginBottom: '2rem' }}>
        sidequests ✨
      </h1>
      <ul>
        <li className="item">
          <span className="item-number">01</span>
          Book: "Maladies of Empire"
        </li>
        <li className="item">
          <span className="item-number">02</span>
          Movies: K3G, Titanic, Dookudu, Top Gun: Maverick
        </li>
        <li className="item">
          <span className="item-number">03</span>
          Store: Whole Foods
        </li>
        <li className="item">
          <span className="item-number">04</span>
          Painting & Creative Arts
        </li>
      </ul>
      <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
        <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>← Back to home</Link>
      </div>
    </main>
  );
} 