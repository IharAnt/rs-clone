import TaskStatusEnum from "../enums/TaskStatusEnum";
import TaskTypeEnum from "../enums/TaskTypeEnum";
import { IImg } from "./IImg";
import { IMessage } from "./IMessage";
import { IUser } from "./IUser";

export interface ITask {
  id: string;
  executor: IUser;
  inspector: IUser;
  icon: string;
  summary: string;
  description: string;
  dueDate?: string | null;
  type: TaskTypeEnum;
  status: TaskStatusEnum;
  taskReport?: string | null;
  messages?: IMessage[] | null;
  imgFiles?: IImg[] | null;
  points: number;
}