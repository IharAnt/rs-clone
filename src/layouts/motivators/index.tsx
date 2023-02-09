import Header from '../../components/header';
import Footer from '../../components/footer';
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MotivatorsLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
        <div className='main' style={{height:'90vh', margin: '0 auto', width: '94vw'}}>{children}</div>
      <Footer />
    </div>
  );
};

export default MotivatorsLayout;
