import "../policies.css";
import type { Metadata } from "next";

const EFFECTIVE_DATE = "January 30, 2026";
const CONTACT_EMAIL = "support@adviceapp.net";
const APP_NAME = "AdVice";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how AdVice collects, uses, and protects your information.",
};


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
            {APP_NAME} is a habit and behavior tracking application with optional
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
  <b>Usage and technical information:</b> We may collect information about how
  you use the app (such as feature usage, session activity, and interactions
  with AI suggestions) and limited technical data (such as device model, OS
  version, app version, IP address, and crash/diagnostic data) to operate,
  secure, and improve the service.
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
            <li>Process payments for premium features (if applicable).</li>
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

        {/* Data Security */}
        <section className="card">
          <div className="h2">Data Security</div>
          <p className="p">
  We implement reasonable administrative, technical, and organizational
  safeguards designed to protect your information against unauthorized access,
  loss, misuse, or alteration. However, no method of transmission over the
  internet or method of electronic storage is completely secure, and we cannot
  guarantee absolute security.
</p>

        </section>

            {/* Childrens privacy */}
        <section className="card">
          <div className="h2">Children's Privacy</div>
          <p className="p">
  AdVice is not directed to individuals under the age of 17. We do not knowingly
  collect, use, or disclose personal information from individuals under 17. If
  we become aware that we have collected personal information from an individual
  under 17, we will take reasonable steps to delete it.
</p>

        </section>
        

        {/* Consent */}
<section className="card">
  <div className="h2">Your Consent</div>
  <p className="p">
    By using the AdVice app, you acknowledge that you have read and understood
    this Privacy Policy and consent to the collection, use, and processing of
    your information as described herein.
  </p>
  <p className="p">
    You must be at least 17 years of age to use the Services. By accessing or
    using the Services, you represent and warrant that you meet this age
    requirement.
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
        
    {/* 3rd party */}
        <section className="card">
          <div className="h2">Third-Party Services</div>
          <p className="p">
            AdVice may use third-party service providers to support the operation and functionality of the Services, such as cloud hosting, data processing, analytics, content moderation, payments, customer support and more. These service providers may process information on our behalf solely for the purpose of providing their services to AdVice and in accordance with our instructions.
We require third-party service providers to implement appropriate safeguards to protect your information and to use it only as necessary to perform their services. The handling of information by such third parties is governed by their respective privacy policies, and AdVice is not responsible for the privacy practices of these third-party services.
          </p>
        </section>

        <section className="card">
  <div className="h2">Data Used for Tracking</div>
  <p className="p">
    AdVice does not use personal data to track users across apps or websites
    owned by other companies for advertising or marketing purposes.
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
