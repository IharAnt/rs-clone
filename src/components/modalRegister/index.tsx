import React, { useState } from 'react';
import AuthService from '../../services/AuthService';
import UserService from '../../services/UserService';
import { useAppDispatch } from '../../store';
import { authChange, loginChange, userChange } from '../../store/appStore/sliceApp/slice';
import './index.css';

const ModalRegister = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const registration = async () => {
    try {
      const response = await AuthService.registration(email, password, name);
      const profile = await UserService.getProfile(response.data.user.id)
      console.log(response);
      dispatch(userChange(profile));
      dispatch(loginChange(true));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form name="login-form" className="login-container-form" method="post">
      <div className="px-7 py-7">
        <h1 className="login-title">Регистрация</h1>
        <span className="login-title_text">Введите данные, неоходимые для регистрации вашего личного профиля. </span>
      </div>
      <div className="px-7 pb-7">
        <input
          name="e-mail"
          type="email"
          className="w-full font-normal border border-solid border-white rounded-md mb-4 input-login "
          placeholder="Ваш e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="username"
          type="text"
          className="w-full font-normal border border-solid border-white rounded-md mb-4 input-login input-login__username "
          placeholder="Логин"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="password"
          type="password"
          className="w-full font-normal border border-solid border-white rounded-md input-login "
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="login-footer register-footer">
        <input type="button" value="Зарегистрироваться" className="button-login" onClick={registration} />
        <input
          type="button"
          value="Войти в профиль"
          className="register-login login-button"
          onClick={() => dispatch(authChange('login'))}
        />
        <input
          type="button"
          value="Забыли пароль?"
          className="button-forget-password"
          onClick={() => dispatch(authChange('forget'))}        />
      </div>
    </form>
  );
};

export default ModalRegister;
