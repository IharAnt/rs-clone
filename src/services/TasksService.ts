import { ITask, IUpdateTask } from '../types/interfaces/ITask';
import executorTasks from '../data/ExecutorTasks';
import inspectorTasks from '../data/InspectorTasks';
import TaskStatusEnum from '../types/enums/TaskStatusEnum';
import apiClient from '../api/ApiClient';

export default class TasksService {
  static tasksPath = `/task`;
  
  static async getExecutorTasks(userId: string): Promise<ITask[]> {
    const response = await apiClient.get<ITask[]>(`${this.tasksPath}/executor/${userId}`);
    return response.data;

    //return Promise.resolve(executorTasks);
  }

  static async getInspectorTasks(userId: string): Promise<ITask[]> {
    const response = await apiClient.get<ITask[]>(`${this.tasksPath}/inspector/${userId}`);
    return response.data;

    //return Promise.resolve(inspectorTasks);
  }

  static async updateTask(taskId: string, task: IUpdateTask): Promise<ITask> {
    const response = await apiClient.put<ITask>(`${TasksService.tasksPath}/${taskId}`, task);
    return response.data;

    // const result: ITask = {...task, id: 'sdfsdf' + Date.now};
    // return Promise.resolve(result);
  }

  static async createTask(task: IUpdateTask): Promise<ITask> {
    const response = await apiClient.post<ITask>(TasksService.tasksPath, task);
    return response.data;
    
    // const result: ITask = {...task, id: 'sdfsdf' + Date.now};
    // executorTasks.push(result);
    // return Promise.resolve({} as ITask);
  }

  static async updateTasksStatus(taskId: string, newStatus: TaskStatusEnum): Promise<ITask> {
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
}
