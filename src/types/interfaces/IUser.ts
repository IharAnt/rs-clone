import { IUserAchievement } from "./IAchievement";
import { IExperience } from "./IExperience";
import { ITasksStats } from "./ITasksStats";

export interface IAuthUser {
  password: string;
  email: string;
  name: string;
}

export interface IUser {
  id: string;
  email: string;
  name: string;
}

export interface IProfile extends IUser {
  birthday?: string;
  phone?: string;
  photo?: string;
  moticoins: number;
  totalExperience: number;
  nextLevelExperience: number;
  experiences: IExperience[];
  achievements: IUserAchievement[]
  level: number;
  tasksStats: ITasksStats;
}
