import React from 'react';
import MainHeader from './MainHeader';
import SideBar from './SideBar';
import Footer from './Footer';
import { LandingProvider } from '@contexts/landingContext';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-primary text-secondary min-h-screen flex flex-col">
      <LandingProvider>
      <MainHeader />
      </LandingProvider>
      <main className="flex-1">{children}</main>
      <LandingProvider>
      <SideBar />
      
      <Footer />
      </LandingProvider>
    </div>
  );
};

export default MainLayout;