import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://masterbrain.site"),

  title: {
    default: "MasterBrain | Advanced IT & Communication Courses in Tamil",
    template: "%s | MasterBrain",
  },

  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',

  description:
    "MasterBrain provides advanced-level Information Technology and communication education in Sri Lanka through Tamil medium. Learn React JS, JavaScript, Next.js, Node.js, and .NET with industry-focused training.",

  keywords: [
    "MasterBrain",
    "IT courses Sri Lanka Tamil",
    "React JS course Sri Lanka",
    "Next.js Tamil course",
    "JavaScript Tamil",
    "Node.js course Sri Lanka",
    ".NET course Sri Lanka",
    "Advanced IT education Tamil",
    "Software engineering Tamil medium",
  ],

  authors: [{ name: "MasterBrain Academy", url: "https://www.masterbrain.site" }],
  creator: "MasterBrain Academy",
  publisher: "MasterBrain Academy",

  openGraph: {
    title: "MasterBrain | Advanced IT Education in Tamil",
    description:
      "Learn advanced Information Technology and communication skills in Sri Lanka through Tamil medium. Courses include React JS, JavaScript, Next.js, Node.js, and .NET.",
    url: "https://www.masterbrain.site",
    siteName: "MasterBrain",
    locale: "en_LK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MasterBrain | IT Courses in Tamil",
    description:
      "Advanced IT and communication courses in Sri Lanka via Tamil medium. React, Next.js, JavaScript, Node.js, .NET.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.masterbrain.site",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ta">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
