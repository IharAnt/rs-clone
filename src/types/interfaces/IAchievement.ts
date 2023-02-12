import TaskTypeEnum from "../enums/TaskTypeEnum";

export interface IAchievement {
  id: string;
  name: string;
  img: string;
  type: TaskTypeEnum;
  description: string;
  maxPoints: number;
}