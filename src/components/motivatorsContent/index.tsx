import MotivatorsTaskHeaders from '../motivatorsTaskHeaders'
import MotivatorsTasks from '../motivatorsTasks'
import TestingTasksList from '../testingTasksList'
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
        {content === 'testedTasks' ? <TestingTasksList /> : ''}
      </div>
    </div>
  )
}
