import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Share_Tech_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./_components/LanguageProvider";

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
  title: "Azizbek Sultonov — Mobile & Web App Developer",
  description:
    "Portfolio of Azizbek Sultonov. Flutter, Dart, Telegram bots, CRM workflows, and AI tools — turning business and product ideas into practical digital solutions.",
  keywords: [
    "Azizbek Sultonov",
    "Sultonov Azizbek",
    "Flutter Developer",
    "Dart",
    "Mobile App Developer",
    "Telegram Bot",
    "AmoCRM",
    "AI Tools",
    "Portfolio",
    "Bukhara",
    "Uzbekistan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${shareTechMono.variable} ${firaCode.variable} bg-background text-text font-body pt-20 overflow-x-hidden selection:bg-primary selection:text-black antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
