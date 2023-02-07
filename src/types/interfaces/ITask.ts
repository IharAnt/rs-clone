import TaskStatusEnum from "../enums/TaskStatusEnum";
import TaskTypeEnum from "../enums/TaskTypeEnum";
import { IImg } from "./IImg";
import { IMessage } from "./IMessage";
import { IProfile } from "./IUser";

export interface ITask {
  executor: IProfile;
  inspector: IProfile;
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