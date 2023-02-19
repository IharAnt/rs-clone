import TaskList from '../taskList/index'
import TaskStatusEnum from '../../types/enums/TaskStatusEnum'
import { useAppSelector } from '../../store'
import './style.css'
import MotivatorsTaskHeaders from '../motivatorsTaskHeaders'
import EmptyMotivators from '../emptyMotivators'

export default function MotivatorsTasks() {

  const data = useAppSelector((state) => state.tasks.tasks)

  return (
    <>
    {data.length !== 0 ?
            <div className='motivatorsTask-grid'>
            <MotivatorsTaskHeaders />
            <TaskList data={data.filter(task => task.status === TaskStatusEnum.Open)}/>
            <TaskList data={data.filter(task => task.status === TaskStatusEnum.Inprogress)}/>
            <TaskList data={data.filter(task => task.status === TaskStatusEnum.Resolved)}/>
            <TaskList data={data.filter(task => task.status === TaskStatusEnum.Cancelled || task.status === TaskStatusEnum.Rejected || task.status === TaskStatusEnum.Approved)}/>
          </div> :
          <EmptyMotivators />}
    </>

  )
}
