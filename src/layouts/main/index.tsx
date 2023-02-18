import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import React from 'react';
import LevelComponent from '../../components/levelComponent';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen overflow-hidden">
      <Header />
      <LevelComponent />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
