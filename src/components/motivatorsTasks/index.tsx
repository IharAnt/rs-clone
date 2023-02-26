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
import { props } from './types';

export default function MotivatorsTasks({ isInspectorsTasks }: props) {
  const executorTasks = useAppSelector((state) => state.tasks.tasks);
  const inspectorTasks = useAppSelector((state) => state.tasks.inspectorTasks);

  const executorAllTasks = useAppSelector((state) => state.tasks.allTasks);
  const inspectorAllTasks = useAppSelector((state) => state.tasks.allInspectorTasks);

  const allData = isInspectorsTasks ? inspectorAllTasks : executorAllTasks;
  const data = isInspectorsTasks ? inspectorTasks : executorTasks;

  return (
    <>
      {data.length !== 0 ? (
        <div className="motivatorsTask-grid">
          <div className="motivatorsTask-column">
            <MotivatorsTaskHeader title="Открыто" icon={open} />
            <TaskList
              data={data.filter((task) => task.status === TaskStatusEnum.Open)}
              isInspectorsTasks={isInspectorsTasks}
            />
          </div>
          <div className="motivatorsTask-column">
            <MotivatorsTaskHeader title="В работе" icon={inProcess} />
            <TaskList
              data={data.filter((task) => task.status === TaskStatusEnum.Inprogress)}
              isInspectorsTasks={isInspectorsTasks}
            />
          </div>
          <div className="motivatorsTask-column">
            <MotivatorsTaskHeader title="Тестируется" icon={inTesting} />
            <TaskList
              data={data.filter((task) => task.status === TaskStatusEnum.Resolved)}
              isInspectorsTasks={isInspectorsTasks}
            />
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
              isInspectorsTasks={isInspectorsTasks}
            />
          </div>
        </div>
      ) : allData.length !== 0 ? (
        <EmptyCart />
      ) : (
        <EmptyMotivators />
      )}
    </>
  );
}
