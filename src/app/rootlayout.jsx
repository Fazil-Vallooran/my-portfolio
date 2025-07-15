
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <LandingProvider>
          {children}
        </LandingProvider>
      </body>
    </html>
  );
}
