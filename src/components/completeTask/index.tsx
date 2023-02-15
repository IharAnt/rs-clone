import { props } from './types'
import './style.css'
import inspector from '../../assets/icons/inspector.png'
import download from '../../assets/icons/download.png'
import { useState } from 'react'

export default function CompleteTask({ task }: props) {

  const [images, setImages] = useState<string[]>([])

  function readFileAsText(file: File){
    return new Promise(function(resolve,reject){
        let reader = new FileReader();
        reader.onload = function(){
            resolve(reader.result);
        };
        reader.readAsDataURL(file);
    });
}

  const inputFileImagesResult = (e: React.FormEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files) {
      const mas: any = []
      Array.from(files).forEach((file) => {
        if (file) {
          mas.push(readFileAsText(file))
        }
      })
      Promise.all(mas).then((values) => {
        setImages(Array.from(new Set([...images, ...values])).slice(0, 5))
      });
    }
  }

  return (
    <div className='completeTask'>
      <h2 className='completeTask__title'>Завершение Мотиватора: </h2>
      <div className="completeTask__info">
        <div className='completeTask__field'>Название: {task.summary}</div>
        <div className='completeTask__field'>Описание: {task.description}</div>
      </div>
      <hr />
      <div className="completeTask__load">
        <div className='completeTask__field'>Отчёт о работе: </div>
        <textarea className='completeTask__report' name="text" />
        <div className='completeTask__fileHelper'>При необходимости прикрепите фотографии результата выполнения</div>
        <div className="completeTask__file input__wrapper">
          <input name="file" type="file" id="input__file" className="input input__file" multiple accept="image/jpeg,image/png" onChange={(e) => inputFileImagesResult(e)} />
          <label htmlFor="input__file" className="input__file-button">
            <span className="input__file-icon-wrapper"><img className="input__file-icon" src={download} alt="Выбрать файл" width="25" /></span>
            <span className="input__file-button-text">Выберите фото</span>
          </label>
        </div>
        {images.length ? <>
          <div className='completeTask__fileTitle'>Прикрепленне фотографии: </div>
          <div className='completeTask__fileImages'>
            {images.map((image) => <img className='completeTask__image' onClick={() => { setImages(images.filter((el) => el !== image)) }} src={image} alt="loaded image" key={image} />)}
          </div>
        </>
          : ''}
      </div>
      <hr />
      <div className='completeTask__inspector'><img className='completeTask__inspectorImg' src={inspector} alt="inspector" title='проверяющий' /> {task.inspector.name}</div>
      <div className='completeTask__btns'>
        <button className='motivators-btn completeTask__btn-approve'>Сдать задачу</button>
        <button className='motivators-btn completeTask__btn-cancel'>Отказаться от выполнения</button>
      </div>
    </div>
  )
}
