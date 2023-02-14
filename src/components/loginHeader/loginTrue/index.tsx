import React, { useState } from 'react';
import './index.css';
import profileIcoDefault from './../../../assets/img/profileIcoDefault.png';
import motekoinIco from './../../../assets/img/motekoinIco.png';
import messageIco from './../../../assets/img/mesageIco.png';
import { useAppSelector } from '../../../store';
import EditProfile from '../../editProfile';

const LoginTrue: React.FC = () => {

    const IsMessage = false;

    const { name, moticoins } = useAppSelector(state => state.appState.profile)

    const [editProfile, setEditProfile] = useState(false)

    const profileClickEdit = () => {
        if (editProfile) {
            setEditProfile(false)
        } else {
            setEditProfile(true)
        }
    }

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
                <img src={profileIcoDefault} className="w-full" alt="profile ico" />
            </div>
            <EditProfile setActive={editProfile} />
        </div>
    )
};

export default LoginTrue;
