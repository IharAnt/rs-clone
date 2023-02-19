import React, { useEffect, useState } from 'react';
import './index.css';
import motekoinIco from './../../../assets/img/motekoinIco.png';
import messageIco from './../../../assets/img/mesageIco.png';
import { useAppDispatch, useAppSelector } from '../../../store';
import EditProfile from '../../editProfile';
import { photoChange } from '../../../store/appStore/sliceApp/slice';
import { avatarDefault } from '../../../data/avatarDefault';

const LoginTrue: React.FC = () => {

    const IsMessage = false;
    const dispatch = useAppDispatch();
    const { name, moticoins, photo } = useAppSelector(state => state.appState.profile)
    const [editProfile, setEditProfile] = useState(false)

    const profileClickEdit = () => {
        if (editProfile) {
            setEditProfile(false)
        } else {
            setEditProfile(true)
        }
    }

    useEffect((() => {
        if (photo === undefined) {
            dispatch(photoChange(avatarDefault));
        }
    }), [dispatch, photo])

    return (
        <div className='profile-container'>
            <p className='profile-container_name'>{name}</p>
            <div className='profile-container_info'>
                <div className='profile-container_notice'>
                    <img className='profile-notice_ico' src={messageIco} alt="message ico" />
                    {IsMessage && <div className='profile-notice_active'></div>}
                </div>
                <div className='profile-container_quantity'>
                    <img className="profile-quantity_ico" src={motekoinIco} alt="motekoin ico" />
                    <span className='profile-quantity_text'>{moticoins}</span>
                </div>
            </div>
            <div className='profile-container_profile'
                onClick={profileClickEdit}>
                <img src={photo} className="header-logo_img" alt="profile ico" />
            </div>
            <EditProfile setActive={editProfile} />
        </div>
    )
};

export default LoginTrue;
