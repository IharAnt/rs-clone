import './style.css';
import { props } from './types';
import Linkify from 'react-linkify';
import { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import moticoins from '../../assets/img/motekoinIco.png';
import CreateTaskHepler from '../createTaskHepler';
import { updateInspectorTask, updateModalValue } from '../../store/motivatorsStore/sliceTasks/tasks';
import { useAppDispatch, useAppSelector } from '../../store';
import TaskStatusEnum from '../../types/enums/TaskStatusEnum';
import { useEffect } from 'react';

export default function TestTask({ task }: props) {
  const dispatch = useAppDispatch();

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [points, setPoints] = useState(task.points);
  const [pointsInput, setPointsInput] = useState(false);
  const [testReport, setTestReport] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const loading = useAppSelector((state) => state.tasks.loadingTask);
  const images = task.imgFiles?.map((img) => img.data) as string[];

  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const [helperAward, setHelperAward] = useState(false);

  const error = useAppSelector((state) => state.tasks.errorMessage);

  useEffect(() => {
    if (!loading && testReport && !error) dispatch(updateModalValue(null));
    if (error) setErrorMessage(error);
  }, [loading]);

  const teskTaskHandler = (deny: boolean = false) => {
    if (!testReport) setErrorMessage('Напишите отчёт о проверке!');
    else {
      setErrorMessage('');
      if (deny) {
        dispatch(
          updateInspectorTask({
            taskId: task.id,
            updatedTask: {
              ...task,
              status: TaskStatusEnum.Rejected,
              messages: [{ message: testReport, author: task.inspector }],
            },
          }),
        );
      } else {
        dispatch(
          updateInspectorTask({
            taskId: task.id,
            updatedTask: {
              ...task,
              status: TaskStatusEnum.Approved,
              messages: [{ message: testReport, author: task.inspector }],
              points: pointsInput ? task.points : points,
            },
          }),
        );
      }
    }
  };

  return (
    <div className="testTask">
      <h2 className="testTask__title">Проверка:</h2>
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
          <CreateTaskHepler
            message={'от 10 до 9999 мотикойнов'}
            helper={helperAward}
            setHelper={setHelperAward}
            key={helperAward.toString()}
          />
        </div>
        <div className="testTask__fieldPoints">
          <div className="testTask__fieldValuePoints">
            {pointsInput ? (
              <input
                className="testTask__points testTask__points-input"
                onChange={(e) => setPoints(+e.target.value)}
                type="number"
                min="10"
                max="9999"
                value={points}
              />
            ) : (
              <div className="testTask__points testTask__points-block">{points}</div>
            )}
            <img className="motivatorsTask__coinsImg" title="Мотикойны" src={moticoins} alt="motincoins" />
          </div>
          {pointsInput ? (
            <button
              className="motivatorsTask__pointsBtn"
              onClick={() => {
                if (!points) setPoints(task.points);
                if (points < 10) setPoints(10);
                if (points > 9999) setPoints(9999);
                setPointsInput(false);
              }}
            >
              сохранить
            </button>
          ) : (
            <button className="motivatorsTask__pointsBtn" onClick={() => setPointsInput(true)}>
              изменить
            </button>
          )}
        </div>
      </div>
      <div className="testTask__field">
        <div className="testTask__fieldName">Отчёт о работе: </div>
        <div className="testTask__fieldValue">
          <Linkify
            componentDecorator={(decoratedHref, decoratedText, key) => (
              <a className="linkify" target="blank" href={decoratedHref} key={key}>
                {decoratedText}
              </a>
            )}
          >
            {task.taskReport}
          </Linkify>
        </div>
      </div>
      {images.length !== 0 ? (
        <div className="testTask__field">
          <div className="testTask__fieldName">Фотоотчёт: </div>
          <div style={{ display: 'flex' }}>
            {images.map((src, index) => (
              <img
                src={src}
                onClick={() => openImageViewer(index)}
                key={index}
                style={{ margin: '2px', height: '50px', cursor: 'pointer' }}
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
                  zIndex: '20',
                  backgroundColor: 'rgba(0,0,0,0.9)',
                }}
                closeOnClickOutside={true}
              />
            )}
          </div>
        </div>
      ) : (
        ''
      )}
      <hr className="mt-5" />
      <div className="testTask__field">
        <div className="testTask__fieldName">Отчёт о проверке: </div>
        <textarea
          className="testTask__fieldValue testTask__textarea"
          onChange={(e) => setTestReport(e.target.value)}
        ></textarea>
      </div>
      <div className="testTask__error">{errorMessage}</div>
      <div className="testTask__btns">
        <button className="testTask__btn testTask__btn-approve motivators-btn" onClick={() => teskTaskHandler()}>
          принять
        </button>
        <button className="testTask__btn motivators-btn testTask__btn-reject" onClick={() => teskTaskHandler(true)}>
          отклонить
        </button>
        {loading ? <div className="modal-loadingItem"></div> : ''}
      </div>
    </div>
  );
}
