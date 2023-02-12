import WebRequest from '../helpers/WebRequest';
import appConfig from '../configs/AppConfig';
import { ITask } from '../types/interfaces/ITask';
import executorTasks from '../data/ExecutorTasks';
import inspectorTasks from '../data/InspectorTasks';
import TaskStatusEnum from '../types/enums/TaskStatusEnum';

export default class TasksService {
  private webRequest: WebRequest;

  private tasksPath = `${appConfig.apiUrl}/tasks`;

  constructor(webRequest: WebRequest = new WebRequest()) {
    this.webRequest = webRequest;
  }

  async getExecutorTasks(userId: string): Promise<ITask[]> {
    // const result = await this.webRequest.get<ITask[]>(`${this.tasksPath}/executor/${id}`);
    // return result;

    return Promise.resolve(executorTasks);
  }

  async getInspectorTasks(userId: string): Promise<ITask[]> {
    // const result = await this.webRequest.get<ITask[]>(`${this.tasksPath}/inspector/${id}`);
    // return result;

    return Promise.resolve(inspectorTasks);
  }

  async updateTasksStatus(taskId: string, newStatus: TaskStatusEnum): Promise<ITask> {
    // const result = await this.webRequest.put<ITask>(`${this.tasksPath}/updatestatus/${taskId}`, { newStatus });
    // return result;
    let task = executorTasks.find(task => task.id === taskId);
    if (task) {
      task = {...task, status: newStatus}
      return Promise.resolve(task);
    }
    task = inspectorTasks.find(task => task.id === taskId);
    if (task) {
      task = {...task, status: newStatus}
      return Promise.resolve(task);
    }

    return Promise.resolve({} as ITask);
  }

  async updateTask(taskId: string, task: ITask): Promise<ITask> {
    // const result = await this.webRequest.put<ITask>(`${this.tasksPath}/update/${taskId}`, task);
    // return result;
  
    return Promise.resolve(task);
  }

  async createTask(task: ITask): Promise<ITask> {
    // const result = await this.webRequest.post<ITask>(this.tasksPath, task);
    // return result;
    executorTasks.push(task);
    return Promise.resolve({} as ITask);
  }
}
