import TaskTypeEnum from "../enums/TaskTypeEnum";

export interface IAchievement {
  id: string;
  name: string;
  imgBlack: string;
  imgColor: string;
  type: TaskTypeEnum;
  description: string;
  maxPoints: number;
}

export interface IUserAchievement {
  id: string;
  type: TaskTypeEnum;
  maxPoints: number;
}