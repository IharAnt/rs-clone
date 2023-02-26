import TaskTypeEnum from '../../types/enums/TaskTypeEnum';
import { MyOptionType } from './types';

export const options: MyOptionType[] = [
  {
    value: TaskTypeEnum.Idler,
    label: 'бездельник',
  },
  {
    value: TaskTypeEnum.Intelligence,
    label: 'интеллектуал',
  },
  {
    value: TaskTypeEnum.Learner,
    label: 'ученик',
  },
  {
    value: TaskTypeEnum.Power,
    label: 'силач',
  },
  {
    value: TaskTypeEnum.Sleep,
    label: 'соня',
  },
  {
    value: TaskTypeEnum.Teacher,
    label: 'учитель',
  },
];
