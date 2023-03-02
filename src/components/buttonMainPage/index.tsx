import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store';
import Authorization from '../authorization';
import Modal from '../modal';

const ButtonMainPage: React.FC = () => {
  const IsLogin = useAppSelector((state) => state.appState.isLogin);
  const STYLE_BUTTON =
    'w-full h-10 border-solid rounded-2xl text-stone-100 text-lg uppercase font-black bg-indigo-800 px-7 hover:bg-indigo-900 hover:scale-105 duration-300';
  const [modalAuthorization, setModalAuthorization] = useState(false);

  return (
    <div>
      <Modal isOpen={modalAuthorization} setModal={setModalAuthorization}>
        <Authorization />
      </Modal>
      {IsLogin ? (
        <button className={STYLE_BUTTON}>
          <Link to={'/motivators'}>перейти к мотиваторам</Link>
        </button>
      ) : (
        <button className={STYLE_BUTTON} onClick={() => setModalAuthorization(true)}>
          присоединиться
        </button>
      )}
    </div>
  );
};

export default ButtonMainPage;
