import MotivatorsTasks from '../motivatorsTasks';
import TestingTasksList from '../testingTasksList';
import { useState, useEffect } from 'react';
import './style.css';
import Modal from '../modal';
import MotivatorsModal from '../motivatorsModal';
import { useAppDispatch, useAppSelector } from '../../store';
import { getInspectorTasks, getTasks } from '../../store/motivatorsStore/sliceTasks/tasks';

export default function MotivatorsContent() {
  const dispatch = useAppDispatch();
  const content = useAppSelector((state) => state.tasks.motivatorsPage);

  const handleMotivatorsPage = () => {
    switch (content) {
      case 'myTasks':
        return loading ? (
          <div className="motivators-loading">
            <div className="motivators-loadingItem"></div>
          </div>
        ) : (
          <MotivatorsTasks isInspectorsTasks={false} />
        );
      case 'testedTasks':
        return loading ? (
          <div className="motivators-loading">
            <div className="motivators-loadingItem"></div>
          </div>
        ) : (
          <TestingTasksList />
        );
      case 'createdTasks':
        return loading ? (
          <div className="motivators-loading">
            <div className="motivators-loadingItem"></div>
          </div>
        ) : (
          <MotivatorsTasks isInspectorsTasks={true} />
        );
      default:
        return <></>;
    }
  };

  const handleModal = (currentModal: string | null) => {
    if (currentModal) setModal(true);
    else setModal(false);
  };

  const userId = useAppSelector((state) => state.appState.profile.id);

  useEffect(() => {
    dispatch(getTasks({ id: userId }));
    dispatch(getInspectorTasks({ id: userId }));
  }, [content, userId]);

  const [modal, setModal] = useState(false);
  const modalValue = useAppSelector((state) => state.tasks.modal);
  const loading = useAppSelector((state) => state.tasks.loading);

  useEffect(() => {
    handleModal(modalValue);
  }, [modalValue]);

  return (
    <div className="motivatorsCnt">
      {handleMotivatorsPage()}
      <Modal isOpen={modal} setModal={setModal}>
        <MotivatorsModal />
      </Modal>
    </div>
  );
}
