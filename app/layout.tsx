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
  description: "Kullanılmış eşyaları ve elektronik atıkları değere dönüştüren sürdürülebilir bir girişim.",
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
