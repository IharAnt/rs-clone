import { useAppSelector } from '../../store';
import { useEffect, useState } from 'react';
import CreateTask from '../../components/createTask/index';
import CompleteTask from '../completeTask';
import { ITask } from '../../types/interfaces/ITask';
import TestTask from '../testTask';
import InfoTask from '../infoTask';

const defineCurrentModal = (modal: string | null, task: ITask) => {
  switch (modal) {
    case 'create':
      return <CreateTask />;
    case 'complete':
      return <CompleteTask task={task} />;
    case 'test':
      return <TestTask task={task} />;
    case 'info':
      return <InfoTask task={task} />;
    default:
      return <></>;
  }
};

export default function MotivatorsModal() {
  const modalState = useAppSelector((state) => state.tasks.modal);
  const modalTaskState = useAppSelector((state) => state.tasks.modalTask);

  const [modalPage, setModalPage] = useState<string | null>(null);

  useEffect(() => {
    setModalPage(modalState);
  }, [modalState]);

  return <>{defineCurrentModal(modalPage, modalTaskState)}</>;
}
