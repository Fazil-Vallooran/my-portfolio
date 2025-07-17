"use client"
import MainLayout from "../components/layout/MainLayout";
import "./globals.css";


const RootLayout = ({ children }) => (
  <html lang="en">    
    <body className="bg-gradient-to-b from-[#0a1833] to-[#142042] text-[#bfcbe6] font-inter">
      <MainLayout>{children}</MainLayout>
    </body>
  </html>
);

export default RootLayout;
