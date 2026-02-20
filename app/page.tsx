// app/page.tsx
const APPSTORE_URL =
  "https://apps.apple.com/us/app/advice-break-bad-habits/id6758634959";

export default function Home() {
  return (
    <main className="wrap">
      <header className="top">
        <div className="brand">
          Ad<span>V</span>ice
        </div>

        <nav className="nav">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a className="btn" href={APPSTORE_URL} target="_blank" rel="noreferrer">
            Download
          </a>
        </nav>
      </header>

      <section className="hero">
        <h1>
          Break bad habits.
          <br />
          Build self-control.
        </h1>

        <p className="sub">
          Private, anonymous vice tracking with AI-powered insights to help you understand triggers,
          track urges, and stop relapse windows before they start.
        </p>

        <div className="cta">
          <a className="btn big" href={APPSTORE_URL} target="_blank" rel="noreferrer">
            Download on the App Store
          </a>
          <a className="link" href="#what">
            What you get →
          </a>
        </div>
      </section>

      <section id="what" className="section">
        <h2>What you get</h2>
        <ul className="bullets">
          <li>Track vices + custom habits (quit or reduce)</li>
          <li>High-risk windows (late night, stress, weekends)</li>
          <li>Real-time urge logging (mood + intensity)</li>
          <li>AI focus, replacement actions, and micro-plans</li>
          <li>Anonymous community (optional)</li>
        </ul>
      </section>

      <section className="section note">
        <h2>Privacy first</h2>
        <p>
          Anonymous by default. No public email or identity shown. You control what’s visible.
        </p>

        <div className="miniLinks">
          <a href="/privacy">Privacy Policy</a>
          <span className="dot">•</span>
          <a href="/terms">Terms (EULA)</a>
        </div>
      </section>

      <footer className="foot">
        <div>© {new Date().getFullYear()} AdVice</div>
        <a href={APPSTORE_URL} target="_blank" rel="noreferrer">
          App Store
        </a>
      </footer>
    </main>
  );
}
