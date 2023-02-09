import { IAchievement } from "./IAchievement";
import { IExperience } from "./IExperience";
import { IUser } from "./IUser";

export interface IRating {
  id: string;
  user: IUser;
  place: number;
  totalExperience: number;
  experiences: IExperience[];
  achievements: IAchievement[]
  level: number;
  approvedTasks: number;
}