import './style.css';
import close from '../../assets/icons/close.svg';
import { ModalType } from './types/ModalType';
import { useAppDispatch } from '../../store';
import { updateModalValue } from '../../store/motivatorsStore/sliceTasks/tasks';

export default function Modal({ isOpen, setModal, children }: ModalType) {
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(updateModalValue(null));
    setModal(false);
  };

  return (
    <>
      <div className={isOpen ? 'modal-overlay active' : 'modal-overlay'} onClick={closeModal}>
        <div className={isOpen ? 'modal-box active' : 'modal-box'} onClick={(e) => e.stopPropagation()}>
          <img className="modal-close" src={close} alt="close icon" onClick={closeModal} />
          {children}
        </div>
      </div>
    </>
  );
}
