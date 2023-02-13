import { useEffect, useState } from 'react';
import AuthService from '../../services/AuthService';
import UserService from '../../services/UserService';
import { useAppDispatch } from '../../store';
import { loginChange, userChange } from '../../store/appStore/sliceApp/slice';
import { IProfile, IUser } from '../../types/interfaces/IUser';
import Modal from '../modal';
import ModalEitProfile from '../modalEditProfile';
import './index.css';

interface IEditProfile {
    setActive: boolean
}

const EditProfile = ({ setActive }: IEditProfile) => {

    const [isOpen, setIsOpen] = useState(true);
    const dispatch = useAppDispatch();
    const [modalEditProfile, setModalEditProfile] = useState(false);
    const logOut = async () => {
        await AuthService.logout()
        dispatch(userChange({} as IProfile));
        dispatch(loginChange(false));
    }

    useEffect((() => setIsOpen(true)), [setActive])

    return (
        <>
            <div className={`edit-profile-container ${setActive && isOpen ? 'edit-profile-container_active' : ''}`}>
                <p className='edit-profile-item' onClick={() => {
                    setModalEditProfile(true);
                    setIsOpen(false);
                }}>Редактировать профиль</p>
                <p className='edit-profile-item' onClick={logOut}>Выйти из профиля</p>
            </div>
            <Modal isOpen={modalEditProfile} setModal={setModalEditProfile} >
                <ModalEitProfile />
            </Modal>
        </>
    )
};

export default EditProfile;
