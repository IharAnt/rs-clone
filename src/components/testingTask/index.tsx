import { props } from './types'
import './style.css'
import { useState } from 'react'
import Modal from '../modal'

export default function TestingTask({ task }: props) {

  const [modal, setModal] = useState(false)

  return (
    <div className='motivatorsTesting__item motivatorsTesting-grid'>
      <h2 className='motivatorsTesting__name'>{task.summary}</h2>
      <div className='motivatorsTesting__description'>{task.description}</div>
      <div className='motivatorsTesting__report'>{task.taskReport}</div>
      <button className='motivators-block motivatorsTask__btn motivatorsTesting__btn' onClick={() => setModal(true)}>проверить</button>
      <Modal isOpen={modal} setModal={setModal}>
        Проверка
      </Modal>
    </div>
  )
}
