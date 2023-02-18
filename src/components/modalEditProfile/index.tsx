import React, { useEffect, useState } from 'react';
import UserService from '../../services/UserService';
import { useAppSelector } from '../../store';
import { avatarDefault } from './const/avatarDefault';
import './index.css';

const ModalEitProfile = () => {

    const [imgAvatar, setImgAvatar] = useState(avatarDefault);
    const { birthday, email, name, phone, photo, id } = useAppSelector(state => state.appState.profile);
    const [nameUser, setNameUser] = useState(name);
    const [phoneUser, setPhoneUser] = useState(phone);
    const [birthdayUser, setBirthdayUser] = useState(birthday);

    useEffect((() => {
        if (photo !== '' && photo) {
            setImgAvatar(photo);
        }
    }), [photo])

    const inputFileAvatar = (e: React.FormEvent<HTMLInputElement>) => {
        const imgInput = e.currentTarget.files?.[0];
        if (imgInput) {
            const reader = new FileReader();
            
            reader.onload = function () {
                const newAvatar = reader.result;
                if (typeof newAvatar === 'string') {
                    console.log(newAvatar)
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
                <span className="login-title_text">Вы можете отредактировать свои личные данные и установить аватар.</span>
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
                        <p className='profile-info-input-name'>Ваш адрес электронной почты</p>
                        <p className={`w-full font-normal border border-solid border-white rounded-md input-edit`}>{email}</p>
                    </div>
                </div>
            </div>
            <div className="login-footer edit-login">
                <input
                    type="button"
                    value="Сохранить настройки профиля"
                    className="button-login"

                    onClick={() => UserService.updateProfile(id, { id, email, name: nameUser, birthday: birthdayUser, phone: phoneUser, photo: imgAvatar })}
                />
            </div>
        </form>

    );
};

export default ModalEitProfile;
