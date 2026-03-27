// app/page.tsx
"use client";

import Image from "next/image";

const APPSTORE_URL = "https://adviceapp.onelink.me/mg8p/yqvaexiy";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

function trackAppStoreClick(location: string) {
  if (typeof window !== "undefined") {
    window.gtag?.("event", "app_store_click", {
      event_category: "engagement",
      event_label: location,
      destination: APPSTORE_URL,
    });
    window.fbq?.("trackCustom", "AppStoreClick", {
      location,
      destination: APPSTORE_URL,
    });
  }
}

const AppleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 814 1000" fill="currentColor">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.4-57.2-155.5-127.4C46.7 790.7 0 663 0 541.8c0-194.3 127.4-297.5 252.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
  </svg>
);

export default function Home() {
  return (
    <main className="av-page">

      {/* NAV */}
      <header className="av-nav">
        <div className="av-nav-inner">
          <div className="av-brand">Ad<span>V</span>ice</div>
          <a
            className="av-nav-btn"
            href={APPSTORE_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackAppStoreClick("top_nav")}
          >
            <AppleIcon className="av-apple" />
            Download for iOS
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="av-hero-wrap">
        <div className="av-hero-glow" />
        <div className="av-hero-glow av-hero-glow-2" />
        <div className="av-hero">

          {/* LEFT */}
          <div className="av-hero-left">
            <div className="av-eyebrow av-anim av-anim-1">
              <span className="av-eyebrow-dot" />
              Habit intelligence
            </div>

            <h1 className="av-h1">
              <span className="av-h1-line av-anim av-anim-2">Break</span>
              <span className="av-h1-line av-anim av-anim-3">
                bad <em className="av-red">habits.</em>
              </span>
              <span className="av-h1-line av-anim av-anim-4 av-dim">
                For good.
              </span>
            </h1>

            <p className="av-sub av-anim av-anim-5">
              AdVice goes beyond streaks — it tracks your urges, identifies
              triggers, and gives you an Personalized plan to actually understand why you
              slip. Built for quitting ANY Bad Habit like alcohol, nicotine, Porn, Overeating, Procastination and more.
            </p>

            <div className="av-cta-row av-anim av-anim-6">
              <a
                className="av-cta-primary"
                href={APPSTORE_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackAppStoreClick("hero_cta")}
              >
                <AppleIcon className="av-apple av-apple-dark" />
                Download for iOS — Free
              </a>
              <span className="av-cta-ghost">See how it works ↓</span>
            </div>

            <div className="av-stats av-anim av-anim-7">
              <div className="av-stat">
                <div className="av-stat-num"><em>#1</em></div>
                <div className="av-stat-label">Habit breaking app</div>
              </div>
              <div className="av-stat-div" />
              <div className="av-stat">
                <div className="av-stat-num">10<em>k+</em></div>
                <div className="av-stat-label">Habits broken</div>
              </div>
              <div className="av-stat-div" />
              <div className="av-stat">
                <div className="av-stat-num"><em>AI</em></div>
                <div className="av-stat-label">Personalized plans</div>
              </div>
            </div>
          </div>

          {/* RIGHT — phone */}
          <div className="av-phone-wrap av-anim av-anim-3">
            <div className="av-phone-glow" />
            <Image
              src="/phone.png"
              alt="AdVice app preview"
              width={520}
              height={1040}
              priority
              className="av-phone"
            />
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="av-features">
        <div className="av-features-inner">
          <div className="av-section-label">What makes AdVice different</div>
          <div className="av-feat-grid">

            <div className="av-feat">
              <div className="av-feat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2.05V4.07C16.94 4.56 20 7.92 20 12C20 16.08 16.94 19.44 13 19.93V21.95C18.05 21.44 22 17.18 22 12C22 6.82 18.05 2.56 13 2.05M11 2.05C9.05 2.28 7.22 3.08 5.76 4.32L7.18 5.74C8.28 4.83 9.61 4.22 11 4.07V2.05M4.32 5.76C3.08 7.22 2.28 9.05 2.05 11H4.07C4.22 9.61 4.83 8.28 5.74 7.18L4.32 5.76M2.05 13C2.28 14.95 3.08 16.78 4.32 18.24L5.74 16.82C4.83 15.72 4.22 14.39 4.07 13H2.05M7.18 18.26L5.76 19.68C7.22 20.92 9.05 21.72 11 21.95V19.93C9.61 19.78 8.28 19.17 7.18 18.26M12 7L10.5 10.5L7 12L10.5 13.5L12 17L13.5 13.5L17 12L13.5 10.5L12 7Z" />
                </svg>
              </div>
              <div className="av-feat-title">Streak tracking</div>
              <div className="av-feat-desc">Visual momentum. Every clean day counted.</div>
            </div>

            <div className="av-feat">
              <div className="av-feat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div className="av-feat-title">Trigger journal</div>
              <div className="av-feat-desc">Log urges. Spot patterns. Stop the cycle.</div>
            </div>

            <div className="av-feat">
              <div className="av-feat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                </svg>
              </div>
              <div className="av-feat-title">AI insights</div>
              <div className="av-feat-desc">Personalized plans built from your data.</div>
            </div>

            <div className="av-feat">
              <div className="av-feat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <div className="av-feat-title">Anonymous community</div>
              <div className="av-feat-desc">Real support. Zero judgment.</div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="av-footer">
        <div className="av-footer-inner">
          <div className="av-foot-brand">Ad<span>V</span>ice</div>
          <div className="av-foot-links">
            <a
              href={APPSTORE_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackAppStoreClick("footer_link")}
            >
              App Store
            </a>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy policy</a>
          </div>
          <div className="av-foot-copy">© 2025 AdVice</div>
        </div>
      </footer>

    </main>
  );
}
