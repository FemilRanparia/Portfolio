import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Femil Ranparia | Portfolio",
  description:
    "B.Tech Computer Engineering student at CHARUSAT — Python Developer, ML Engineer, Full Stack & App Developer.",
  keywords: [
    "Femil Ranparia",
    "Portfolio",
    "Python Developer",
    "ML Engineer",
    "CHARUSAT",
    "Next.js",
  ],
  authors: [{ name: "Femil Ranparia" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Femil Ranparia | Portfolio",
    description: "Building intelligent systems and seamless digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
