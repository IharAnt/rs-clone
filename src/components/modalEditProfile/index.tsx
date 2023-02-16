import React, { useState } from 'react';
import { useAppSelector } from '../../store';
import defaultImg from './../../assets/img/profileIcoDefault.png'
import './index.css';

const ModalEitProfile = () => {

    const [imgAvatar, setImgAvatar] = useState(defaultImg);
    const { birthday, email, name, phone, photo } = useAppSelector(state => state.appState.profile);
    const [nameUser, setNameUser] = useState(name);
    const [emailUser, setEmailUser] = useState(email);
    const [phoneUser, setPhoneUser] = useState(phone);
    const [birthdayUser, setBirthdayUser] = useState(birthday);
    if (photo) { setImgAvatar(photo) };
    console.log(birthdayUser)// c датой решить вопрос
    
    const inputFileAvatar = (e: React.FormEvent<HTMLInputElement>) => {
        const imgInput = e.currentTarget.files?.[0];
        if (imgInput) {
            const reader = new FileReader();
            reader.onload = function () {
                const newAvatar = reader.result;
                if (typeof newAvatar === 'string') {
                    setImgAvatar(newAvatar)
                }
            };
            reader.readAsDataURL(imgInput);
        }
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
                    <input className='input-edit-file' onChange={(e) => inputFileAvatar(e)} type="file" name="AddImage" id="AddImage" accept="image/jpeg,image/png" />
                    <p className='profile-container-avatar_load'>Загрузить фото</p>
                    <img className='w-full pointer-events-none' src={imgAvatar} alt="img avatar" />
                </div>
                <div className='profile-container-info'>
                    <div className="profile-container-info-input">
                        <p className='profile-info-input-name'>Сменить имя</p>
                        <input
                            value={nameUser}
                            name="name"
                            type="text"
                            className={`w-full font-normal border border-solid border-white rounded-md input-edit`}
                            placeholder="Ваше имя"
                            onChange={(e) => setNameUser(e.currentTarget.value)}
                        />
                    </div>
                    <div className="profile-container-info-input">
                        <p className='profile-info-input-name'>Сменить дату рождения</p>
                        <input
                            value={birthdayUser}
                            name="birthday"
                            type="date"
                            className={`w-full font-normal border border-solid border-white rounded-md input-edit`}
                            placeholder="Ваш день рождения"
                            onChange={(e) => setBirthdayUser(e.currentTarget.value)}
                        />
                    </div>
                    <div className="profile-container-info-input">
                        <p className='profile-info-input-name'>Сменить телефон</p>
                        <input
                            value={phoneUser}
                            name="phone"
                            type="text"
                            className={`w-full font-normal border border-solid border-white rounded-md input-edit`}
                            placeholder="Ваш номер телефона"
                            onChange={(e) => setPhoneUser(e.currentTarget.value)}
                        />
                    </div>
                    <div className="profile-container-info-input">
                        <p className='profile-info-input-name'>Сменить адрес электронной почты</p>
                        <input
                            value={emailUser}
                            name="email"
                            type="e-mail"
                            className={`w-full font-normal border border-solid border-white rounded-md input-edit`}
                            placeholder="Ваш e-mail"
                            onChange={(e) => setEmailUser(e.currentTarget.value)}
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
