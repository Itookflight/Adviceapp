// app/layout.tsx
import "./globals.css";
import "./policies.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adviceapp.net"),

  title: {
    default: "AdVice — Break Bad Habits. Build Self-Control.",
    template: "%s | AdVice",
  },

  description:
    "AdVice is an AI-powered app to break bad habits, track urges, and stop relapse cycles. Built for quitting alcohol, nicotine, vaping, and more — understand your triggers and rewire your behavior for good.",

  keywords: [
    "habit tracker",
    "break bad habits app",
    "self control app",
    "quit drinking app",
    "quit smoking tracker",
    "AI habit tracking",
    "urge tracking app",
    "relapse prevention app",
    "dopamine detox app",
    "sobriety tracker",
    "sobriety counter app",
    "addiction tracker app",
    "addiction recovery app",
    "stop drinking app",
    "alcohol addiction app",
    "nicotine addiction tracker",
    "quit vaping app",
    "stop smoking app",
    "sober app",
    "clean and sober tracker",
    "days sober counter",
    "craving tracker",
    "trigger tracker app",
    "stop cravings app",
    "urge surfing app",
    "habit urge log",
    "craving journal app",
    "dopamine reset app",
    "habit loop breaker",
    "behavior change app",
    "rewire habits app",
    "compulsive behavior tracker",
    "impulse control app",
    "quit alcohol app",
    "stop binge eating app",
    "quit weed app",
    "porn addiction tracker",
    "gambling addiction app",
    "caffeine addiction tracker",
    "social media addiction app",
    "how to stop bad habits",
    "app to quit drinking",
    "app to stop smoking",
    "help quitting alcohol",
    "overcome addiction app",
    "willpower app",
    "accountability app for habits",
    "streak tracker app",
  ],

  openGraph: {
    title: "AdVice — Break Bad Habits. Build Self-Control.",
    description:
      "AI-powered habit tracker for quitting alcohol, nicotine, vaping, and more. Track urges, understand triggers, and stop relapse cycles with AdVice.",
    url: "https://www.adviceapp.net",
    siteName: "AdVice",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "AdVice — Break Bad Habits. Build Self-Control.",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AdVice — Break Bad Habits. Build Self-Control.",
    description:
      "AI-powered habit tracker for quitting alcohol, nicotine, vaping, and more. Track urges, understand triggers, and stop relapse cycles with AdVice.",
    images: ["/og.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}