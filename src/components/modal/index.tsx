import React, { ReactNode } from "react";
import './style.css'
import close from "../../assets/icons/close.svg";

type ModalType = {
  children?: ReactNode;
  isOpen: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ isOpen, setModal, children }: ModalType) {

  const rootClasess = ['modal-overlay'];
  if (isOpen) rootClasess.push('active');

  const closeModal = () => setModal(false);

  return (
    <>
      <div className={rootClasess.join(' ')} onClick={closeModal}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <img className="modal-close" src={close} alt="close icon" onClick={closeModal}/>
          {children}
        </div>
      </div>
    </>
  );
}