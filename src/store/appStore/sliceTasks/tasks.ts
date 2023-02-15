import { ITask } from './../../../types/interfaces/ITask';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TasksService from '../../../services/TasksService';
import TaskStatusEnum from '../../../types/enums/TaskStatusEnum';
import UserService from '../../../services/UserService'
import { IUser } from '../../../types/interfaces/IUser';

export const getTasks = createAsyncThunk<ITask[], { id: string }, { rejectValue: string }>(
  'tasks/getTasks',
  async function ({ id }, { rejectWithValue }) {
    const result = await TasksService.getExecutorTasks(id);
    return result;
  }
)

export const updateTaskStatus = createAsyncThunk<ITask[], { id: string, status: TaskStatusEnum }, { rejectValue: string }>(
  'tasks/updateTask',
  async function ({ id, status }) {
    const task = await TasksService.updateTasksStatus(id, status);
    const result = await TasksService.getExecutorTasks(('id'));
    return result;
  }
)

export const getInspectorTasks = createAsyncThunk<ITask[], { id: string }, { rejectValue: string }>(
  'tasks/getInspectorTasks',
  async function ({ id }) {
    const result = await TasksService.getInspectorTasks(id);
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

export const createTask = createAsyncThunk<ITask[], {summary: string, description: string, points: number, dueDate?: string | null }, {}>(
  'tasks/createTask', 
  async function ({summary, description, points, dueDate}) {
    const task = await TasksService.createTask({} as ITask);
    const result = await TasksService.getExecutorTasks('1')
    return result;
  }
)

export const completeTask = createAsyncThunk<ITask[], {}, {}>(
  'tasks/completeTask' ,
  async function ({}) {
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
  completeTaskFulfilled: boolean
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
  completeTaskFulfilled: false
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    updateCreateFulfilled: (state) => {
      state.createTaskFulfilled = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(updateTaskStatus.fulfilled, (state, action) => {
        state.tasks = action.payload
      })
      .addCase(getInspectorTasks.fulfilled, (state, action) => {
        state.inspectorTasks = action.payload;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload
      })
      .addCase(createTask.pending, (state)=> {
        state.createTaskPending = true;
      })
      .addCase(createTask.rejected, (state) => {
        state.createTaskReject = true
        state.createTaskPending = false
      }).addCase(createTask.fulfilled, (state) => {
        state.createTaskPending = false
        state.createTaskReject = false
        state.createTaskFulfilled = true
      }).addCase(completeTask.pending, (state) => {
        state.completeTaskPending = true
      }).addCase(completeTask.rejected, (state) => {
        state.completeTaskPending = false
        state.completeTaskReject = true
      }).addCase(completeTask.fulfilled, (state) => {
        state.completeTaskPending = false
        state.completeTaskReject = false
        state.completeTaskFulfilled = false
      })
  }
})

export const { updateCreateFulfilled } = tasksSlice.actions
export default tasksSlice.reducer