import './style.css'
import Select, { StylesConfig } from 'react-select';
import { MyOptionType, optionInspectorType } from './types';
import { customControlStyles, options } from './options';
import { useState } from 'react';
import CreateTaskHepler from '../createTaskHepler';

const colorFocus = '#3730A3'
const colorHover = '#ead538'

type IsMulti = false;

const selectStyle: StylesConfig<MyOptionType | optionInspectorType, IsMulti> = {
  control: (provided, state) => {
    return {
      ...provided,
      ...customControlStyles,
      border: state.isFocused ? `solid 1px ${colorFocus}` : '',
      '&:hover': state.isFocused ? {
        border: `1px solid ${colorFocus}`
      } : { border: `1px solid ${colorHover}`},
    };
  }
};

export default function CreateTask() {

  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescriptione] = useState('')
  const [taskDeadline, setTaskDeadline] = useState('')
  const [taskType, setTaskType] = useState<string | null>()
  const [taskAward, setTaskAward] = useState('')

  const [helperName, setHelperName] = useState(false)
  const [helperDescription, setHelperDescription] = useState(false)
  const [helperAward, setHelperAward] = useState(false)

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

  function closeHelpers () {
    if(helperName) setHelperName(false);
    if(helperDescription) setHelperDescription(false);
    if(helperAward) setHelperAward(false);
  }

  return (
    <div className='createTask' onClick={closeHelpers}>
      <h2 className='createTask__title'>Создание Мотиватора: </h2>
      <div className="createTask__field">
        <div className="createTask__fieldName">
          <div className="createTask__fieldNameText">Проверяющий: </div>
        </div>
        <Select className='createTask__input createTask__input-select' options={inspectors} styles={selectStyle} placeholder={'Выберите проверяющего'} />
      </div>
      <hr className='createTask__strip' />
      <div className="createTask__field">
        <div className="createTask__fieldName">
          <div className="createTask__fieldNameText">Название: </div>
          <CreateTaskHepler message={'не больше 40 символов'} helper={helperName} setHelper={setHelperName} key={setHelperName.toString()}/>
        </div>
        <input className='createTask__input' type="text" value={taskName} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTaskName(event.target.value)} />
      </div>
      <div className="createTask__field">
        <div className="createTask__fieldName">
          <div className="createTask__fieldNameText">Описание: </div>
          <CreateTaskHepler message={'не больше 100 символов'} helper={helperDescription} setHelper={setHelperDescription} key={setHelperDescription.toString()}/>
        </div>
        <textarea className='createTask__input createTask__input-description' value={taskDescription} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setTaskDescriptione(event.target.value)}></textarea>
      </div>
      <div className="createTask__field">
        <div className="createTask__fieldName">Дедлайн (необязательно): </div>
        <input className='createTask__input' type="date" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTaskDeadline(event.target.value)} min={new Date().toISOString().split('T')[0]}/>
      </div>
      <div className="createTask__field">
        <div className="createTask__fieldName">Тип: </div>
        <Select className='createTask__input createTask__input-select' options={options} styles={selectStyle} placeholder={'Выберите тип задачи'} onChange={(option)=>setTaskType(option?.value)}/>
      </div>
      <div className="createTask__field">
        <div className="createTask__fieldName">
          <div className="createTask__fieldNameText">Награда: </div>
          <CreateTaskHepler message={'от 10 до 9999 мотикойнов. Награда может быть переопределена проверяющим.'} helper={helperAward} setHelper={setHelperAward} key={setHelperAward.toString()}/>
        </div>
        <input className='createTask__input' type="number" min={10} max={9999} value={taskAward} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTaskAward(event.target.value.slice(0,4))}/>
      </div>
      <div className="createTask__field">
        <button className='motivators-btn createTask__btn'>Создать</button>
      </div>
    </div>

  )
}