// app/page.tsx
const APPSTORE_URL =
  "https://apps.apple.com/us/app/advice-break-bad-habits/id6758634959";

export default function Home() {
  return (
    <main className="page">
      <header className="nav">
        <div className="container navInner">
          <div className="brand">
            Ad<span>V</span>ice
          </div>

          <div className="navLinks">
            <a className="navLink" href="#features">
              Features
            </a>
            <a className="navLink" href="#privacy">
              Privacy
            </a>
            <a className="navLink" href="#faq">
              FAQ
            </a>
            <a className="btn btnSm" href={APPSTORE_URL} target="_blank" rel="noreferrer">
              Download
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container heroGrid">
          <div>
            <div className="pill">Private • Anonymous • AI-powered</div>
            <h1 className="h1">
              Break habits.
              <br />
              <span className="accent">Build control.</span>
            </h1>
            <p className="sub">
              AdVice helps you understand triggers, track urges, and stop relapse windows before
              they start — without shame, pressure, or exposing your identity.
            </p>

            <div className="ctaRow">
              <a className="btn" href={APPSTORE_URL} target="_blank" rel="noreferrer">
                Download on the App Store
              </a>
              <a className="ghost" href="#features">
                See what you get →
              </a>
            </div>

            <div className="metaRow">
              <div className="meta">
                <div className="metaNum">Anonymous</div>
                <div className="metaTxt">by default</div>
              </div>
              <div className="meta">
                <div className="metaNum">AI</div>
                <div className="metaTxt">insights + focus</div>
              </div>
              <div className="meta">
                <div className="metaNum">Urges</div>
                <div className="metaTxt">patterns + intensity</div>
              </div>
            </div>
          </div>

          {/* Right “device” mock */}
          <div className="mock">
            <div className="mockGlow" />
            <div className="mockCard">
              <div className="mockTop">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>

              <div className="mockTitle">Today’s Focus</div>
              <div className="mockSub">Protect your highest-risk window.</div>

              <div className="mockBox">
                <div className="mockLabel">High-risk</div>
                <div className="mockLine">Late Night • Stress</div>
              </div>

              <div className="mockBox">
                <div className="mockLabel">Replacement Action</div>
                <div className="mockLine">Change rooms. Drink water. 3 minutes.</div>
              </div>

              <div className="mockBar">
                <div className="mockBarFill" />
              </div>

              <div className="mockFoot">Urge logging → patterns → control</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="container">
          <h2 className="h2">What you get</h2>
          <p className="p">
            Built for real behavior change: track the loop, spot the pattern, interrupt the moment.
          </p>

          <div className="grid">
            <div className="card">
              <div className="cardTitle">Vices + Custom Habits</div>
              <div className="cardText">
                Pick common vices or create your own. Quit completely or reduce gradually.
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">High-Risk Windows</div>
              <div className="cardText">
                Mark late night, boredom, stress, weekends — and get smarter reminders.
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">Urge Logging</div>
              <div className="cardText">
                Log urges in real-time with mood + intensity so patterns become obvious.
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">AI Insights</div>
              <div className="cardText">
                Personalized focus, replacement actions, and micro plans based on your data.
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">Anonymous Community</div>
              <div className="cardText">
                Support without identity exposure. No shame, no pressure — just progress.
              </div>
            </div>
            <div className="card">
              <div className="cardTitle">Clean Progress Tracking</div>
              <div className="cardText">
                Days clean, best streak, and momentum — designed to keep you locked in.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="privacy" className="section soft">
        <div className="container split">
          <div>
            <h2 className="h2">Private by design</h2>
            <p className="p">
              AdVice is built to help you improve without feeling exposed. Anonymous mode is on by
              default — and you control what’s shared.
            </p>

            <ul className="list">
              <li>Anonymous by default</li>
              <li>No public email or identity</li>
              <li>Control what shows on posts/profile</li>
              <li>Clear policies and simple settings</li>
            </ul>

            <div className="ctaRow">
              <a className="btn btnOutline" href="/privacy">
                Privacy Policy
              </a>
              <a className="btn btnOutline" href="/terms">
                Terms (EULA)
              </a>
            </div>
          </div>

          <div className="privacyCard">
            <div className="privacyTitle">Subscription info (in-app)</div>
            <div className="privacyText">
              Auto-renewable subscriptions. Cancel anytime in App Store settings. Terms + Privacy
              linked in-app and on this site.
            </div>
            <div className="privacyHint">
              Tip: Keep your App Store listing aligned with what your paywall shows.
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container">
          <h2 className="h2">FAQ</h2>
          <div className="faq">
            <details className="faqItem">
              <summary>Is AdVice anonymous?</summary>
              <p>
                Yes — anonymous mode is on by default. You control what’s visible on your profile
                and posts.
              </p>
            </details>

            <details className="faqItem">
              <summary>Does it work without community?</summary>
              <p>
                Yep. Tracking, urges, focus, and insights work even if you never post anything.
              </p>
            </details>

            <details className="faqItem">
              <summary>Where do I manage my subscription?</summary>
              <p>
                In your Apple ID subscriptions settings. Subscriptions auto-renew unless canceled
                at least 24 hours before renewal.
              </p>
            </details>
          </div>

          <div className="centerCta">
            <a className="btn" href={APPSTORE_URL} target="_blank" rel="noreferrer">
              Download on the App Store
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footBrand">© {new Date().getFullYear()} AdVice</div>
          <div className="footLinks">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href={APPSTORE_URL} target="_blank" rel="noreferrer">
              App Store
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
