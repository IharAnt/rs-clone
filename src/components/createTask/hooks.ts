import { useEffect, useState } from 'react';
import { SingleValue } from 'react-select';
import { MyOptionType, optionSelectUser, validateionType } from './types';

export const useValidation = (value: string, validations: validateionType) => {
  const [isEmptyError, setEmptyError] = useState(true);
  const [minLengthError, setMaxLengthError] = useState(true);
  const [isCorrectNumberError, setCorrectNumberError] = useState(true);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
          break;
        case 'isEmpty':
          value ? setEmptyError(false) : setEmptyError(true);
          break;
        case 'isCorrectNumber':
          +value >= 10 && +value < 10000 ? setCorrectNumberError(false) : setCorrectNumberError(true);
          break;
      }
    }
  }, [value]);

  return {
    isEmptyError,
    minLengthError,
    isCorrectNumberError,
  };
};

export const useInput = (initialValue: string, validations: validateionType) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

export const useSelect = () => {
  const [value, setValue] = useState<optionSelectUser | MyOptionType | null>();
  const [isDirty, setDirty] = useState(false);

  const onChange = (option: SingleValue<optionSelectUser | MyOptionType>) => {
    setValue(option);
  };

  const onBlur = () => {
    setDirty(true);
  };

  return {
    value,
    change: onChange,
    onBlur,
    isDirty,
  };
};
