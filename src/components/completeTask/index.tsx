import { props } from './types'
import './style.css'
import inspector from '../../assets/icons/inspector.png'
import download from '../../assets/icons/download.png'

export default function CompleteTask({ task }: props) {
  return (
    <div className='completeTask'>
      <h2 className='completeTask__name'>{task.summary}</h2>
      <div className="completeTask__load">
      <div className='completeTask__inspector'><img className='completeTask__inspectorImg' src={inspector} alt="inspector" title='проверяющий' /> {task.inspector.name}</div>
      <textarea className='completeTask__report' placeholder='Отчёт о работе' name="text" />
      <div className="completeTask__file input__wrapper">
        <input name="file" type="file" id="input__file" className="input input__file" multiple />
        <label htmlFor="input__file" className="input__file-button">
          <span className="input__file-icon-wrapper"><img className="input__file-icon" src={download} alt="Выбрать файл" width="25" /></span>
          <span className="input__file-button-text">Выберите файл</span>
        </label>
      </div>
      </div>
      <div className="completeTask__btns">
        <button className='completeTask__btn completeTask__btn-approve'>Сдать задачу</button>
        <button className='completeTask__btn completeTask__btn-cancel'>Отказаться от выполнения</button>
      </div>
    </div>
  )
}
