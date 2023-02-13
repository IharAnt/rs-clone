import React, { useState } from 'react';
import defaultImg from './../../assets/img/profileIcoDefault.png'
import './index.css';

const ModalEitProfile = () => {

    const [imgAvatar, setImgAvatar] = useState(defaultImg)
    const imgAvatarProfile = '';

    if (imgAvatarProfile) {
        setImgAvatar(imgAvatarProfile)
    }

    return (

        <form name="edit-form" className="edit-container-form" method="post">
            <div className="px-7 py-7">
                <h1 className="login-title">Редактировать профиль</h1>
                <span className="login-title_text">Вы можете отредактировать свои личные данные, установить аватар или сменить пароль.</span>
            </div>
            <div className='edit-form-title'>Профиль
                <hr /></div>
            <div className='profile-container-column'>
                <div className='profile-container-avatar'>
                    <p className='profile-container-avatar_load'>Загрузить фото</p>
                    <img className='w-full pointer-events-none' src={imgAvatar} alt="img avatar" />
                </div>
                <div className='profile-container-info'>
                <div className="profile-container-info-input">
                    <p className='profile-info-input-name'>Сменить имя</p>
                    <input
                        name="name"
                        type="text"
                        className={`w-full font-normal border border-solid border-white rounded-md input-edit`}
                        placeholder="Ваше имя"
                    />
                </div>
                <div className="profile-container-info-input">
                    <p className='profile-info-input-name'>Сменить дату рождения</p>
                    <input
                        name="birthday"
                        type="date"
                        className={`w-full font-normal border border-solid border-white rounded-md input-edit`}
                        placeholder="Ваш день рождения"
                    />
                </div>
                <div className="profile-container-info-input">
                    <p className='profile-info-input-name'>Сменить телефон</p>
                    <input
                        name="phone"
                        type="text"
                        className={`w-full font-normal border border-solid border-white rounded-md input-edit`}
                        placeholder="Ваш номер телефона"
                    />
                </div>
                <div className="profile-container-info-input">
                    <p className='profile-info-input-name'>Сменить адрес электронной почты</p>
                    <input
                        name="email"
                        type="e-mail"
                        className={`w-full font-normal border border-solid border-white rounded-md input-edit`}
                        placeholder="Ваш e-mail"
                    />
                </div>
                <div className="profile-container-info-input">
                    <p className='profile-info-input-name'>Сменить пароль</p>
                    <input
                        name="password"
                        type="password"
                        className={`w-full font-normal border border-solid border-white rounded-md input-edit`}
                        placeholder="Ваш номер пароль"
                    />
                </div>
                </div>
            </div>
            <div className="login-footer edit-login">
                <input
                    type="button"
                    value="Сохранить настройки профиля"
                    className="button-login"
                />
            </div>
        </form>

    );
};

export default ModalEitProfile;
