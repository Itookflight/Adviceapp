// app/page.tsx
import Image from "next/image";

const APPSTORE_URL =
  "https://apps.apple.com/us/app/advice-break-bad-habits/id6758634959";

export default function Home() {
  return (
    <main className="joi3">
      {/* Top Nav */}
      <header className="joi3Nav">
        <div className="joi3NavInner">
          <div className="joi3Brand">
            Ad<span>V</span>ice
          </div>

          <a className="joi3TopBtn" href={APPSTORE_URL} target="_blank" rel="noreferrer">
          <img src="/apple.svg" alt="" className="joi3Apple" />
            Download for iOS
          </a>
        </div>
      </header>

      {/* Hero (Centered like Joi) */}
      <section className="joi3Hero">
        <div className="joi3HeroInner">
          <h1 className="joi3H1">
            Break bad
            <br />
            habits.
            <br />
            Build self-
            <br />
            control.
          </h1>

          <a className="joi3MainBtn" href={APPSTORE_URL} target="_blank" rel="noreferrer">
          <img src="/apple.svg" alt="" className="joi3Apple" />
            Download for iOS
          </a>

          <div className="joi3PhoneWrap">
            <div className="joi3Glow" />
            <Image
              src="/phone.png"
              alt="AdVice app preview"
              width={520}
              height={1040}
              priority
              className="joi3Phone"
            />
          </div>

          {/* Description moved BELOW image */}
          <p className="joi3Sub">
            A Habit and Vice tracking app built for people who not only want to break and quit 
            bad habits but understand them. The #1 Habit and Vice breaking app.
          </p>
        </div>
      </section>

      {/* Footer (like Joi: centered stack) */}
      <footer className="joi3Footer">
        <div className="joi3FooterInner">
          <div className="joi3FootBrand">AdVice</div>

          <div className="joi3FootLinks">
            <a href={APPSTORE_URL} target="_blank" rel="noreferrer">
              App Store
            </a>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy policy</a>
          </div>

          <div className="joi3FootCrafted">2025 AdVice</div>
        </div>
      </footer>
    </main>
  );
}