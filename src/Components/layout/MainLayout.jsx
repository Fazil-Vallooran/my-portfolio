import React from 'react';
import MainHeader from './MainHeader';
import SideBar from './SideBar';
import Footer from './Footer';
import { LandingProvider } from '@contexts/landingContext';

const MainLayout = ({ children }) => {
  return (
    <LandingProvider>
      <div className="bg-primary text-secondary min-h-screen flex flex-col">
        <MainHeader />
        <main className="flex-1">{children}</main>
        <SideBar />
        <Footer />
      </div>
    </LandingProvider>
  );
};

export default MainLayout;