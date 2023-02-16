import './style.css'
import { props } from './types'
import Linkify from 'react-linkify';
import { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import moticoins from '../../assets/img/motekoinIco.png'
import CreateTaskHepler from '../createTaskHepler';
import { updateTask } from '../../store/motivatorsStore/sliceTasks/tasks';
import { useAppDispatch } from '../../store';
import TaskStatusEnum from '../../types/enums/TaskStatusEnum';

export default function ModalTestTask({ task, setModal }: props) {

  const dispatch = useAppDispatch()

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [points, setPoints] = useState(task.points)
  const [pointsInput, setPointsInput] = useState(false)
  const [testReport, setTestReport] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const images = task.imgFiles?.map((img) => img.data) as string[];

  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const [helperAward, setHelperAward] = useState(false)

  const teskTaskHandler = (deny: boolean = false) => {
    if(!testReport) setErrorMessage('Напишите отчёт о проверке!')
    else {
      if (deny) {
        dispatch(updateTask({ taskId: task.id, updatedTask: { ...task, status: TaskStatusEnum.Rejected, messages: [{message: testReport, author: task.inspector}]}}))
      } else {
        dispatch(updateTask({ taskId: task.id, updatedTask: { ...task, status: TaskStatusEnum.Approved, messages: [{message: testReport, author: task.inspector}]}}))
      }
      setModal(false)
    }
  }

  return (
    <div className='testTask'>
      <h2 className='testTask__title'>Проверка:</h2>
      <div className="testTask__field">
        <div className="testTask__fieldName">Исполнитель: </div>
        <div className="testTask__fieldValue">{task.executor.name}</div>
      </div>
      <div className="testTask__field">
        <div className="testTask__fieldName">Задание: </div>
        <div className="testTask__fieldValue">{task.summary}</div>
      </div>
      <div className="testTask__field">
        <div className="testTask__fieldName">Описание: </div>
        <div className="testTask__fieldValue">{task.description}</div>
      </div>
      <div className="testTask__field">
        <div className="testTask__fieldName testTask__award">
          <div>Награда: </div>
          <CreateTaskHepler message={'от 10 до 9999 мотикойнов'} helper={helperAward} setHelper={setHelperAward} key={helperAward.toString()} />
        </div>
        <div className="testTask__fieldPoints">
          <div className='testTask__fieldValuePoints'>
            {pointsInput ?
              <input className='testTask__points testTask__points-input' onChange={(e) => setPoints(+e.target.value)} type='number' min='10' max='9999' value={points} /> :
              <div className='testTask__points testTask__points-block'>{points}</div>}
            <img className='motivatorsTask__coinsImg' title='Мотикойны' src={moticoins} alt="motincoins" />
          </div>
          {pointsInput ? <button className='motivatorsTask__pointsBtn' onClick={() => {
            if (!points) setPoints(task.points)
            if (points < 10) setPoints(10)
            if (points > 9999) setPoints(9999)
            setPointsInput(false)
          }}>сохранить</button> : <button className='motivatorsTask__pointsBtn' onClick={() => setPointsInput(true)}>изменить</button>}
        </div>
      </div>
      <div className="testTask__field">
        <div className="testTask__fieldName">Отчёт о работе: </div>
        <div className="testTask__fieldValue"><Linkify>{task.taskReport}</Linkify></div>
      </div>
      {images ? <div className="testTask__field">
        <div className="testTask__fieldName">Фотоотчёт: </div>
        <div style={{ display: 'flex' }}>
          {images.map((src, index) => (
            <img
              src={src}
              onClick={() => openImageViewer(index)}
              key={index}
              style={{ margin: "2px", height: '50px', cursor: 'pointer' }}
              alt=""
            />
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              onClose={closeImageViewer}
              disableScroll={false}
              backgroundStyle={{
                backgroundColor: "rgba(0,0,0,0.9)"
              }}
              closeOnClickOutside={true}
            />
          )}
        </div>
      </div>
        : ''}
      <hr className='mt-5' />
      <div className="testTask__field">
        <div className="testTask__fieldName">Отчёт о проверке: </div>
        <textarea className="testTask__fieldValue testTask__textarea" onChange={(e)=>setTestReport(e.target.value)}></textarea>
      </div>
      <div className='testTask__error'>{errorMessage}</div>
      <div className="testTask__btns">
        <button className="testTask__btn testTask__btn-approve motivators-btn" onClick={() => teskTaskHandler()}>принять</button>
        <button className="testTask__btn motivators-btn testTask__btn-reject" onClick={() => teskTaskHandler(true)}>отклонить</button>
      </div>
    </div>
  )
}
