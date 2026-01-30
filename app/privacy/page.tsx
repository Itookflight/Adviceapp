import "../policies.css";

const EFFECTIVE_DATE = "January 30, 2026";
const CONTACT_EMAIL = "support@adviceapp.net";
const APP_NAME = "AdVice";

export default function PrivacyPage() {
  return (
    <main className="page">
      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="brand">
            Ad<span>V</span>ice
          </div>
          <div className="h1">Privacy Policy</div>
          <div className="sub">
            Effective date: {EFFECTIVE_DATE}. This policy explains how AdVice
             collects, uses, and protects your information.
          </div>
        </div>

        {/* Intro */}
        <section className="card">
          <div className="h2">Overview</div>
          <p className="p">
            {APP_NAME} is a habit and vice and bad habit tracking application with optional
            community features and AI-powered guidance. The app is designed to be
            anonymous by default, and you control what information you choose to
            share.
          </p>
        </section>

        {/* Info collected */}
        <section className="card">
          <div className="h2">Information we collect</div>

          <p className="p">
            <b>Account information:</b> When you create an account, we collect an
            email address and a username. Your email address is used for account
            access and recovery and is not shown publicly.
          </p>

          <p className="p">
            <b>Habit and usage data:</b> Information you choose to provide such as
            habits or vices you track, goals, notes, triggers, logs, streaks, and
            timestamps.
          </p>

          <p className="p">
            <b>Community content (optional):</b> Posts, comments, reactions,
            reports, and interactions if you participate in community features.
          </p>

          <p className="p">
            <b>Technical information:</b> Limited device and app data such as
            crash reports or performance metrics to help us maintain and improve
            the service.
          </p>
        </section>

        {/* How used */}
        <section className="card">
          <div className="h2">How we use your information</div>
          <ul className="ul">
            <li>To create and manage your account.</li>
            <li>To save and sync your data within the app.</li>
            <li>To generate AI powered insights and guidance.</li>
            <li>To operate and moderate community features.</li>
            <li>To improve app reliability, performance, and safety.</li>
          </ul>
        </section>

        {/* AI */}
        <section className="card">
          <div className="h2">AI generated insights</div>
          <p className="p">
            {APP_NAME} offers AI generated suggestions based on information you
            provide. Only the minimum information necessary is used to generate
            these insights.
          </p>
          <p className="p">
            AI generated content is informational only and is not medical,
            psychological, or professional advice. You are responsible for how
            you choose to use it.
          </p>
        </section>

        {/* Sharing */}
        <section className="card">
          <div className="h2">Sharing of information</div>
          <ul className="ul">
            <li>We do not sell your personal information.</li>
            <li>Your email address is never displayed publicly.</li>
            <li>
              Content is shared with other users only when you choose to post or
              interact in the community.
            </li>
            <li>
              We may share limited information with trusted service providers
              solely to operate and support the app.
            </li>
            <li>
              Information may be disclosed if required by law or to protect users
              and the integrity of the service.
            </li>
          </ul>
        </section>

        {/* User controls */}
        <section className="card">
          <div className="h2">Your choices and controls</div>
          <ul className="ul">
            <li>You control what you share publicly.</li>
            <li>You can block or report other users.</li>
            <li>You may request account deletion at any time in the app.</li>
          </ul>
        </section>

        {/* Retention */}
        <section className="card">
          <div className="h2">Data retention</div>
          <p className="p">
            We retain your information while your account is active so the app
            can function properly. When you delete your account, we remove your
            data from our systems, subject to limited retention required for
            legal, security, or operational purposes.
          </p>
        </section>

        {/* Consent */}
        <section className="card">
          <div className="h2">Your Consent</div>
          <p className="p">
          By using the Adcie app, you consent to this privacy policy.
          </p>
        </section>

        {/* Changes */}
        <section className="card">
          <div className="h2">Changes to this policy</div>
          <p className="p">
            We may update this Privacy Policy from time to time. Updates will be
            reflected by changing the effective date above, These changes are effective immediately after they are posted on this page.
          </p>
        </section>

        {/* Contact */}
        <section className="card">
          <div className="h2">Contact</div>
          <p className="p">
            If you have questions about this policy or your data, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </section>

        <div className="footer">
          This privacy policy is provided for general informational purposes.
        </div>
      </div>
    </main>
  );
}
