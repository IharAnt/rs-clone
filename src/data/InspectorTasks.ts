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
    imgFiles: [{name: 'name', data: 'data:image/png;base64,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'}
  , {name: 'name', data: 'data:image/png;base64,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'}],
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