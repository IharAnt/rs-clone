import { props } from './types';
import TaskStatusEnum from '../../types/enums/TaskStatusEnum';

export default function TaskCartStatus({ task }: props) {
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
    <>
      {task.messages ? (
        <div>
          <div className="motivatorsTask__description">
            {task.messages[0] ? (
              <>
                <span className="motivatorsTask__fieldTitle">Комментарий: </span>
                <span className="italic"> {task.messages[0].message}</span>{' '}
              </>
            ) : (
              ''
            )}
          </div>
          <div className="motivatorsTask__description">
            <span className="motivatorsTask__fieldTitle">Статус: </span>
            {getTaskStatus()}
          </div>
        </div>
      ) : (
        <div className="motivatorsTask__description">
          {' '}
          <span className="motivatorsTask__fieldTitle">Статус: </span> {getTaskStatus()}
        </div>
      )}
    </>
  );
}
