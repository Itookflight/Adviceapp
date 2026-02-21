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
    "Break bad habits and build self-control with AdVice — an AI-powered habit tracker that helps you understand triggers, track urges, and prevent relapse cycles.",

  keywords: [
    "habit tracker",
    "break bad habits app",
    "vice tracker",
    "self control app",
    "quit drinking app",
    "quit smoking tracker",
    "quit alcohol",
    "dopamine detox app",
    "AI habit tracking",
    "urge tracking app",
    "relapse prevention app",
  ],

  openGraph: {
    title: "AdVice — Break Bad Habits. Build Self-Control.",
    description:
      "Break bad habits and build self-control with AdVice — an AI-powered habit tracker that helps you understand triggers, track urges, and prevent relapse cycles.",
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
      "Break bad habits and build self-control with AdVice — an AI-powered habit tracker that helps you understand triggers, track urges, and prevent relapse cycles.",
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
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}