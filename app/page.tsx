export default function Home() {
  return (
    <main className="page">
      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="brand">
            Ad<span>V</span>ice
          </div>
          <div className="h1">Break habits. Build control.</div>
          <div className="sub">
            AdVice is a private, anonymous habit & vice-tracking app with AI-powered insights.
          </div>
        </div>

        {/* Card */}
        <section className="card">
          <div className="h2">What is AdVice?</div>
          <p className="p">
            AdVice helps you track habits and vices, understand patterns, and stay accountable —
            without shame, social pressure, or exposing personal information.
          </p>
          <ul className="ul">
            <li>Anonymous by default</li>
            <li>AI-generated daily focus & insights</li>
            <li>Optional community support</li>
            <li>No email or identity shown publicly</li>
          </ul>
        </section>

        {/* Links */}
        <section className="card">
          <div className="h2">Legal</div>
          <p className="p">
            Read our policies below:
          </p>
          <ul className="ul">
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <div className="footer">
          © {new Date().getFullYear()} AdVice. All rights reserved.
        </div>
      </div>
    </main>
  );
}
