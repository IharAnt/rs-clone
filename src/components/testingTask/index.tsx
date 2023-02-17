import { props } from './types'
import './style.css'
import { useAppDispatch } from '../../store'
import { updateModalTask, updateModalValue } from '../../store/motivatorsStore/sliceTasks/tasks'

export default function TestingTask({ task }: props) {

  const dispatch = useAppDispatch()

  return (
    <div className='motivatorsTesting__item motivatorsTesting-grid'>
      <h2 className='motivatorsTesting__name'>{task.summary}</h2>
      <div className='motivatorsTesting__description'>{task.description}</div>
      <div className='motivatorsTesting__report'>{task.taskReport}</div>
      <button className='motivators-block motivatorsTask__btn motivatorsTesting__btn' onClick={() => {
        dispatch(updateModalValue('test'))
        dispatch(updateModalTask(task))
      }}>проверить</button>
    </div>
  )
}
