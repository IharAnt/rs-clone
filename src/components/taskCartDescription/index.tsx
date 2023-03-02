import { props } from './types';

export default function TaskCartDescription({ task }: props) {
  return (
    <div>
      <div className="motivatorsTask__deadline">
        <span className="motivatorsTask__fieldTitle">Дедлайн:</span> {task.dueDate ? task.dueDate : 'нет'}
      </div>
    </div>
  );
}
