import { props } from './types';
import './style.css';
import strong from '../../assets/icons/taskTypes/strong.png';
import intelligence from '../../assets/icons/taskTypes/intelligence.png';
import idler from '../../assets/icons/taskTypes/idler.png';
import learner from '../../assets/icons/taskTypes/learner.png';
import sleep from '../../assets/icons/taskTypes/sleep.png';
import teacher from '../../assets/icons/taskTypes/teacher.png';
import TaskStatusEnum from '../../types/enums/TaskStatusEnum';
import moticoins from '../../assets/img/motekoinIco.png';
import TaskCartDescription from '../taskCartDescription';
import TaskCartStatus from '../taskCartStatus';
import MotivatorsCartBtns from '../motivatorsCartBtns';
import { useAppDispatch } from '../../store';
import { updateModalTask, updateModalValue } from '../../store/motivatorsStore/sliceTasks/tasks';

export default function TaskCart({ task, isInspectorTask }: props) {
  const typeIcons = [
    { type: 'power', icon: strong, title: 'силач' },
    { type: 'intelligence', icon: intelligence, title: 'умник' },
    { type: 'idler', icon: idler, title: 'бездельник' },
    { type: 'learner', icon: learner, title: 'ученик' },
    { type: 'sleep', icon: sleep, title: 'соня' },
    { type: 'teacher', icon: teacher, title: 'учитель' },
  ];

  const type = typeIcons.find((item) => item.type === task.type);
  const isEndedTask =
    task.status === TaskStatusEnum.Cancelled ||
    task.status === TaskStatusEnum.Rejected ||
    task.status === TaskStatusEnum.Approved;

  const dispatch = useAppDispatch();

  return (
    <div
      className="motivatorsTask"
      onClick={(e) => {
        e.stopPropagation();
        dispatch(updateModalValue('info'));
        dispatch(updateModalTask(task));
      }}
    >
      <div className="motivatorsTask__header">
        <h2 className="motivatorsTask__title">{task.summary}</h2>
        <img className="motivatorsTask__icon" src={type?.icon} alt="task" title={type?.title} />
      </div>
      <div className="motivatorsTask__description">
        <span className="motivatorsTask__fieldTitle">Описание: </span>{' '}
        <span className="italic">{task.description}</span>
      </div>
      {isInspectorTask ? (
        <div className="motivatorsTask__description">
          <span className="motivatorsTask__fieldTitle">Исполнитель: </span>
          {task.executor.name}
        </div>
      ) : (
        <>{isEndedTask ? <TaskCartStatus task={task} /> : <TaskCartDescription task={task} />}</>
      )}
      <div className="motivatorsTask__completion">
        <div className="motivatorsTask__coins">
          <span className="motivatorsTask__fieldTitle">Награда: </span>
          {task.points}
          <img className="motivatorsTask__coinsImg" src={moticoins} alt="moticoins" title="мотикойны" />
        </div>
        <MotivatorsCartBtns task={task} isInspectorTask={isInspectorTask} />
      </div>
    </div>
  );
}
