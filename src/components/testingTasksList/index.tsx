import { useAppSelector } from '../../store';
import './style.css';
import TestingTask from '../testingTask';
import EmptyTestTasks from '../emptyTestTasks';
import EmptyCart from '../emptySearch';

export default function TestingTasksList() {
  const data = useAppSelector((state) => state.tasks.inspectorResolvedTasks);
  const allData = useAppSelector((state) => state.tasks.allInspectorResolvedTasks);

  return (
    <>
      {data.length !== 0 ? (
        <>
          <div className="motivatorsTesting__headers motivatorsTesting-grid">
            <div></div>
            <div>Мотиватор: </div>
            <div>Описание:</div>
            <div>Отчёт: </div>
            <div></div>
          </div>
          <div className="motivatorsTesting">
            {data.map((task) => (
              <TestingTask task={task} key={task.id}></TestingTask>
            ))}
          </div>
        </>
      ) : allData.length !== 0 ? (
        <EmptyCart />
      ) : (
        <EmptyTestTasks />
      )}
    </>
  );
}
