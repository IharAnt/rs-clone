import MotivatorsTaskHeaders from '../motivatorsTaskHeaders'
import MotivatorsTasks from '../motivatorsTasks'
import TestingTasksList from '../testingTasksList'
import { useState, useEffect } from 'react'
import { props } from './types'
import './style.css'
import Modal from '../modal'
import MotivatorsModal from '../motivatorsModal'
import { useAppSelector } from '../../store'

export default function MotivatorsContent({ content, setContent }: props) {

  const handleModal = (currentModal: string | null) => {
    if(currentModal) setModal(true)
    else setModal(false)
  }

  const [modal, setModal] = useState(false)
  const modalValue = useAppSelector((state)=> state.tasks.modal)

  useEffect(()=>{
    handleModal(modalValue)
  }, [modalValue])


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
        <Modal isOpen={modal} setModal={setModal}>
          <MotivatorsModal />
        </Modal>
      </div>
    </div>
  )
}
