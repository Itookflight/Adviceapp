import "./globals.css";
import "./policies.css";
import "./home.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: {
    default: "AdVice",
    template: "%s — AdVice",
  },
  description:
    "AdVice is a private, anonymous habit & vice-tracking app with AI-powered insights to help you break the loop and build self-control.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
