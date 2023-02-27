import './style.css';
import Select from 'react-select';
import { selectStyle, options, selectStyleError } from './options';
import { useState, useEffect } from 'react';
import CreateTaskHepler from '../createTaskHepler';
import { useInput, useSelect } from './hooks';
import { useAppDispatch, useAppSelector } from '../../store';
import { getUsers, selectMotivatorsPage, updateModalValue } from '../../store/motivatorsStore/sliceTasks/tasks';
import { IUser } from '../../types/interfaces/IUser';
import { createTask } from '../../store/motivatorsStore/sliceTasks/tasks';
import { IUpdateTask } from '../../types/interfaces/ITask';
import TaskStatusEnum from '../../types/enums/TaskStatusEnum';
import TaskTypeEnum from '../../types/enums/TaskTypeEnum';
import { onChangeExecutor, optionSelectUser } from './types';

export default function CreateTask() {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.appState.profile);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useAppSelector((state) => state.tasks.users);
  let executors = users.map((user: IUser) => {
    return { value: user.name, label: user.name };
  });

  let inspectors = executors.filter((inspector) => inspector.value !== profile.name);
  const myself = executors.find((executor) => executor.value === profile.name);

  const executor = useSelect();
  const taskType = useSelect();
  const inspector = useSelect();

  useEffect(() => {
    if (myself) executor.change(myself);
  }, [users]);

  const [executorMyself, setExecutorMyself] = useState(true);
  const [errorText, setErrorText] = useState('');
  const [helperName, setHelperName] = useState(false);
  const [helperDescription, setHelperDescription] = useState(false);
  const [helperAward, setHelperAward] = useState(false);
  const [taskDeadline, setTaskDeadline] = useState('');
  const summary = useInput('', { isEmpty: true, maxLength: 40 });
  const description = useInput('', { isEmpty: true, maxLength: 200 });

  const award = useInput('', { isEmpty: true, maxLength: 4, isCorrectNumber: 2 });
  const [validData, setValidData] = useState(false);

  const unvalidInspector = !inspector.value;
  const unvalidSummary = summary.minLengthError || summary.isEmptyError;
  const unvalidDescription = description.minLengthError || description.isEmptyError;
  const unvalidTaskType = !taskType.value;
  const unvalidAward = award.isCorrectNumberError;

  const closeHelpers = () => {
    if (helperName) setHelperName(false);
    if (helperDescription) setHelperDescription(false);
    if (helperAward) setHelperAward(false);
  };

  const createTaskHandler = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    summary.onBlur();
    inspector.onBlur();
    description.onBlur();
    award.onBlur();
    taskType.onBlur();

    if (validData) {
      const newTask: IUpdateTask = {
        executor: users.find((user) => user.name === executor.value?.value) as IUser,
        inspector: users.find((user) => user.name == inspector.value?.value) as IUser,
        summary: summary.value,
        description: description.value,
        dueDate: taskDeadline,
        type: taskType.value?.value as TaskTypeEnum,
        status: TaskStatusEnum.Open,
        points: +award.value,
      };
      setErrorText('');
      dispatch(createTask({ task: newTask, id: profile.id }));
      if (profile.id === newTask.executor.id) dispatch(selectMotivatorsPage('myTasks'));
      if (profile.id === newTask.inspector.id) dispatch(selectMotivatorsPage('myInspectorsTasks'));
    } else {
      setErrorText('Заполните данные правильно!');
    }
  };

  const error = useAppSelector((state) => state.tasks.errorMessage);
  const loading = useAppSelector((state) => state.tasks.loadingTask);

  useEffect(() => {
    if (validData && !error && !loading) {
      setErrorText('');
      dispatch(updateModalValue(null));
    }
  }, [loading]);

  useEffect(() => {
    if (error) setErrorText(error);
  }, [error]);

  useEffect(() => {
    if (!(!inspector.value || unvalidSummary || unvalidDescription || unvalidTaskType || unvalidAward)) {
      setValidData(true);
    } else {
      setValidData(false);
    }
  }, [summary, description, inspector, award, taskType]);

  const onChangeExecutor: onChangeExecutor = (option) => {
    if (option.value !== profile.name) {
      setExecutorMyself(false);
      inspector.change(myself as optionSelectUser);
    } else {
      setExecutorMyself(true);
      inspector.change(null);
    }
    executor.change(option);
  };

  return (
    <form action="">
      <div className="createTask" onClick={closeHelpers}>
        <h2 className="createTask__title">Создание Мотиватора: </h2>
        <div className="createTask__field">
          <div className="createTask__fieldName">
            <div className="createTask__fieldNameText">Исполнитель: </div>
          </div>
          <Select
            value={executor.value}
            className="createTask__input createTask__input-select"
            onBlur={() => {
              executor.onBlur();
            }}
            onChange={(option) => onChangeExecutor(option as optionSelectUser)}
            options={executors}
            styles={selectStyle}
            placeholder={'Выберите исполнителя'}
          />
        </div>
        <div className="createTask__field">
          <div className="createTask__fieldName">
            <div className="createTask__fieldNameText">Проверяющий: </div>
          </div>
          <Select
            value={inspector.value}
            className="createTask__input createTask__input-select"
            onBlur={() => {
              inspector.onBlur();
            }}
            onChange={(option) => inspector.change(option)}
            options={executorMyself ? inspectors : [myself as optionSelectUser]}
            styles={unvalidInspector && inspector.isDirty ? selectStyleError : selectStyle}
            placeholder={'Выберите проверяющего'}
          />
        </div>
        <hr className="createTask__strip" />
        <div className="createTask__field">
          <div className="createTask__fieldName">
            <div className="createTask__fieldNameText">Название: </div>
            <CreateTaskHepler
              message={'Название должно быть не больше 40 символов'}
              helper={helperName}
              setHelper={setHelperName}
              key={helperName.toString()}
            />
          </div>
          <input
            className={
              unvalidSummary && summary.isDirty ? 'createTask__input createTask__input-red' : 'createTask__input'
            }
            type="text"
            value={summary.value}
            onBlur={() => summary.onBlur()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => summary.onChange(e)}
          />
        </div>
        <div className="createTask__field">
          <div className="createTask__fieldName">
            <div className="createTask__fieldNameText">Описание: </div>
            <CreateTaskHepler
              message={'Описание должно быть не больше 200 символов'}
              helper={helperDescription}
              setHelper={setHelperDescription}
              key={helperDescription.toString()}
            />
          </div>
          <textarea
            className={
              unvalidDescription && description.isDirty
                ? 'createTask__input createTask__input-description createTask__input-red'
                : 'createTask__input createTask__input-description'
            }
            value={description.value}
            onBlur={description.onBlur}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => description.onChange(e)}
          ></textarea>
        </div>
        <div className="createTask__field">
          <div className="createTask__fieldName">Дедлайн (необязательно): </div>
          <input
            className="createTask__input"
            type="date"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTaskDeadline(event.target.value)}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        <div className="createTask__field">
          <div className="createTask__fieldName">Тип: </div>
          <Select
            value={taskType.value}
            className="createTask__input createTask__input-select"
            options={options}
            styles={unvalidTaskType && taskType.isDirty ? selectStyleError : selectStyle}
            placeholder={'Выберите тип задачи'}
            onBlur={() => {
              taskType.onBlur();
            }}
            onChange={(option) => taskType.change(option)}
          />
        </div>
        <div className="createTask__field">
          <div className="createTask__fieldName">
            <div className="createTask__fieldNameText">Награда: </div>
            <CreateTaskHepler
              message={'от 10 до 9999 мотикойнов. Награда может быть переопределена проверяющим.'}
              helper={helperAward}
              setHelper={setHelperAward}
              key={helperAward.toString()}
            />
          </div>
          <input
            className={unvalidAward && award.isDirty ? 'createTask__input createTask__input-red' : 'createTask__input'}
            type="number"
            value={award.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => award.onChange(e)}
            onBlur={award.onBlur}
          />
        </div>
        <div className="createTask__field">
          <input
            type={'submit'}
            onClick={createTaskHandler}
            value="Создать"
            disabled={loading ? true : false}
            className="motivators-btn createTask__btn"
          />
          <div className="createTask__error">{errorText}</div>
          {loading ? <div className="modal-loadingItem"></div> : ''}
        </div>
      </div>
    </form>
  );
}
