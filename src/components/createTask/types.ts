import TaskTypeEnum from '../../types/enums/TaskTypeEnum';

export type MyOptionType = {
  label: string;
  value: TaskTypeEnum;
};

export type optionSelectUser = {
  label: string;
  value: string;
};

export type props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type onChangeExecutor = (option: optionSelectUser) => void;

export type validateionType = {
  isEmpty: boolean;
  maxLength: number;
  isCorrectNumber?: number;
};
