import './style.css'
import Select from 'react-select';
import { props } from './types';
import { selectStyle, options, selectStyleError } from './options';
import { useState, useEffect } from 'react';
import CreateTaskHepler from '../createTaskHepler';
import { useInput, useSelect } from './hooks';
import { useAppDispatch, useAppSelector } from '../../store';
import { getUsers } from '../../store/motivatorsStore/sliceTasks/tasks';
import { IUser } from '../../types/interfaces/IUser';
import { createTask } from '../../store/motivatorsStore/sliceTasks/tasks';
import { updateCreateFulfilled } from '../../store/motivatorsStore/sliceTasks/tasks';
import { IUpdateTask } from '../../types/interfaces/ITask';
import TaskStatusEnum from '../../types/enums/TaskStatusEnum';
import TaskTypeEnum from '../../types/enums/TaskTypeEnum';

export default function CreateTask({ setModal }: props) {

  const dispatch = useAppDispatch()
  const profile =  useAppSelector((state) => state.appState.profile)

  useEffect(() => {
    dispatch(getUsers())
  },
    [dispatch]
  )

  const users = useAppSelector((state) => state.tasks.users)

  const inspectors = users.map((user: IUser) => { return { value: user.name, label: user.name } });
  const [errorText, setErrorText] = useState('')

  const [helperName, setHelperName] = useState(false)
  const [helperDescription, setHelperDescription] = useState(false)
  const [helperAward, setHelperAward] = useState(false)
  const [taskDeadline, setTaskDeadline] = useState('')
  const summary = useInput('', { isEmpty: true, maxLength: 40 })
  const inspector = useSelect()
  const description = useInput('', { isEmpty: true, maxLength: 100 })
  const taskType = useSelect()
  const award = useInput('', { isEmpty: true, maxLength: 4, isCorrectNumber: 2 })
  const [validData, setValidData] = useState(false)

  const unvalidInspector = !inspector.value
  const unvalidSummary = (summary.minLengthError || summary.isEmptyError)
  const unvalidDescription = (description.minLengthError || description.isEmptyError)
  const unvalidTaskType = !taskType.value
  const unvalidAward = (award.isCorrectNumberError)

  const closeHelpers = () => {
    if (helperName) setHelperName(false);
    if (helperDescription) setHelperDescription(false);
    if (helperAward) setHelperAward(false);
  }

  const createTaskReject = useAppSelector((state) => state.tasks.createTaskReject)
  const createTaskPending = useAppSelector((state) => state.tasks.createTaskPending)
  const createTaskFulfilled = useAppSelector((state) => state.tasks.createTaskFulfilled)

  const createTaskHandler = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()

    summary.onBlur()
    inspector.onBlur()
    description.onBlur()
    award.onBlur()
    taskType.onBlur()

    if (validData) {
      const newTask: IUpdateTask = { executor: { id: profile.id, name: profile.name, email: profile.email } as IUser, inspector: users.find((user) => user.name == inspector.value?.value) as IUser, summary: summary.value, description: description.value, dueDate: taskDeadline, type: taskType.value?.value as TaskTypeEnum, status: TaskStatusEnum.Open, points: +award.value }
      setErrorText('')
      dispatch(createTask({ task: newTask }))
    } else {
      setErrorText('Заполните данные правильно!')
    }
  }

  useEffect(() => {
    if (createTaskFulfilled) {
      summary.clear();
      inspector.clear();
      description.clear();
      award.clear();
      taskType.clear();
      setErrorText('');
      dispatch(updateCreateFulfilled())
      setModal(false);
    }
  }, [createTaskFulfilled])

  useEffect(() => {
    if (createTaskReject) setErrorText('ошибка на стороне сервера')
  }, [createTaskReject])

  useEffect(() => {
    if (!(!inspector.value || unvalidSummary || unvalidDescription || unvalidTaskType || unvalidAward)) {
      setValidData(true)
    } else {
      setValidData(false)
    }
  }, [summary, description, inspector, award, taskType])

  return (
    <form action="">
      <div className='createTask' onClick={closeHelpers}>
        <h2 className='createTask__title'>Создание Мотиватора: </h2>
        <div className="createTask__field">
          <div className="createTask__fieldName">
            <div className="createTask__fieldNameText">Проверяющий: </div>
          </div>
          <Select value={inspector.value} className='createTask__input createTask__input-select' onBlur={() => { inspector.onBlur() }} onChange={(option) => inspector.onChange(option)} options={inspectors} styles={unvalidInspector && inspector.isDirty ? selectStyleError : selectStyle} placeholder={'Выберите проверяющего'} />
        </div>
        <hr className='createTask__strip' />
        <div className="createTask__field">
          <div className="createTask__fieldName">
            <div className="createTask__fieldNameText">Название: </div>
            <CreateTaskHepler message={'Название должно быть не больше 40 символов'} helper={helperName} setHelper={setHelperName} key={helperName.toString()} />
          </div>
          <input className={unvalidSummary && summary.isDirty ? 'createTask__input createTask__input-red' : 'createTask__input'} type="text" value={summary.value} onBlur={() => summary.onBlur()} onChange={(e: React.ChangeEvent<HTMLInputElement>) => summary.onChange(e)} />
        </div>
        <div className="createTask__field">
          <div className="createTask__fieldName">
            <div className="createTask__fieldNameText">Описание: </div>
            <CreateTaskHepler message={'Описание должно быть не больше 100 символов'} helper={helperDescription} setHelper={setHelperDescription} key={helperDescription.toString()} />
          </div>
          <textarea className={unvalidDescription && description.isDirty ? 'createTask__input createTask__input-description createTask__input-red' : 'createTask__input createTask__input-description'} value={description.value} onBlur={description.onBlur} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => description.onChange(e)}></textarea>
        </div>
        <div className="createTask__field">
          <div className="createTask__fieldName">Дедлайн (необязательно): </div>
          <input className='createTask__input' type="date" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTaskDeadline(event.target.value)} min={new Date().toISOString().split('T')[0]} />
        </div>
        <div className="createTask__field">
          <div className="createTask__fieldName">Тип: </div>
          <Select value={taskType.value} className='createTask__input createTask__input-select' options={options} styles={unvalidTaskType && taskType.isDirty ? selectStyleError : selectStyle} placeholder={'Выберите тип задачи'} onBlur={() => { taskType.onBlur() }} onChange={(option) => taskType.onChange(option)} />
        </div>
        <div className="createTask__field">
          <div className="createTask__fieldName">
            <div className="createTask__fieldNameText">Награда: </div>
            <CreateTaskHepler message={'от 10 до 9999 мотикойнов. Награда может быть переопределена проверяющим.'} helper={helperAward} setHelper={setHelperAward} key={helperAward.toString()} />
          </div>
          <input className={unvalidAward && award.isDirty ? 'createTask__input createTask__input-red' : 'createTask__input'} type="number" value={award.value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => award.onChange(e)} onBlur={award.onBlur} />
        </div>
        <div className="createTask__field">
          <input type={'submit'} onClick={createTaskHandler} value='Создать' disabled={createTaskPending ? true : false} className='motivators-btn createTask__btn' />
          <div className="createTask__error">{errorText}</div>
        </div>
      </div>
    </form>
  )
}