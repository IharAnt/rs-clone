import { useAppSelector } from '../../store'
import './style.css'
import TestingTask from '../testingTask'

export default function TestingTasksList() {

  const data = useAppSelector((state) => state.tasks.inspectorTasks)

  return (
    <>
      <div className="motivatorsTesting__headers motivatorsTesting-grid">
        <div>Задача: </div>
        <div>Описание:</div>
        <div>Отчёт: </div>
        <div></div>
      </div>
      <div className='motivatorsTesting'>
        {data.map((task) => <TestingTask task={task} key={task.description}></TestingTask>)}
      </div>
    </>
  )
}
