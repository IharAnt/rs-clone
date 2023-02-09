import React from 'react';
import { useAppDispatch } from '../../store';
import { authChange } from '../../store/appStore/sliceApp/slice';


const ModalForget = () => {

    const distatch = useAppDispatch();

    return (
        <form name="login-form" className="login-container-form" method="post">
            <div className="px-7 py-7">
                <h1 className='login-title'>Восстановление пароля</h1>
                <span className='login-title_text'>Введите e-mail адрес, указанный при регистрации. </span>
            </div>
            <div className="px-7 pb-7">
                <input name="e-mail"
                    type="email"
                    className="w-full font-normal border border-solid border-white rounded-md input-login "
                    placeholder="Ваш e-mail" />
            </div>
            <div className="login-footer register-footer">
                <input type="button" value="Восстановить пароль" className="button-login" />
                <input type="button" value="Регистрация" className="register-login login-button" onClick={() => distatch(authChange('register'))} />
            </div>
        </form>
    )
};

export default ModalForget;
