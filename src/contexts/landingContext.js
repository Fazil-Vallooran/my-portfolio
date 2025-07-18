"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LandingContext = createContext(null);

export const useLanding = () => useContext(LandingContext);

export const LandingProvider = ({ children }) => {
  const [showLanding, setShowLanding] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setShowLanding(true);
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <LandingContext.Provider value={{ showLanding }}>
      {children}
    </LandingContext.Provider>
  );
};
