import MotivatorsTypeSelection from '../motivatorsTypeSelection'
import { props } from './types'
import { useState } from 'react'
import Modal from '../modal'
import CreateTask from '../createTask'

export default function MotivatorsNavigation({content, setContent}: props ){

  const [menu, setMenu] = useState(false)
  const [modal, setModal] = useState(false)

  return (
    <div className='motivatorsNav'>
      <div className="motivatorsNav__item">
        <MotivatorsTypeSelection content={content} setContent={setContent} menu={menu} setMenu={setMenu} />
        <input className='motivators-block' type={'text'} placeholder={'поиск'}></input>
      </div>
      <div className="motivatorsNav__item">
        <button className='motivators-block' onClick={()=>{
          setModal(true)
          }}>добавить  свою задачу +</button>
      </div>
      <Modal isOpen={modal} setModal={setModal}>
        <CreateTask />
      </Modal>
    </div>
  )
}
