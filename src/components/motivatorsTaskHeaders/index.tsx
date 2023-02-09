import React from 'react'
import './style.css'
import open from '../../assets/icons/tasksStatus/open.png'
import inProcess from '../../assets/icons/tasksStatus/inProcess.png'
import inTesting from '../../assets/icons/tasksStatus/inTesting.png'
import closed from '../../assets/icons/tasksStatus/closed.png'
import MotivatorsTaskHeader from '../motivatorsTaskHeader'

export default function MotivatorsTaskHeaders() {

  const headers = [{ title: 'Открыто', icon: open }, { title: 'В работе', icon: inProcess }, { title: 'Тестируется', icon: inTesting }, { title: 'Закрыто', icon: closed }]

  return (
    <>
      {headers.map((header) => <MotivatorsTaskHeader title={header.title} icon={header.icon} />)}
    </>
  )
}
