import React from 'react';
import { useAppDispatch } from '../../store';
import { authChange } from '../../store/appStore/sliceApp/slice';
import './index.css';

const ModalRegister = () => {

    const distatch = useAppDispatch();

    return (
        <form name="login-form" className="login-container-form" method="post">
            <div className="px-7 py-7">
                <h1 className='login-title'>Регистрация</h1>
                <span className='login-title_text'>Введите данные, неоходимые для регистрации вашего личного профиля. </span>
            </div>
            <div className="px-7 pb-7">
                <input name="username"
                    type="text"
                    className="w-full font-normal border border-solid border-white rounded-md mb-4 input-login input-login__username "
                    placeholder="Логин" />
                <input name="e-mail"
                    type="email"
                    className="w-full font-normal border border-solid border-white rounded-md mb-4 input-login "
                    placeholder="Ваш e-mail" />
                <input name="password"
                    type="password"
                    className="w-full font-normal border border-solid border-white rounded-md input-login "
                    placeholder="Пароль" />
            </div>
            <div className="login-footer register-footer">
                <input type="button" value="Зарегистрироваться" className="button-login" />
                <input type="button" value="Войти в профиль" className="register-login login-button" onClick={() => distatch(authChange('login'))} />
                <input type="button" value="Забыли пароль?" className='button-forget-password' onClick={() => distatch(authChange('forget'))} />
            </div>
        </form>
    )
};

export default ModalRegister;
