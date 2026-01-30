import "./globals.css";
import "./policies.css";

export const metadata = {
  title: {
    default: "AdVice",
    template: "%s — AdVice",
  },
  description:
    "AdVice is a habit and vice-tracking app with optional community features and AI-powered insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
        {children}
      </body>
    </html>
  );
}
