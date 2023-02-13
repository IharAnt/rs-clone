import React, { useState } from 'react';
import './index.css';
import { useAppDispatch } from '../../store';
import { authChange, loginChange, userChange } from '../../store/appStore/sliceApp/slice';
import AuthService from '../../services/AuthService';
import UserService from '../../services/UserService';

const ModalLogin = () => {

  const regExEmail = '^[\\w.%+-]+@[\\w.-]+\\.[\\w]{2,6}$';
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const loginClick = async () => {
    let isSend = true;
    if (password.length < 1) {
      isSend = false;
      setValidPassword(false)
    } else (setValidPassword(true))
    if (email.search(regExEmail) === -1) {
      isSend = false;
      setValidEmail(false);
    } else (setValidEmail(true))
    if (isSend) {
      try {
        const response = await AuthService.login(email, password);
        const profile = await UserService.getProfile(response.data.user.id)
        dispatch(userChange(profile));
        dispatch(loginChange(true));
      } catch (error) {
        setErrorMessage('тут тип ошибки указать')
      }
    }
  };

  return (
    <>
      <form name="login-form" className="login-container-form" method="post">
        <div className="px-7 py-7">
          <h1 className="login-title">Авторизация</h1>
          <span className="login-title_text">Введите ваши регистрационные данные для входа в ваш личный кабинет. </span>
        </div>
        <div className="px-7 pb-7 relative">
          {!validEmail && <p className='wrong-email-login'>Некорректный адрес e-mail</p>}
          <input
            name="e-mail"
            type="email"
            className={`w-full font-normal border border-solid border-white rounded-md mb-6 input-login input-login__username ${!validEmail ? 'input-wrong-change' : ''}`}
            placeholder="Адрес электронной почты"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!validPassword && <p className='wrong-password-login'>Длина пароля не может быть равна нулю</p>}
          <input
            name="password"
            type="password"
            className={`w-full font-normal border border-solid border-white rounded-md input-login ${!validPassword ? 'input-wrong-change' : ''}`}
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage.length > 0 && <p className="login_wrong">{errorMessage}</p>}
        </div>
        <div className="login-footer">
          <input
            type="button"
            value="Регистрация"
            className="register-login"
            onClick={() => dispatch(authChange('register'))}
          />
          <input
            type="button"
            value="ВОЙТИ"
            className="button-login"
            onClick={loginClick}
          />
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
