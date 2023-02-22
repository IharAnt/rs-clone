import React, { useEffect } from 'react';
import './style.css';
import imgStyle from './../../assets/img/imgStyle.png';
import Navigation from '../navigation';
import Logo from '../logo';
import LoginHeader from '../loginHeader';
import AuthService from '../../services/AuthService';
import { useAppDispatch, useAppSelector } from '../../store';
import { finishLoading, loadingChange, loginChange, userChange } from '../../store/appStore/sliceApp/slice';
import UserService from '../../services/UserService';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  let userId = useAppSelector((state) => state.appState.profile.id);

  useEffect(() => {
    const refresh = async () => {
      try {
        dispatch(loadingChange(true));
        let id = userId;
        if (!userId) {
          const response = await AuthService.refresh();
          id = response.data.user.id;
        }
        const profile = await UserService.getProfile(id);
        dispatch(userChange(profile));
        dispatch(loginChange(true));
      } catch (error) {
        // console.log(error);
      } finally {
        dispatch(loadingChange(false));
        dispatch(finishLoading());
      }
    };
    refresh();
  }, []);

  return (
    <div className="items-center header-container gap-9 w-screen h-14 rounded-lg relative z-10 px-3">
      <img className="img-header absolute -top-5 right-52 z-0 opacity-80 pointer-events-none" src={imgStyle} alt="" />
      <Logo heigthLogo="h-12" />
      <Navigation />
      <LoginHeader />
    </div>
  );
};

export default Header;
