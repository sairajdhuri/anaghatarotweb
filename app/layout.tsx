import type { Metadata } from "next";
import { Poppins, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anaghatarot.in"),
  title: {
    default: "Anagha's Tarot | Tarot Reader & Spiritual Guide in India",
    template: "%s | Anagha's Tarot",
  },
  description:
    "Anagha's Tarot offers mystical tarot readings, vastu consultation, astrology insights, and tarot classes. Get spiritual guidance, clarity, healing, and learning from an experienced tarot reader in India.",
  keywords: [
    "Anagha's Tarot",
    "Anagha tarot",
    "anaghatarot.in",
    "tarot reading India",
    "tarot reader",
    "online tarot reading",
    "vastu consultation",
    "astrology",
    "tarot classes India",
    "learn tarot",
    "spiritual guidance",
    "healing",
    "psychic reading",
    "tarot card reading online",
    "best tarot reader India",
  ],
  authors: [{ name: "Anagha", url: "https://anaghatarot.in" }],
  creator: "Anagha's Tarot",
  publisher: "Anagha's Tarot",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://anaghatarot.in",
  },
  openGraph: {
    title: "Anagha's Tarot | Tarot Reader & Spiritual Guide in India",
    description:
      "Mystical tarot readings, vastu consultation, astrology insights, and tarot classes by Anagha. Your trusted spiritual guide in India.",
    url: "https://anaghatarot.in",
    siteName: "Anagha's Tarot",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anagha's Tarot | Tarot Reader & Spiritual Guide",
    description:
      "Mystical tarot readings, vastu consultation, astrology insights, and tarot classes by Anagha.",
    creator: "@anaghatarot",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Spirituality",
  icons: {
    icon: "/logo_nobg.png",
    shortcut: "/logo_nobg.png",
    apple: "/logo_nobg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${cinzel.variable} antialiased bg-mystic-gradient text-foreground`}
      >
        <div id="top" className="sr-only" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
