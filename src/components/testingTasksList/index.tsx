import { useAppDispatch, useAppSelector } from '../../store'
import { useEffect } from 'react'
import { getInspectorTasks } from '../../store/motivatorsStore/sliceTasks/tasks'
import './style.css'
import TestingTask from '../testingTask'

export default function TestingTasksList() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getInspectorTasks({ 'id': '1' }))
  },
    [dispatch]
  )

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
