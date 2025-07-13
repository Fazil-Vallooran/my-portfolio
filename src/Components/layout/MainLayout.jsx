import React from 'react';
import MainHeader from './MainHeader';
import SideBar from './SideBar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-primary text-secondary min-h-screen flex flex-col">
      <MainHeader />
      <main className="flex-1">{children}</main>
      <SideBar />
      <Footer />
    </div>
  );
};

export default MainLayout;