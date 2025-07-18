import MainLayout from "../components/layout/MainLayout";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohammed Fazil",
  description: "Portfolio of Mohammed Fazil",
};

const RootLayout = ({ children }) => (
  <html lang="en" className="h-full">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </head>
    <body className={`${inter.className} h-full min-h-screen bg-gradient-to-b from-[#0b1935] to-[#142042] text-[#bfcbe6]`}>
      <MainLayout>{children}</MainLayout>
    </body>
  </html>
);

export default RootLayout;