import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import React from 'react';
import LevelComponent from '../../components/levelComponent';

interface MainLayoutProps {
  children: React.ReactNode;
}
// flex flex-col justify-between items-center h-full overflow-hidden
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="mainLayout-container">
      <Header />
      <LevelComponent />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
