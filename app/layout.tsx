import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Inconsolata } from "next/font/google"; // Added Inconsolata
import "./globals.css";
import { ExplanationProvider } from "@/context/explanation-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingCoffee } from "@/components/floating-coffee";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
    variable: "--font-inconsolata",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlgoOps - DSA & Interview Prep",
  description: "Algoritmalar ve Veri Yapıları - ELI5 Modu ile Öğrenin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${inconsolata.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <ExplanationProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-4rem)]">
            {children}
          </main>
          <Footer />
          <FloatingCoffee />
        </ExplanationProvider>
      </body>
    </html>
  );
}
