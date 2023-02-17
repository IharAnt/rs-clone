import MotivatorsTypeSelection from '../motivatorsTypeSelection'
import { props } from './types'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { getInspectorTasks, getTasks, updateModalValue } from '../../store/motivatorsStore/sliceTasks/tasks'
import './style.css'

export default function MotivatorsNavigation({ content, setContent }: props) {

  const [menu, setMenu] = useState(false)
  const dispatch = useAppDispatch()
  const userId = useAppSelector((state) => state.appState.profile.id)

  return (
    <div className='motivatorsNav'>
      <div className="motivatorsNav__item">
        <MotivatorsTypeSelection content={content} setContent={setContent} menu={menu} setMenu={setMenu} />
        <input className='motivators-block' type={'text'} placeholder={'поиск'}></input>
      </div>
      <div className="motivatorsNav__item">
        <button className='motivators-block motivatorsNav__btn' disabled={content === 'myTasks' ? false : true} onClick={() => {
          dispatch(updateModalValue('create'))
        }}>Добавить мотиватор +</button>
        <div className='motivatorsNav__update' onClick={() => { 
          dispatch(getTasks({ id: userId }))
          dispatch(getInspectorTasks({ id: userId }))
          }}></div>
      </div>
    </div>
  )
}
