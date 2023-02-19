import React, { useState } from 'react';
import UserService from '../../services/UserService';
import { useAppDispatch, useAppSelector } from '../../store';
import { photoChange } from '../../store/appStore/sliceApp/slice';
import './index.css';
import { propsEdit } from './types';

const ModalEitProfile = ({ setModal }: propsEdit) => {

    const { birthday, email, name, phone, photo, id } = useAppSelector(state => state.appState.profile);
    const [nameUser, setNameUser] = useState(name);
    const [phoneUser, setPhoneUser] = useState(phone);
    const [birthdayUser, setBirthdayUser] = useState(birthday);
    const dispatch = useAppDispatch();

    const inputFileAvatar = (e: React.FormEvent<HTMLInputElement>) => {
        const imgInput = e.currentTarget.files?.[0];
        if (imgInput) {
            const reader = new FileReader();

            reader.onload = function () {
                const newAvatar = reader.result;
                if (typeof newAvatar === 'string') {
                    dispatch(photoChange(newAvatar))
                }
            };
            reader.readAsDataURL(imgInput);
        }
    }

    const updateSaveClick = async () => {
        await UserService.updateProfile(id, { id, email, name: nameUser, birthday: birthdayUser, phone: phoneUser, photo });
        setModal(false);
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
                    <img className='profile-container-avatar_img' src={photo} alt="img avatar" />
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
                    onClick={updateSaveClick}
                />
            </div>
        </form>

    );
};

export default ModalEitProfile;
