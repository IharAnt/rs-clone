
import { useEffect, useState } from "react"
import { SingleValue } from "react-select"
import { MyOptionType, optionInspectorType } from "./types"

type validateionType = {
  isEmpty: boolean,
  maxLength: number,
  isCorrectNumber?: number
}

export const useValidation = (value: string, validations: validateionType) => {
  const [isEmptyError, setEmptyError] = useState(true)
  const [minLengthError, setMaxLengthError] = useState(true)
  const [isCorrectNumberError, setCorrectNumberError] = useState(true)

  useEffect(()=>{
    for (const validation in validations) {
      switch (validation) {
        case 'maxLength': 
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false); 
          break;
        case 'isEmpty' :
          value ? setEmptyError(false) : setEmptyError(true)
          break
        case 'isCorrectNumber': 
          +value >= 10 && +value<10000 ? setCorrectNumberError(false) : setCorrectNumberError(true)
          break
      }
    }
  }, [value])

  return {
    isEmptyError,
    minLengthError,
    isCorrectNumberError
  }
}

export const useInput = (initialValue: string, validations: validateionType) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidation(value, validations)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const onBlur = () => {
    setDirty(true)
  }

  const clear = () => {
    setValue('')
    setDirty(false)
  } 

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    clear,
    ...valid
  }
}

export const useSelect = () => {
  const [value, setValue] = useState<optionInspectorType | MyOptionType | null>()
  const [isDirty, setDirty] = useState(false)

  const onChange = (option: SingleValue<optionInspectorType | MyOptionType>) => {
    setValue(option)
  }

  const onBlur = () => {
    setDirty(true)
  }

  const clear = () => {
    setDirty(false)
    setValue(null)
  }

  return {
    clear,
    value,
    onChange,
    onBlur,
    isDirty
  }
}