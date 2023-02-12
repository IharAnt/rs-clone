import React, { useState } from 'react';
import './index.css';
import { useAppDispatch, useAppSelector } from '../../store';
import { authChange, loginChange, userChange } from '../../store/appStore/sliceApp/slice';
import AuthService from '../../services/AuthService';
import { AxiosError } from 'axios';
import { IAuthResponse } from '../../types/interfaces/IAuthResponse';
import UserService from '../../services/UserService';

const ModalLogin = () => {
  const isLogin = useAppSelector((state) => state.appState.isLogin);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = async () => {
    try {
      const response = await AuthService.login(email, password);
      const profile = await UserService.getProfile(response.data.user.id)
      console.log(response);
      dispatch(userChange(profile));
      dispatch(loginChange(true));
    } catch (error) {
      console.log(error);
      console.log(typeof error);
    }
  };

  const [checkLogin, setCheckLogin] = useState(false);

  const handlerLoginClick = () => {
    if (isLogin) {
      setCheckLogin(false);
    } else {
      setCheckLogin(true);
    }
  };

  return (
    <>
      <form name="login-form" className="login-container-form" method="post">
        <div className="px-7 py-7">
          <h1 className="login-title">Авторизация</h1>
          <span className="login-title_text">Введите ваши регистрационные данные для входа в ваш личный кабинет. </span>
        </div>
        <div className="px-7 pb-7">
          <input
            name="e-mail"
            type="email"
            className="w-full font-normal border border-solid border-white rounded-md mb-6 input-login input-login__username "
            placeholder="Логин"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="password"
            type="password"
            className="w-full font-normal border border-solid border-white rounded-md input-login "
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {checkLogin && <p className="login_wrong">Неправильный логин или пароль</p>}
        </div>
        <div className="login-footer">
          <input
            type="button"
            value="Регистрация"
            className="register-login"
            onClick={() => dispatch(authChange('register'))}
          />
          <input type="button" value="ВОЙТИ" className="button-login" onClick={login} />
          <input
            type="button"
            value="Забыли пароль?"
            className="button-forget-password"
            onClick={() => dispatch(authChange('forget'))}
          />
        </div>
      </form>
    </>
  );
};

export default ModalLogin;
