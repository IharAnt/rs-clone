import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import FOOTER_DATA from '../../data/footerData';
import imgStyle from './../../assets/img/imgStyle.png';
import './style.css';

const Footer: FC = () => {
  return <div className='footer-container grid grid-cols-3 items-center px-2.5 w-screen h-12 rounded-lg my-3.5 relative z-10'>
    <img className='absolute -bottom-3 z-0 rotate-180 opacity-80' src={imgStyle} alt="" />
    <p className='col-start-2 justify-self-center text-indigo-800 font-medium w-48 text-center'>The Rolling Scopes School @RS Clone 2013</p>
    <ul className='flex col-start-3 justify-end'>
      {FOOTER_DATA.map((item, index) => {
        return (
          <li className='relative hover:scale-105 duration-300' key={item.link}>
            <Link to={item.link}>
              <img className='h-10' src={item.img} alt={`gitHub-${index}`} />
            </Link>
          </li>
        )
      }
      )}
    </ul>
  </div>;
};

export default Footer;
