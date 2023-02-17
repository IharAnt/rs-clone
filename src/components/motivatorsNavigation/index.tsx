import MotivatorsTypeSelection from '../motivatorsTypeSelection'
import { props } from './types'
import { useState } from 'react'
import Modal from '../modal'
import CreateTask from '../createTask'
import { useAppDispatch } from '../../store'
import { updateModalValue } from '../../store/motivatorsStore/sliceTasks/tasks'

export default function MotivatorsNavigation({content, setContent}: props ){

  const [menu, setMenu] = useState(false)
  const dispatch = useAppDispatch()
  // const [modal, setModal] = useState(false)

  return (
    <div className='motivatorsNav'>
      <div className="motivatorsNav__item">
        <MotivatorsTypeSelection content={content} setContent={setContent} menu={menu} setMenu={setMenu} />
        <input className='motivators-block' type={'text'} placeholder={'поиск'}></input>
      </div>
      <div className="motivatorsNav__item">
        <button className='motivators-block' onClick={()=>{
            dispatch(updateModalValue('create'))
          // setModal(true)
          }}>добавить  свою задачу +</button>
      </div>
      {/* <Modal isOpen={modal} setModal={setModal}>
        <CreateTask setModal={setModal}/>
      </Modal> */}
    </div>
  )
}
