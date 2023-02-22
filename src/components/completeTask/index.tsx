import { props } from './types';
import './style.css';
import inspector from '../../assets/icons/inspector.png';
import download from '../../assets/icons/download.png';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { updateModalValue, updateTask } from '../../store/motivatorsStore/sliceTasks/tasks';
import TaskStatusEnum from '../../types/enums/TaskStatusEnum';
import { IImg } from '../../types/interfaces/IImg';

export default function CompleteTask({ task }: props) {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.tasks.loadingTask);

  const [images, setImages] = useState<IImg[]>([]);
  const [report, setReport] = useState('');
  const [reportDirty, setReportDirty] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [deny, setDeny] = useState(false);

  function readFileAsText(file: File) {
    return new Promise(function (resolve, reject) {
      let reader = new FileReader();
      reader.onload = function () {
        resolve({ name: file.name, data: reader.result });
      };
      reader.readAsDataURL(file);
    });
  }

  const inputFileImagesResult = (e: React.FormEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files) {
      const filesPromices = Array.from(files).map((file) => readFileAsText(file));
      Promise.all(filesPromices).then((values) => {
        setImages(Array.from([...images, ...(values as IImg[])]).slice(0, 5));
      });
    }
  };

  const error = useAppSelector((state) => state.tasks.errorMessage);

  useEffect(() => {
    setErrorText(error);
  }, [error]);

  useEffect(() => {
    if (!loading && !error && (report || deny)) dispatch(updateModalValue(null));
  }, [loading]);

  const completeTaskHandler = (deny: boolean = false) => {
    if (deny) {
      setDeny(true);
      dispatch(
        updateTask({ taskId: task.id, updatedTask: { ...task, status: TaskStatusEnum.Cancelled, taskReport: report } }),
      );
    } else {
      setReportDirty(true);
      if (!report) setErrorText('Добавьте отчёт!');
      else {
        dispatch(
          updateTask({
            taskId: task.id,
            updatedTask: { ...task, status: TaskStatusEnum.Resolved, taskReport: report, imgFiles: images },
          }),
        );
      }
    }
  };

  return (
    <div className="completeTask">
      <h2 className="completeTask__title">Завершение Мотиватора: </h2>
      <div className="completeTask__info">
        <div className="completeTask__field">Название: {task.summary}</div>
        <div className="completeTask__field">Описание: {task.description}</div>
      </div>
      <hr />
      <div className="completeTask__load">
        <div className="completeTask__field">Отчёт о работе: </div>
        <textarea
          value={report}
          onChange={(e) => setReport(e.target.value)}
          className="completeTask__report"
          name="text"
        />
        <div className="completeTask__fileHelper">
          При необходимости прикрепите фотографии результата выполнения (не более 5 фото)
        </div>
        <div className="completeTask__file input__wrapper">
          <input
            name="file"
            type="file"
            id="input__file"
            className="input input__file"
            onBlur={() => setReportDirty(true)}
            multiple
            accept="image/jpeg,image/png"
            onChange={(e) => inputFileImagesResult(e)}
          />
          <label htmlFor="input__file" className="input__file-button">
            <span className="input__file-icon-wrapper">
              <img className="input__file-icon" src={download} alt="Выбрать файл" width="25" />
            </span>
            <span className="input__file-button-text">Выберите фото</span>
          </label>
        </div>
        {images.length ? (
          <>
            <div className="completeTask__fileTitle">Прикрепленне фотографии: </div>
            <div className="completeTask__fileImages">
              {images.map((image, index) => (
                <div
                  className="completeTask__imageWrapper"
                  key={Date.now.toString() + index}
                  onClick={() => {
                    setImages(images.filter((el) => el !== image));
                  }}
                >
                  <img
                    className="completeTask__image"
                    src={image.data}
                    alt="loaded image"
                    key={Date.now.toString() + index}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          ''
        )}
      </div>
      <hr />
      <div className="completeTask__inspector">
        <img className="completeTask__inspectorImg" src={inspector} alt="inspector" title="проверяющий" />{' '}
        {task.inspector.name}
      </div>
      <div className="completeTask__error">{reportDirty ? errorText : ''}</div>
      <div className="completeTask__btns">
        <button
          className="motivators-btn completeTask__btn-approve"
          onClick={() => completeTaskHandler()}
          disabled={loading ? true : false}
        >
          Сдать задачу
        </button>
        <button
          className="motivators-btn completeTask__btn-cancel"
          onClick={() => completeTaskHandler(true)}
          disabled={loading ? true : false}
        >
          Отказаться от выполнения
        </button>
        {loading ? <div className="modal-loadingItem"></div> : ''}
      </div>
    </div>
  );
}
