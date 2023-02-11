import TaskTypeEnum from "../enums/TaskTypeEnum";

export interface IAchievement {
  id: string;
  type: TaskTypeEnum;
  maxPoints: number;
}