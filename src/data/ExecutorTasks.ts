import TaskStatusEnum from "../types/enums/TaskStatusEnum";
import TaskTypeEnum from "../types/enums/TaskTypeEnum";
import { ITask } from "../types/interfaces/ITask";

const executorTasks: ITask[] = [{
  id: 'sdf6sdf4641',
  executor: {
    id: 'sdf5sd4af6sd54f',
    email: 'executor@example.com',
    name: 'Vasya',
  },
  inspector: {
    id: '546sd6f54',
    email: 'inspector1@example.com',
    name: 'Inspector1',
  },
  summary: 'Прочитать Войну и Мир.',
  description: 'Срок не ограничен.',
  dueDate: null,
  type: TaskTypeEnum.Intelligence,
  status: TaskStatusEnum.Inprogress,
  taskReport: null,
  messages: null,
  imgFiles: null,
  points: 200,
},
{
  id: 'sdf6sdf4642',
  executor: {
    id: 'sdf5sd4af6sd54f',
    email: 'executor@example.com',
    name: 'Vasya',
  },
  inspector: {
    id: '546sd6f54',
    email: 'inspector1@example.com',
    name: 'Inspector1',
  },
  summary: 'Пробежать 30 км.',
  description: 'Пробежать 30 км. Тренероваться можно не более 6 месяцев.',
  dueDate: '2023-08-09',
  type: TaskTypeEnum.Power,
  status: TaskStatusEnum.Open,
  taskReport: null,
  messages: null,
  imgFiles: null,
  points: 500,
},
{
  id: 'sdf6sdf4643',
  executor: {
    id: 'sdf5sd4af6sd54f',
    email: 'executor@example.com',
    name: 'Vasya',
  },
  inspector: {
    id: '546sd6f54',
    email: 'inspector2@example.com',
    name: 'Inspector2',
  },
  summary: 'Выучить HTML/CSS/JS',
  description: 'Закончить курсы RSSchool Stage 2',
  dueDate: '2023-04-03',
  type: TaskTypeEnum.Learner,
  status: TaskStatusEnum.Inprogress,
  taskReport: null,
  messages: null,
  imgFiles: null,
  points: 3900,
},
{
  id: 'sdf6sdf4644',
  executor: {
    id: 'sdf5sd4af6sd54f',
    email: 'executor@example.com',
    name: 'Vasya',
  },
  inspector: {
    id: '546sd6f54',
    email: 'inspector2@example.com',
    name: 'Inspector2',
  },
  icon: '',
  summary: 'Подтянуться 25 раз.',
  description: 'Время на тренировки не ограничены.',
  dueDate: null,
  type: TaskTypeEnum.Power,
  status: TaskStatusEnum.Resolved,
  taskReport: 'Видео еще не снял. Могу продемонстрировать лично :)',
  messages: null,
  imgFiles: null,
  points: 400,
},
{
  id: 'sdf6sdf4645',
  executor: {
    id: 'sdf5sd4af6sd54f',
    email: 'executor@example.com',
    name: 'Vasya',
  },
  inspector: {
    id: '546sd6f54',
    email: 'inspector2@example.com',
    name: 'Inspector2',
  },
  summary: 'Подтянуться 15 раз.',
  description: 'Время на тренировки не ограничены.',
  dueDate: null,
  type: TaskTypeEnum.Power,
  status: TaskStatusEnum.Approved,
  taskReport: 'Подтянулся, доказательство по ссылке: ссылка на youtube',
  messages: null,
  imgFiles: null,
  points: 200,
},
{
  id: 'sdf6sdf4646',
  executor: {
    id: 'sdf5sd4af6sd54f',
    email: 'executor@example.com',
    name: 'Vasya',
  },
  inspector: {
    id: '546sd6f54',
    email: 'inspector2@example.com',
    name: 'Inspector2',
  },
  summary: 'Выучить 500 слов по английскому языку.',
  description: 'Время на тренировки не ограничены.',
  dueDate: null,
  type: TaskTypeEnum.Intelligence,
  status: TaskStatusEnum.Approved,
  taskReport: 'Пройден тест на знание 500 слоа: ссылка на результат.',
  messages: null,
  imgFiles: null,
  points: 300,
},
{
  id: 'sdf6sdf4647',
  executor: {
    id: 'sdf5sd4af6sd54f',
    email: 'executor@example.com',
    name: 'Vasya',
  },
  inspector: {
    id: '546sd6f54',
    email: 'inspector2@example.com',
    name: 'Inspector2',
  },
  icon: '',
  summary: 'Выучить китайский за месяц.',
  description: 'Время на тренировки не ограничены.',
  dueDate: '2023-02-09',
  type: TaskTypeEnum.Intelligence,
  status: TaskStatusEnum.Rejected,
  taskReport: 'Выучил.',
  messages: null,
  imgFiles: null,
  points: 3000,
}]

export default executorTasks;