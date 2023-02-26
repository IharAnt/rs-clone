import TaskTypeEnum from '../../types/enums/TaskTypeEnum';
import { ITask } from './../../types/interfaces/ITask';
export type props = {
  task: ITask;
};

export type MyOptionType = {
  label: string;
  value: TaskTypeEnum;
};
