import { Children } from "react";
import { Analytics } from "@vercel/analytics/next"
import MainLayout from "../Components/layout/MainLayout";
import "./globals.css"

export const metadata = {
  title: "Mohammed Fazil",
  description: "Portfolio of Mohammed Fazil",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        href="/favicon.ico"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest"></link>
    </head>
    <body
      style={{
        background: "linear-gradient(180deg, #0a1833 0%, #142042 100%)",
        color: "#bfcbe6",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <MainLayout>{children}</MainLayout>
    </body>
  </html>
);

export default RootLayout;
