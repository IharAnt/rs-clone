import { props } from './types';

export default function TaskCartDescription({ task }: props) {
  return (
    <div>
      <div className="motivatorsTask__deadline">Дедлайн: {task.dueDate ? task.dueDate : 'нет'}</div>
    </div>
  );
}
