import TaskTypeEnum from "../enums/TaskTypeEnum";

export interface IAchievement {
  id: string;
  type: TaskTypeEnum;
  img: string;
  maxPoints: number;
}