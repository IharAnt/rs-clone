import TaskTypeEnum from "../../types/enums/TaskTypeEnum";
import { MyOptionType } from "./types";
import { CSSProperties } from 'react'

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