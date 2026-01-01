import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AudioPlayer } from "@/components/ui/audio-player";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hayata Katmak | Atıktan Değere Yolculuk",
  description: "Kullanılmış eşyaları ve elektronik atıkları değere dönüştüren sürdürülebilir bir girişim. Hurdadan mücevhere uzanan bu dönüşüm hikayesine ortak olun.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Hayata Katmak | Atıktan Değere",
    description: "Kullanılmış eşyaları ve elektronik atıkları değere dönüştüren sürdürülebilir bir girişim.",
    url: "https://hayatakatmak.vercel.app", // Fallback URL, actually dynamic but good to have base
    siteName: "Hayata Katmak",
    images: [
      {
        url: "/hero-infographic.jpg", // Using the rich infographic as the preview
        width: 1200,
        height: 630,
        alt: "Hayata Katmak Proje Döngüsü",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hayata Katmak | Atıktan Değere",
    description: "Kullanılmış eşyaları ve elektronik atıkları değere dönüştüren sürdürülebilir girişim.",
    images: ["/hero-infographic.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={cn(
          inter.variable,
          manrope.variable,
          "min-h-screen font-sans antialiased flex flex-col"
        )}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <AudioPlayer />
        <Analytics />
      </body>
    </html>
  );
}
