import TaskStatusEnum from "../types/enums/TaskStatusEnum";
import TaskTypeEnum from "../types/enums/TaskTypeEnum";
import { ITask } from "../types/interfaces/ITask";

const inspectorTasks: ITask[] = [
  {
    id: 'sdf6sdf464',
    executor: {
      id: '546sd6f54',
      email: 'inspector2@example.com',
      name: 'Inspector2',
    },
    inspector: {
      id: 'sdf5sd4af6sd54f',
      email: 'executor@example.com',
      name: 'Vasya',
    },
    summary: 'Провести урок по математике.',
    description: 'Урок можно проводить где хочешь, в любом формате. Доказательство, видео.',
    dueDate: '2023-02-09',
    type: TaskTypeEnum.Teacher,
    status: TaskStatusEnum.Resolved,
    taskReport: 'Провел. Ссылка на видео: ссылка https://github.com',
    messages: null,
    imgFiles: null,
    points: 300,
  },
  {
    id: 'sdf6sdf464',
    executor: {
      id: '546sd6f5466',
      email: 'inspector3@example.com',
      name: 'Inspector3',
    },
    inspector: {
      id: 'sdf5sd4af6sd54f',
      email: 'executor@example.com',
      name: 'Vasya',
    },
    summary: 'Спать по 8 часов в день. Не менее недели подряд.',
    description: 'Доказательством может быть лог с часов.',
    dueDate: null,
    type: TaskTypeEnum.Sleep,
    status: TaskStatusEnum.Resolved,
    taskReport: 'Спал: ссылка на лог.',
    messages: null,
    imgFiles: null,
    points: 100,
  },
]

export default inspectorTasks;