import "./globals.css";
import { Inter } from "next/font/google";
import MainLayout from "../components/layout/MainLayout";
import LandingProvider from "../components/context/LandingProvider"; // adjust if needed

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohammed Fazil",
  description: "Portfolio of Mohammed Fazil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-gradient-to-b from-[#0a1833] to-[#142042] text-[#bfcbe6]`}>
        <LandingProvider>
          <MainLayout>{children}</MainLayout>
        </LandingProvider>
      </body>
    </html>
  );
}
