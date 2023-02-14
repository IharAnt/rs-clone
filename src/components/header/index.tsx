import React, { useEffect } from 'react';
import './style.css';
import imgStyle from './../../assets/img/imgStyle.png';
import Navigation from '../navigation';
import Logo from '../logo';
import LoginHeader from '../loginHeader';
import AuthService from '../../services/AuthService';
import { useAppDispatch } from '../../store';
import { loadingChange, loginChange, userChange } from '../../store/appStore/sliceApp/slice';
import UserService from '../../services/UserService';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const refresh = async () => {
      try {
        dispatch(loadingChange(true));
        const response = await AuthService.refresh();
        const profile = await UserService.getProfile(response.data.user.id)
        dispatch(userChange(profile));
        dispatch(loginChange(true));
      } catch (error) {
        console.log(error);
        dispatch(loadingChange(false));
      } finally {
        dispatch(loadingChange(false));
      }
    };
    if (localStorage.getItem('token')) {
      refresh();
    }
  }, []);

  return (
    <div className="items-center header-container gap-9 w-screen h-14 rounded-lg my-3.5 relative z-10 px-3">
      <img className="img-header absolute -top-5 right-52 z-0 opacity-80" src={imgStyle} alt="" />
      <Logo heigthLogo="h-12" />
      <Navigation />
      <LoginHeader />
    </div>
  );
};

export default Header;
