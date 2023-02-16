import TaskList from '../taskList/index'
import TaskStatusEnum from '../../types/enums/TaskStatusEnum'
import {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { getTasks } from '../../store/motivatorsStore/sliceTasks/tasks'
import './style.css'

export default function MotivatorsTasks() {

  const userId = useAppSelector((state) => state.appState.profile.id)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTasks({'id': userId}))
  },
    [dispatch]
  )

  const data = useAppSelector((state) => state.tasks.tasks)

  return (
    <>
      <TaskList data={data.filter(task => task.status === TaskStatusEnum.Open)}/>
      <TaskList data={data.filter(task => task.status === TaskStatusEnum.Inprogress)}/>
      <TaskList data={data.filter(task => task.status === TaskStatusEnum.Resolved)}/>
      <TaskList data={data.filter(task => task.status === TaskStatusEnum.Cancelled || task.status === TaskStatusEnum.Rejected || task.status === TaskStatusEnum.Approved)}/>
    </>
  )
}
