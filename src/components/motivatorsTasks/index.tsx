import React from 'react'
import TaskList from '../taskList/index'
import { props } from './types'
import TaskStatusEnum from '../../types/enums/TaskStatusEnum'

export default function MotivatorsTasks({data}: props) {
  return (
    <>
      <TaskList data={data.filter(task => task.status === TaskStatusEnum.Open)}/>
      <TaskList data={data.filter(task => task.status === TaskStatusEnum.Inprogress)}/>
      <TaskList data={data.filter(task => task.status === TaskStatusEnum.Resolved)}/>
      <TaskList data={data.filter(task => task.status === TaskStatusEnum.Cancelled || task.status === TaskStatusEnum.Rejected || task.status === TaskStatusEnum.Approved)}/>
    </>
  )
}
