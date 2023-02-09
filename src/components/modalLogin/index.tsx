import React, { useState } from 'react';
import './index.css';
import { useAppDispatch, useAppSelector } from '../../store';
import { authChange } from '../../store/appStore/sliceApp/slice';

const ModalLogin = () => {

    const isLogin = useAppSelector(state => state.appState.isLogin);
    const distatch = useAppDispatch();


    const [checkLogin, setCheckLogin] = useState(false);

    const handlerLoginClick = () => {
        if (isLogin) {
            setCheckLogin(false);
        } else {
            setCheckLogin(true);
        }
    }

    return (
        <>
            <form name="login-form" className="login-container-form" method="post">
                <div className="px-7 py-7">
                    <h1 className='login-title'>Авторизация</h1>
                    <span className='login-title_text'>Введите ваши регистрационные данные для входа в ваш личный кабинет. </span>
                </div>
                <div className="px-7 pb-7">
                    <input name="username"
                        type="text"
                        className="w-full font-normal border border-solid border-white rounded-md mb-6 input-login input-login__username "
                        placeholder="Логин" />
                    <input name="password"
                        type="password"
                        className="w-full font-normal border border-solid border-white rounded-md input-login "
                        placeholder="Пароль" />
                    {checkLogin && <p className='login_wrong'>Неправильный логин или пароль</p>}
                </div>
                <div className="login-footer">
                    <input type="button" value="Регистрация" className="register-login" onClick={() => distatch(authChange('register'))} />
                    <input type="button" value="ВОЙТИ" className="button-login" onClick={handlerLoginClick} />
                    <input type="button" value="Забыли пароль?" className='button-forget-password' onClick={() => distatch(authChange('forget'))} />
                </div>
            </form>
        </>
    )
};

export default ModalLogin;
