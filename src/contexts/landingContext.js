"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LandingContext = createContext(null);

export const useLanding = () => useContext(LandingContext);

export const LandingProvider = ({ children }) => {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LandingContext.Provider value={{ showLanding }}>
      {children}
    </LandingContext.Provider>
  );
};
