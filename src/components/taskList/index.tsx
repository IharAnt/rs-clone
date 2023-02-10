import React from 'react'
import { props } from './types'
import TaskCart from '../taskCart'
import './style.css'

export default function taskList({data}: props) {
  return (
    <div className='motivatorsTask__list'>
      {data.map((task) => <TaskCart task={task}/>)}
    </div>
  )
}
