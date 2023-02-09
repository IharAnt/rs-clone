import React from 'react';
import { useAppSelector } from '../../store';
import ModalForget from '../modalForget';
import ModalLogin from '../modalLogin';
import ModalRegister from '../modalRegister';

const Authorization: React.FC = () => {

    const activeModal = useAppSelector(state => state.appState.activeModalAuth);

    return (
        <>
            {activeModal === 'login' && <ModalLogin />}
            {activeModal === 'register' && <ModalRegister />}
            {activeModal === 'forget' && <ModalForget />}
        </>
    )
}

export default Authorization;
