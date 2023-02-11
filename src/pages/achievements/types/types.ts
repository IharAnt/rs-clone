import TaskTypeEnum from "../../../types/enums/TaskTypeEnum";

export interface IAchievementsPageData {
    name: string;
    description: string;
    img: string;
    score: number;
    type: TaskTypeEnum,
}