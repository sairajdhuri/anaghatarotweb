import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Anagha | Tarot Reader & Spiritual Guide",
  description:
    "Mystical tarot readings, vastu consultation, numerology insights, and tarot classes by Anagha. Guidance, clarity, healing, and learning for spiritual seekers.",
  keywords: [
    "Anagha tarot",
    "tarot reading",
    "vastu consultation",
    "numerology",
    "tarot classes",
    "spiritual guidance",
    "healing",
  ],
  openGraph: {
    title: "Anagha | Tarot Reader & Spiritual Guide",
    description:
      "Mystical tarot readings, vastu consultation, numerology insights, and tarot classes by Anagha.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anagha | Tarot Reader & Spiritual Guide",
    description:
      "Mystical tarot readings, vastu consultation, numerology insights, and tarot classes by Anagha.",
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
        className={`${poppins.variable} antialiased bg-mystic-gradient text-foreground`}
      >
        <div id="top" className="sr-only" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
