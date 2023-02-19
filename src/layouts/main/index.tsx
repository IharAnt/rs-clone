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
    <div className="flex flex-col justify-between items-center h-full overflow-hidden">
      <Header />
      <div className='h-full items-center flex flex-col'>
        <LevelComponent />
        {children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
