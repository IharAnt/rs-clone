import TaskStatusEnum from "../enums/TaskStatusEnum";
import TaskTypeEnum from "../enums/TaskTypeEnum";
import { IImg } from "./IImg";
import { IMessage } from "./IMessage";
import { IUser } from "./IUser";

export interface ITask {
  id: string;
  executor: IUser;
  inspector: IUser;
  img: string;
  summary: string;
  description: string;
  dueDate?: number;
  type: TaskTypeEnum;
  status: TaskStatusEnum;
  taskReport?: string;
  messages?: IMessage[];
  imgFiles?: IImg[];
}