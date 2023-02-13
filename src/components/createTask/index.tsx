import './style.css'
import Select from 'react-select';
import { optionInspectorType } from './types';
import { selectStyle, options, selectStyleError } from './options';
import { useState, useEffect } from 'react';
import CreateTaskHepler from '../createTaskHepler';
import { useInput, useSelect } from './hooks';


const inspectors: optionInspectorType[] = [
  {
    value: 'Andrey',
    label: 'Андрей',
  },
  {
    value: 'Ihor',
    label: 'Игорь',
  },
  {
    value: 'Stepan',
    label: 'Степан',
  },
]

export default function CreateTask() {

  const [helperName, setHelperName] = useState(false)
  const [helperDescription, setHelperDescription] = useState(false)
  const [helperAward, setHelperAward] = useState(false)
  const [taskDeadline, setTaskDeadline] = useState('')

  const closeHelpers = () => {
    if (helperName) setHelperName(false);
    if (helperDescription) setHelperDescription(false);
    if (helperAward) setHelperAward(false);
  }

  const summary = useInput('', { isEmpty: true, maxLength: 40 })
  const inspector = useSelect()
  const description = useInput('', { isEmpty: true, maxLength: 100 })
  const taskType = useSelect()
  const award = useInput('', { isEmpty: true, maxLength: 4, isCorrectNumber: 2 })

  const [validData, setValidData] = useState(false)

  useEffect(() => {
    if (summary.value && description.value && inspector.value && award.value && taskType.value) {
      setValidData(true)
    } else {
      setValidData(false)
    }
  }, [summary.value, description.value, inspector.value, award.value, taskType.value])

  return (
    <div className='createTask' onClick={closeHelpers}>
      <h2 className='createTask__title'>Создание Мотиватора: </h2>
      <div className="createTask__field">
        <div className="createTask__fieldName">
          <div className="createTask__fieldNameText">Проверяющий: </div>
        </div>
        <Select className='createTask__input createTask__input-select' onBlur={() => { inspector.onBlur() }} onChange={(option) => inspector.onChange(option)} options={inspectors} styles={!inspector.value && inspector.isDirty ? selectStyleError : selectStyle} placeholder={'Выберите проверяющего'} />
      </div>
      <hr className='createTask__strip' />
      <div className="createTask__field">
        <div className="createTask__fieldName">
          <div className="createTask__fieldNameText">Название: </div>
          <CreateTaskHepler message={'не больше 40 символов'} helper={helperName} setHelper={setHelperName} key={setHelperName.toString()} />
        </div>
        <input className={(summary.isDirty && (summary.minLengthError || summary.isEmptyError)) ? 'createTask__input createTask__input-red' : 'createTask__input'} type="text" value={summary.value} onBlur={() => summary.onBlur()} onChange={(e: React.ChangeEvent<HTMLInputElement>) => summary.onChange(e)} />
      </div>
      <div className="createTask__field">
        <div className="createTask__fieldName">
          <div className="createTask__fieldNameText">Описание: </div>
          <CreateTaskHepler message={'не больше 100 символов'} helper={helperDescription} setHelper={setHelperDescription} key={setHelperDescription.toString()} />
        </div>
        <textarea className={(description.isDirty && (description.minLengthError || description.isEmptyError)) ? 'createTask__input createTask__input-description createTask__input-red' : 'createTask__input createTask__input-description'} value={description.value} onBlur={description.onBlur} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => description.onChange(e)}></textarea>
      </div>
      <div className="createTask__field">
        <div className="createTask__fieldName">Дедлайн (необязательно): </div>
        <input className='createTask__input' type="date" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTaskDeadline(event.target.value)} min={new Date().toISOString().split('T')[0]} />
      </div>
      <div className="createTask__field">
        <div className="createTask__fieldName">Тип: </div>
        <Select className='createTask__input createTask__input-select' options={options} styles={!taskType.value && taskType.isDirty ? selectStyleError : selectStyle} placeholder={'Выберите тип задачи'} onBlur={() => { taskType.onBlur() }} onChange={(option) => taskType.onChange(option)} />
      </div>
      <div className="createTask__field">
        <div className="createTask__fieldName">
          <div className="createTask__fieldNameText">Награда: </div>
          <CreateTaskHepler message={'от 10 до 9999 мотикойнов. Награда может быть переопределена проверяющим.'} helper={helperAward} setHelper={setHelperAward} key={setHelperAward.toString()} />
        </div>
        <input className={(award.isDirty && (award.isCorrectNumberError)) ? 'createTask__input createTask__input-red' : 'createTask__input'} type="number" value={award.value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => award.onChange(e)} onBlur={award.onBlur} />
      </div>
      <div className="createTask__field">
        <button className='motivators-btn createTask__btn'>Создать</button>
      </div>
    </div>
  )
}