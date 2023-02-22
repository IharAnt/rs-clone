import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import React from 'react';
import LevelComponent from '../../components/levelComponent';
import { useAppSelector } from '../../store';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const isLogin = useAppSelector((state) => state.appState.isLogin);
  return (
    <div className={`mainLayout-container ${isLogin ? 'mainLayout-container_four' : 'mainLayout-container_three'} `}>
      <Header />
      <LevelComponent />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
