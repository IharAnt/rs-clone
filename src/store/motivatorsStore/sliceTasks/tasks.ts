import { IUpdateTask } from './../../../types/interfaces/ITask';
import { ITask } from '../../../types/interfaces/ITask';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TasksService from '../../../services/TasksService';
import UserService from '../../../services/UserService'
import { IUser } from '../../../types/interfaces/IUser';
import TaskStatusEnum from '../../../types/enums/TaskStatusEnum';

export const getTasks = createAsyncThunk<ITask[], { id: string }, {}>(
  'tasks/getTasks',
  async function ({ id }) {
    const result = await TasksService.getExecutorTasks(id);
    return result;
  }
)

export const createTask = createAsyncThunk<ITask[], { task: IUpdateTask }, {}>(
  'tasks/createTask',
  async function ({ task }) {
    await TasksService.createTask(task)
    const result = await TasksService.getExecutorTasks(task.executor.id)
    return result;
  }
)

export const updateTask = createAsyncThunk<ITask[], { taskId: string, updatedTask: IUpdateTask }, { rejectValue: string }>(
  'tasks/updateTask',
  async function ({ taskId, updatedTask }) {
    const task = await TasksService.updateTask(taskId, updatedTask);
    const result = await TasksService.getExecutorTasks(task.executor.id);
    return result;
  }
)

export const getInspectorTasks = createAsyncThunk<ITask[], { id: string }, { rejectValue: string }>(
  'tasks/getInspectorTasks',
  async function ({ id }) {
    let result = await TasksService.getInspectorTasks(id);
    result = result.filter((task) => task.status === TaskStatusEnum.Resolved)
    return result;
  }
)

export const updateInspectorTask = createAsyncThunk<ITask[], { taskId: string, updatedTask: IUpdateTask }, { rejectValue: string }>(
  'tasks/updateInspectorTask',
  async function ({ taskId, updatedTask }) {
    await TasksService.updateTask(taskId, updatedTask);
    let result = await TasksService.getInspectorTasks(updatedTask.inspector.id);
    result = result.filter((task) => task.status === TaskStatusEnum.Resolved)
    return result;
  }
)

export const getUsers = createAsyncThunk<IUser[], undefined, { rejectValue: string }>(
  'tasks/getUsers',
  async function () {
    const result = await UserService.getUsers();
    return result;
  }
)

export const completeTask = createAsyncThunk<ITask[], {}, {}>(
  'tasks/completeTask',
  async function ({ }) {
    const result = await TasksService.getExecutorTasks('2')
    return result;
  }
)

export const testTask = createAsyncThunk<ITask[], {}, {}>(
  'testTask',
  async function ({ }) {
    const result = await TasksService.getExecutorTasks('1')
    return result;
  }
)

type tasks = {
  tasks: ITask[]
  inspectorTasks: ITask[]
  users: IUser[],
  createTaskReject: boolean,
  createTaskFulfilled: boolean,
  createTaskPending: boolean,
  completeTaskPending: boolean,
  completeTaskReject: boolean,
  completeTaskFulfilled: boolean,
  modal: string | null,
  modalTask: ITask,
}

const initialState: tasks = {
  tasks: [],
  inspectorTasks: [],
  users: [],
  createTaskReject: false,
  createTaskFulfilled: false,
  createTaskPending: false,
  completeTaskPending: false,
  completeTaskReject: false,
  completeTaskFulfilled: false,
  modal: null,
  modalTask: {} as ITask,
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    updateCreateFulfilled: (state) => {
      state.createTaskFulfilled = false
    },
    updateModalValue: (state, action) => {
      state.modal = action.payload
    },
    updateModalTask: (state, action) => {
      state.modalTask = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.tasks = action.payload
      })
      .addCase(getInspectorTasks.fulfilled, (state, action) => {
        state.inspectorTasks = action.payload;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload
      })
      .addCase(createTask.pending, (state) => {
        state.createTaskPending = true;
      })
      .addCase(createTask.rejected, (state) => {
        state.createTaskReject = true
        state.createTaskPending = false
      }).addCase(createTask.fulfilled, (state, action) => {
        state.createTaskPending = false
        state.createTaskReject = false
        state.createTaskFulfilled = true
        state.tasks = action.payload
      }).addCase(completeTask.pending, (state) => {
        state.completeTaskPending = true
      }).addCase(completeTask.rejected, (state) => {
        state.completeTaskPending = false
        state.completeTaskReject = true
      }).addCase(completeTask.fulfilled, (state) => {
        state.completeTaskPending = false
        state.completeTaskReject = false
        state.completeTaskFulfilled = false
      }).addCase(updateInspectorTask.fulfilled, (state, action) => {
        state.inspectorTasks = action.payload
      })
  }
})

export const { updateCreateFulfilled, updateModalValue, updateModalTask } = tasksSlice.actions
export default tasksSlice.reducer