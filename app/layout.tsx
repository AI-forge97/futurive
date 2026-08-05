import type { Metadata } from "next";
import "styles/globals.css";

export const metadata: Metadata = {
  title: "Futurive — AI Voice Agents & Triage Systems for Insurance, Legal & Healthcare",
  description:
    "Futurive builds AI voice agents and intelligent triage systems for insurance, legal, and healthcare teams in the UAE — in English and Arabic. Based in Dubai Silicon Oasis.",
  keywords: [
    "AI voice agent insurance UAE",
    "legal AI Dubai",
    "Arabic voice agent",
    "claims intake AI",
    "healthcare AI triage",
    "Dubai AI studio",
    "DIFC legal AI",
  ],
  openGraph: {
    title: "Futurive — AI Voice Agents & Triage Systems",
    description:
      "AI voice agents and triage systems for insurance, legal, and healthcare — English and Arabic, built in Dubai.",
    url: "https://futurive.ai",
    siteName: "Futurive",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Futurive — AI Voice Agents & Triage Systems",
    description:
      "AI voice agents and triage systems for insurance, legal, and healthcare — English and Arabic, built in Dubai.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
