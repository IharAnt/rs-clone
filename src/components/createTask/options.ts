import TaskTypeEnum from "../../types/enums/TaskTypeEnum";
import { MyOptionType } from "./types";
import { CSSProperties } from 'react';
import { optionInspectorType } from './types';
import { StylesConfig } from "react-select";

export const options: MyOptionType[] = [{
  value: TaskTypeEnum.Idler,
  label: 'бездельник',
}, {
  value: TaskTypeEnum.Intelligence,
  label: 'интеллигент',
}, {
  value: TaskTypeEnum.Learner,
  label: 'ученик',
}, {
  value: TaskTypeEnum.Power,
  label: 'силач',
}, {
  value: TaskTypeEnum.Sleep,
  label: 'соня',
}, {
  value: TaskTypeEnum.Teacher,
  label: 'учитель',
}];

export const customControlStyles: CSSProperties = {
  color: "white",
  border: "none",
  boxShadow: 'none',
  margin: '0',
  padding: '0',
  minHeight: '35px'
};

const colorFocus = '#3730A3'
const colorHover = '#ead538'

type IsMulti = false;

export const selectStyle: StylesConfig<MyOptionType | optionInspectorType, IsMulti> = {
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

export const selectStyleError: StylesConfig<MyOptionType | optionInspectorType, IsMulti> = {
  control: (provided, state) => {
    return {
      ...provided,
      ...customControlStyles,
      border: state.isFocused ? `solid 1px ${colorFocus}` : '1px solid red',
      '&:hover': state.isFocused ? {
        border: `1px solid ${colorFocus}`
      } : { border: `1px solid ${colorHover}`},
    };
  }
};