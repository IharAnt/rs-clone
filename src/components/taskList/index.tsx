import React from 'react'
import { props } from './types'
import TaskCart from '../taskCart'

export default function taskList({data}: props) {
  return (
    <div>
      {data.map((task) => <TaskCart task={task}/>)}
    </div>
  )
}
