import './style.css'
import Select, { SingleValue } from 'react-select';
import { MyOptionType, optionInspectorType } from './types';
import { selectStyle, options, selectStyleError } from './options';
import { useState, useEffect } from 'react';
import CreateTaskHepler from '../createTaskHepler';

export default function CreateTask() {

  // const [taskSummary, setTaskSummary] = useState('')
  // const [taskDescription, setTaskDescriptione] = useState('')
  // const [taskDeadline, setTaskDeadline] = useState('')
  // const [taskType, setTaskType] = useState<string | null>()
  // const [taskAward, setTaskAward] = useState('')

  // const [validName, setValidName] = useState(true)
  // const [validDescription, setValidDescription] = useState(true)
  // const [validType, setValidType] = useState(false)
  // const [validAward, setValidAward] = useState(false)

  // const [validData, setValidData] = useState(false)

  const useValidation = (value: any, validations: any) => {
    const [isEmptyError, setEmptyError] = useState(true)
    const [minLengthError, setMaxLengthError] = useState(true)

    useEffect(()=>{
      for (const validation in validations) {
        switch (validation) {
          case 'maxLength': 
            value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false); 
            break;
          case 'isEmpty' :
            value ? setEmptyError(false) : setEmptyError(true)
        }
      }
    }, [value])

    return {
      isEmptyError,
      minLengthError
    }
  }

  const useInput = (initialValue: string, validations: any) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    }

    const onBlur = () => {
      setDirty(true)
    }

    return {
      value,
      onChange,
      onBlur,
      isDirty,
      ...valid
    }
  }

  const useSelect = () => {
    const [value, setValue] = useState<optionInspectorType | MyOptionType | null>()
    const [isDirty, setDirty] = useState(false)

    const onChange = (option: SingleValue<optionInspectorType | MyOptionType>) => {
      setValue(option)
    }

    const onBlur = () => {
      setDirty(true)
    }

    return {
      value,
      onChange,
      onBlur,
      isDirty
    }
  }



  // useEffect(() => {
  //   if (validName && validDescription && validType && validAward) {
  //     setValidData(true)
  //   } else {
  //     setValidData(false)
  //   }
  // }, [validName, validDescription, validType, validAward])

  // const nameHandler = () => taskSummary.length > 0 && taskSummary.length < 40 ? setValidName(true) : setValidName(false)

  // const desciptionHandler = () => taskDescription.length > 0 && taskDescription.length < 100 ? setValidDescription(true) : setValidDescription(false)

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

  function closeHelpers() {
    if (helperName) setHelperName(false);
    if (helperDescription) setHelperDescription(false);
    if (helperAward) setHelperAward(false);
  }

  const summary = useInput('', {isEmpty: true, maxLength: 40})
  const inspector = useSelect()
  // const description = useInput('', {isEmpty: true, minLength: 3})

  return (
    <div className='createTask' onClick={closeHelpers}>
      <h2 className='createTask__title'>Создание Мотиватора: </h2>
      <div className="createTask__field">
        <div className="createTask__fieldName">
          <div className="createTask__fieldNameText">Проверяющий: </div>
        </div>
        <Select className='createTask__input createTask__input-select' onBlur={()=>{inspector.onBlur()}} onChange={(option)=>inspector.onChange(option)} options={inspectors} styles={!inspector.value && inspector.isDirty ? selectStyleError : selectStyle } placeholder={'Выберите проверяющего'} />
      </div>
      <hr className='createTask__strip' />
      <div className="createTask__field">
        <div className="createTask__fieldName">
          <div className="createTask__fieldNameText">Название: </div>
          <CreateTaskHepler message={'не больше 40 символов'} helper={helperName} setHelper={setHelperName} key={setHelperName.toString()} />
        </div>
        <input className={(summary.isDirty && (summary.minLengthError || summary.isEmptyError)) ? 'createTask__input createTask__input-red' : 'createTask__input'} type="text" value={summary.value} onBlur={() => summary.onBlur()} onChange={(e: React.ChangeEvent<HTMLInputElement>) => summary.onChange(e)} />
      </div>
      {/* <div className="createTask__field">
        <div className="createTask__fieldName">
          <div className="createTask__fieldNameText">Описание: </div>
          <CreateTaskHepler message={'не больше 100 символов'} helper={helperDescription} setHelper={setHelperDescription} key={setHelperDescription.toString()} />
        </div>
        <textarea className={validDescription ? 'createTask__input createTask__input-description' : 'createTask__input createTask__input-description createTask__input-red'} value={taskDescription} onBlur={desciptionHandler} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setTaskDescriptione(event.target.value)}></textarea>
      </div>
      <div className="createTask__field">
        <div className="createTask__fieldName">Дедлайн (необязательно): </div>
        <input className='createTask__input' type="date" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTaskDeadline(event.target.value)} min={new Date().toISOString().split('T')[0]} />
      </div>
      <div className="createTask__field">
        <div className="createTask__fieldName">Тип: </div>
        <Select className='createTask__input createTask__input-select' options={options} styles={selectStyle} placeholder={'Выберите тип задачи'} onChange={(option) => setTaskType(option?.value)} />
      </div>
      <div className="createTask__field">
        <div className="createTask__fieldName">
          <div className="createTask__fieldNameText">Награда: </div>
          <CreateTaskHepler message={'от 10 до 9999 мотикойнов. Награда может быть переопределена проверяющим.'} helper={helperAward} setHelper={setHelperAward} key={setHelperAward.toString()} />
        </div>
        <input className='createTask__input' type="number" min={10} max={9999} value={taskAward} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTaskAward(event.target.value.slice(0, 4))} />
      </div> */}
      <div className="createTask__field">
        <button className='motivators-btn createTask__btn'>Создать</button>
      </div>
    </div>

  )
}