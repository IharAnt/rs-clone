import React from 'react'
import './style.css'
import { props } from './types'

export default function ModalTestTask({ task }: props) {
  return (
    <div className='testTask'>
      <h2 className='testTask__title'>Проверка Задачи:</h2>
      <div className="testTask__field">
        <div className="testTask__fieldName">Задание: </div>
        <div className="testTask__fieldValue">{task.summary}</div>
      </div>
      <div className="testTask__field">
        <div className="testTask__fieldName">Отчёт о работе: </div>
        <div className="testTask__fieldValue">{task.taskReport}</div>
      </div>
      <div className="testTask__field">
        <div className="testTask__fieldName">Отчёт о проверке: </div>
        <textarea className="testTask__fieldValue testTask__textarea"></textarea>
      </div>
      <div className="testTask__btns">
        <button className="testTask__btn testTask__btn-approve motivators-btn">принять</button>
        <button className="testTask__btn motivators-btn testTask__btn-reject">отклонить</button>
      </div>
    </div>
  )
}
