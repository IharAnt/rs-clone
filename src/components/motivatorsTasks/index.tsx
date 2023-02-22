import TaskList from '../taskList/index';
import TaskStatusEnum from '../../types/enums/TaskStatusEnum';
import { useAppSelector } from '../../store';
import './style.css';
import EmptyMotivators from '../emptyMotivators';
import EmptyCart from '../emptySearch';
import MotivatorsTaskHeader from '../motivatorsTaskHeader';
import open from '../../assets/icons/tasksStatus/open.png';
import inProcess from '../../assets/icons/tasksStatus/inProcess.png';
import inTesting from '../../assets/icons/tasksStatus/inTesting.png';
import closed from '../../assets/icons/tasksStatus/closed.png';

export default function MotivatorsTasks() {
  const dataAll = useAppSelector((state) => state.tasks.allTasks);
  const data = useAppSelector((state) => state.tasks.tasks);

  return (
    <>
      {data.length !== 0 ? (
        <div className="motivatorsTask-grid">
          <div className="motivatorsTask-column">
            <MotivatorsTaskHeader title="Открыто" icon={open} />
            <TaskList data={data.filter((task) => task.status === TaskStatusEnum.Open)} />
          </div>
          <div className="motivatorsTask-column">
            <MotivatorsTaskHeader title="В работе" icon={inProcess} />
            <TaskList data={data.filter((task) => task.status === TaskStatusEnum.Inprogress)} />
          </div>
          <div className="motivatorsTask-column">
            <MotivatorsTaskHeader title="Тестируется" icon={inTesting} />
            <TaskList data={data.filter((task) => task.status === TaskStatusEnum.Resolved)} />
          </div>
          <div className="motivatorsTask-column">
            <MotivatorsTaskHeader title="Закрыто" icon={closed} />
            <TaskList
              data={data.filter(
                (task) =>
                  task.status === TaskStatusEnum.Cancelled ||
                  task.status === TaskStatusEnum.Rejected ||
                  task.status === TaskStatusEnum.Approved,
              )}
            />
          </div>
        </div>
      ) : dataAll.length !== 0 ? (
        <EmptyCart />
      ) : (
        <EmptyMotivators />
      )}
    </>
  );
}
