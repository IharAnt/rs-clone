import React, { ReactNode } from 'react';
import './style.css';
import close from '../../assets/icons/close.svg';
import { ModalType } from './types/ModalType';
import { useAppDispatch } from '../../store';
import { updateModalValue } from '../../store/motivatorsStore/sliceTasks/tasks';

export default function Modal({ isOpen, setModal, children }: ModalType) {
  const dispatch = useAppDispatch();
  const rootClasess = ['modal-overlay'];
  if (isOpen) rootClasess.push('active');

  const closeModal = () => {
    dispatch(updateModalValue(null));
    setModal(false);
  };

  return (
    <>
      <div className={rootClasess.join(' ')} onClick={closeModal}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <img className="modal-close" src={close} alt="close icon" onClick={closeModal} />
          {children}
        </div>
      </div>
    </>
  );
}
