import React from 'react'
import MotivatorsTaskHeaders from '../motivatorsTaskHeaders'
import MotivatorsTasks from '../motivatorsTasks'
import TaskTesting from '../taskTesting'
import { props } from './types'
import './style.css'

export default function MotivatorsContent({ content, setContent }: props) {
  return (
    <div className="motivatorsCnt">
      <div className="motivatorsCnt-container">
        {content === 'myTasks' ?
          <div className='motivatorsTask-grid'>
            <MotivatorsTaskHeaders />
            <MotivatorsTasks />
          </div>
          : ''}
        {content === 'testedTasks' ? <TaskTesting /> : ''}
      </div>
    </div>
  )
}
