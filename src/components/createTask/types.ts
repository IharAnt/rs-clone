import TaskTypeEnum from "../../types/enums/TaskTypeEnum";

export type MyOptionType = {
  label: string;
  value: TaskTypeEnum;
};

export type optionInspectorType = {
  label: string;
  value: string
}

export type props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}