import { IAchievement, IUserAchievement } from "./IAchievement";
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

export interface IProfile extends IUpdateProfile {
  moticoins: number;
  totalExperience: number;
  nextLevelExperience: number;
  experiences: IExperience[];
  achievements: IAchievement[]
  level: number;
  tasksStats: ITasksStats;
}

export interface IUpdateProfile extends IUser {
  birthday?: string;
  phone?: string;
  photo?: string;
}
