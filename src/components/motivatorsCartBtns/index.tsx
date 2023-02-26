import { props } from './types';
import TaskStatusEnum from '../../types/enums/TaskStatusEnum';
import { updateModalTask, updateModalValue, updateTask } from '../../store/motivatorsStore/sliceTasks/tasks';
import { useAppDispatch } from '../../store';

export default function MotivatorsCartBtns({ task, isInspectorTask }: props) {
  const dispatch = useAppDispatch();

  return (
    <div>
      {isInspectorTask ? (
        <>
          {task.status === TaskStatusEnum.Resolved ? (
            <button
              className="motivators-block motivatorsTask__btn motivatorsTask__btn--open"
              onClick={() => {
                dispatch(updateModalValue('test'));
                dispatch(updateModalTask(task));
              }}
            >
              проверить
            </button>
          ) : (
            ''
          )}
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
