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
import { updateModalTask, updateModalValue, updateTask } from '../../store/motivatorsStore/sliceTasks/tasks';
import { useAppDispatch } from '../../store';

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

  function getTaskStatus() {
    switch (task.status) {
      case TaskStatusEnum.Cancelled:
        return 'Отменена';
      case TaskStatusEnum.Rejected:
        return 'Отклонена';
      default:
        return 'Принята';
    }
  }

  return (
    <div className="motivatorsTask">
      <div className="motivatorsTask__header">
        <h2 className="motivatorsTask__title">{task.summary}</h2>
        <img className="motivatorsTask__icon" src={type?.icon} alt="task" title={type?.title} />
      </div>
      {isEndedTask ? (
        task.messages ? (
          <div>
            <div className="motivatorsTask__description">
              {task.messages[0] ? (
                <>
                  Комментарий проверяющего:<span className="italic"> {task.messages[0].message}</span>{' '}
                </>
              ) : (
                ''
              )}
            </div>
            <div className="motivatorsTask__description">Статус: {getTaskStatus()}</div>
          </div>
        ) : (
          <div className="motivatorsTask__description">Статус: {getTaskStatus()}</div>
        )
      ) : (
        <div>
          <div className="motivatorsTask__description">
            Описание: <span className="italic">{task.description}</span>
          </div>
          <div className="motivatorsTask__deadline">Дедлайн: {task.dueDate ? task.dueDate : 'нет'}</div>
        </div>
      )}
      {isInspectorTask ? <>Исполнитель Проверяющий</> : <></>}
      <div className="motivatorsTask__completion">
        <div className="motivatorsTask__coins">
          Награда: {task.points}{' '}
          <img className="motivatorsTask__coinsImg" src={moticoins} alt="moticoins" title="мотикойны" />
        </div>
        {task.status === TaskStatusEnum.Open ? (
          <button
            className="motivators-block motivatorsTask__btn motivatorsTask__btn--open"
            onClick={() => {
              dispatch(updateTask({ taskId: task.id, updatedTask: { ...task, status: TaskStatusEnum.Inprogress } }));
            }}
          >
            выполнять
          </button>
        ) : (
          ''
        )}
        {task.status === TaskStatusEnum.Inprogress ? (
          <>
            <button
              className="motivators-block motivatorsTask__btn motivatorsTask__btn--inProgress"
              onClick={() => {
                dispatch(updateModalValue('complete'));
                dispatch(updateModalTask(task));
              }}
            >
              завершить
            </button>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
