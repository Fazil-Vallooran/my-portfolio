

import MainLayout from "../Components/layout/MainLayout";
import Particles from "../Components/particles";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://mfazil.com'),
  title: {
    default: "Mohammed Fazil - Software Quality Analyst",
    template: "%s | Mohammed Fazil"
  },
  description: "Experienced Software Quality Analyst with 3+ years at Infosys. Expert in test automation with Playwright, Selenium, and C#. Building quality into software through comprehensive testing strategies.",
  keywords: ["Mohammed Fazil", "Software QA", "Test Automation", "Playwright", "Selenium", "Quality Analyst", "Infosys"],
  authors: [{ name: "Mohammed Fazil", url: "https://mfazil.com" }],
  creator: "Mohammed Fazil",
  publisher: "Mohammed Fazil",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mfazil.com",
    title: "Mohammed Fazil - Software Quality Analyst",
    description: "Experienced Software Quality Analyst with 3+ years at Infosys. Expert in test automation with Playwright, Selenium, and C#.",
    siteName: "Mohammed Fazil Portfolio",
    images: [
      {
        url: "/Fazil.jpeg",
        width: 1200,
        height: 630,
        alt: "Mohammed Fazil - Software Quality Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Fazil - Software Quality Analyst",
    description: "Experienced Software Quality Analyst with 3+ years at Infosys. Expert in test automation with Playwright, Selenium, and C#.",
    images: ["/Fazil.jpeg"],
  },
};


const RootLayout = ({ children }) => (
  <html lang="en" className="h-full">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </head>
    <body className={`${inter.className} h-full min-h-screen bg-gradient-to-b from-[#0a1833] to-[#142042] text-[#bfcbe6]`}>
      <Particles quantity={80} />
      <MainLayout>{children}</MainLayout>
    </body>
  </html>
);

export default RootLayout;
