import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Share_Tech_Mono, Fira_Code } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: "400",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sultonov Azizbek — Full-Stack Developer & Engineer",
  description:
    "Portfolio of Sultonov Azizbek. Full-stack developer crafting fast, accessible, and beautiful web experiences with modern tools.",
  keywords: [
    "Sultonov Azizbek",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${shareTechMono.variable} ${firaCode.variable} bg-background text-text font-body pt-20 overflow-x-hidden selection:bg-primary selection:text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
