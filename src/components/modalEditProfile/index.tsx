import React, { useState } from 'react';
import './index.css';

const ModalEitProfile = () => {

    return (

        <form name="login-form" className="login-container-form" method="post">
            <div className="px-7 py-7">
                <h1 className="login-title">Авторизация</h1>
                <span className="login-title_text">Введите ваши регистрационные данные для входа в ваш личный кабинет. </span>
            </div>
            <div className="px-7 pb-7 relative">
                <input
                    name="e-mail"
                    type="email"
                    className={`w-full font-normal border border-solid border-white rounded-md mb-6 input-login input-login__username`}
                    placeholder="Адрес электронной почты"
                />
                <input
                    name="password"
                    type="password"
                    className={`w-full font-normal border border-solid border-white rounded-md input-login `}
                    placeholder="Пароль"
                />
            </div>
            <div className="login-footer">
                <input
                    type="button"
                    value="Регистрация"
                    className="register-login"
                />
                <input
                    type="button"
                    value="ВОЙТИ"
                    className="button-login"
                />
                <input
                    type="button"
                    value="Забыли пароль?"
                    className="button-forget-password"
                />
            </div>
        </form>

    );
};

export default ModalEitProfile;
