import { AxiosError } from 'axios';
import React, { useState } from 'react';
import AuthService from '../../services/AuthService';
import UserService from '../../services/UserService';
import { useAppDispatch } from '../../store';
import { authChange, loginChange, userChange } from '../../store/appStore/sliceApp/slice';
import './index.css';

const ModalRegister = () => {
  const regExEmail = '^[\\w.%+-]+@[\\w.-]+\\.[\\w]{2,6}$';
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validName, setValidName] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const registration = async () => {
    let isSend = true;
    if (password.length < 1) {
      isSend = false;
      setValidPassword(false);
    } else setValidPassword(true);
    if (name.length < 1) {
      isSend = false;
      setValidName(false);
    } else setValidName(true);
    if (email.search(regExEmail) === -1) {
      isSend = false;
      setValidEmail(false);
    } else setValidEmail(true);
    if (isSend) {
      try {
        const response = await AuthService.registration(email, password, name);
        const profile = await UserService.getProfile(response.data.user.id);
        dispatch(userChange(profile));
        dispatch(loginChange(true));
      } catch (error) {
        if (error instanceof AxiosError) {
          setErrorMessage(error.response?.data.message);
        }
      }
    }
  };

  return (
    <form name="login-form" className="login-container-form" method="post">
      <div className="px-7 py-7">
        <h1 className="login-title">Регистрация</h1>
        <span className="login-title_text">Введите данные, неоходимые для регистрации вашего личного профиля. </span>
      </div>
      <div className="px-7 pb-7 relative">
        {!validEmail && <p className="wrong-email-login wrong-text">Некорректный адрес e-mail</p>}
        <input
          name="e-mail"
          type="email"
          className={`w-full font-normal border border-solid border-white rounded-md mb-4 input-login ${
            !validEmail ? 'input-wrong-change' : ''
          }`}
          placeholder="Ваш e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!validName && <p className="wrong-name-registration wrong-text">Длина имени не может быть равна нулю</p>}
        <input
          name="username"
          type="text"
          className={`w-full font-normal border border-solid border-white rounded-md mb-4 input-login input-login__username  ${
            !validName ? 'input-wrong-change' : ''
          }`}
          placeholder="Логин"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {!validPassword && (
          <p className="wrong-password-registration wrong-text">Длина пароля не может быть равна нулю</p>
        )}
        <input
          name="password"
          type="password"
          className={`w-full font-normal border border-solid border-white rounded-md input-login ${
            !validPassword ? 'input-wrong-change ' : ''
          }`}
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errorMessage.length > 0 && <p className="error-registration_wrong">{errorMessage}</p>}
      <div className="login-footer register-footer">
        <input type="button" value="Зарегистрироваться" className="button-login" onClick={registration} />
        <input
          type="button"
          value="Войти в профиль"
          className="register-login login-button"
          onClick={() => dispatch(authChange('login'))}
        />
        {/* <input
          type="button"
          value="Забыли пароль?"
          className="button-forget-password"
          onClick={() => dispatch(authChange('forget'))} /> */}
      </div>
    </form>
  );
};

export default ModalRegister;
