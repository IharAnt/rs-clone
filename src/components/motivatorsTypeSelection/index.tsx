import React from 'react'
import { props } from './types'
import arrow from '../../assets/icons/icon-arrow.png'
import './style.css'

export default function MotivatorsTypeSelection({ content, setContent, menu, setMenu }: props) {
  return (
    <div className='selectTypeMode'>
      <div className='selectTypeMode__input motivators-block' onClick={() => setMenu(!menu)} >
        <p>{content === 'myTasks' ? 'Мои мотиваторы' : 'На проверке'}</p>
        <img className={`selectTypeMode__arrow ${menu ? 'opened' : 'closed'}`} src={arrow} alt="arrow" />
      </div>
      <ul className={`selectTypeMode__menu ${menu ? 'opened' : 'closed'}`}>
        <li className={`selectTypeMode__item ${content === 'myTasks' ? 'selected' : ''}`} onClick={() => {
          setContent('myTasks')
          setMenu(false)
        }}>Мои задачи</li>
        <li className={`selectTypeMode__item ${content === 'testedTasks' ? 'selected' : ''}`} onClick={() => {
          setContent('testedTasks')
          setMenu(false)
        }}>На проверке</li>
      </ul>
    </div>
  )
}
