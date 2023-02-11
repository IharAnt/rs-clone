import React from 'react';
import './style.css';
import imgStyle from './../../assets/img/imgStyle.png'
import Navigation from '../navigation';
import Logo from '../logo';
import LoginHeader from '../loginHeader';

const Header: React.FC = () => {
  return <div className='items-center header-container gap-9 w-screen h-14 rounded-lg my-3.5 relative z-10 px-3'>
    <img className='img-header absolute -top-5 right-52 z-0 opacity-80' src={imgStyle} alt="" />
    <Logo heigthLogo='h-12' />
    <Navigation />
    <LoginHeader />
  </div>;
};

export default Header;
