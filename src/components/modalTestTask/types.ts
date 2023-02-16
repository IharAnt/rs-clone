import { ITask } from "../../types/interfaces/ITask"

export type props = {
  task: ITask;
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}