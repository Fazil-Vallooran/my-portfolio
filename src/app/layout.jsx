

import MainLayout from "../Components/layout/MainLayout";
import Particles from "../Components/particles";
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
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </head>
    <body className={`${inter.className} h-full min-h-screen bg-gradient-to-b from-[#0a1833] to-[#142042] text-[#bfcbe6]`}>
      <Particles quantity={80} />
      <MainLayout>{children}</MainLayout>
    </body>
  </html>
);

export default RootLayout;
