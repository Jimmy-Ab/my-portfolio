import type { Metadata } from "next";
import { JetBrains_Mono, Mooli } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import PageTransition from "@/components/page-transition";
import StairTransition from "@/components/stair-transition";

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const mooli = Mooli({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Dalasa's Portfolio",
  description:
    "A digital showcase of my skills and experience. It highlights my creative work across web development. The website allows visitors to explore Dalasa's projects, get a sense of my creative style, and learn more about my capabilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrains_Mono.variable} ${mooli.className}`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
