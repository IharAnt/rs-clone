import { props } from './types';

export default function TaskCartDescription({ task }: props) {
  return (
    <div>
      <div className="motivatorsTask__description">
        Описание: <span className="italic">{task.description}</span>
      </div>
      <div className="motivatorsTask__deadline">Дедлайн: {task.dueDate ? task.dueDate : 'нет'}</div>
    </div>
  );
}
