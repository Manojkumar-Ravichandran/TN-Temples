import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "TN Temples - Divine Heritage of Tamil Nadu",
  description: "Explore thousands of ancient temples, vibrant festivals, and sacred deities across the spiritual heartland of Tamil Nadu. Discover architectural brilliance and divine heritage.",
  keywords: ["Tamil Nadu Temples", "Hindu Heritage", "Spiritual Tourism", "Ancient Architecture", "Meenakshi Amman", "Chola Temples", "Indian Culture"],
  authors: [{ name: "TN Temples Team" }],
  openGraph: {
    title: "TN Temples - Divine Heritage of Tamil Nadu",
    description: "Explore the divine heritage and architectural brilliance of Tamil Nadu temples.",
    url: "https://tntemples.com",
    siteName: "TN Temples",
    images: [
      {
        url: "https://tntemples.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TN Temples - Divine Heritage",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TN Temples - Divine Heritage of Tamil Nadu",
    description: "Explore the divine heritage and architectural brilliance of Tamil Nadu temples.",
    images: ["https://tntemples.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
