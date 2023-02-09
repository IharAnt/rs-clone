import React, { useState } from 'react';
import Modal from '../../modal/index'
import Authorization from '../../authorization';

const LoginFalse: React.FC = () => {

    const [modalAuthorization, setModalAuthorization] = useState(false);

    return (
        <div className='relative'>
            <button
                onClick={() => setModalAuthorization(true)}
                className='w-24 h-10 rounded-lg border-solid border-2 border-indigo-800 text-indigo-800 hover:border-indigo-900 hover:scale-105 duration-300'>
                Войти
            </button>
            <Modal isOpen={modalAuthorization} setModal={setModalAuthorization} >
                <Authorization />
            </Modal>
        </div>
    )
};

export default LoginFalse;
