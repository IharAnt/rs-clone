import Header from '../../components/header';
import Footer from '../../components/footer';
import React from 'react';
import './style.css'

interface MainLayoutProps {
  children: React.ReactNode;
}

const MotivatorsLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
        <div className='motivators'>{children}</div>
      <Footer />
    </div>
  );
};

export default MotivatorsLayout;
