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

export const updateTask = createAsyncThunk<ITask[], { taskId: string, updatedTask: IUpdateTask }, {}>(
  'tasks/updateTask',
  async function ({ taskId, updatedTask }) {
    const task = await TasksService.updateTask(taskId, updatedTask);
    const result = await TasksService.getExecutorTasks(task.executor.id);
    return result;
  }
)

export const getInspectorTasks = createAsyncThunk<ITask[], { id: string }, {}>(
  'tasks/getInspectorTasks',
  async function ({ id }) {
    let result = await TasksService.getInspectorTasks(id);
    result = result.filter((task) => task.status === TaskStatusEnum.Resolved)
    return result;
  }
)

export const updateInspectorTask = createAsyncThunk<ITask[], { taskId: string, updatedTask: IUpdateTask }, {}>(
  'tasks/updateInspectorTask',
  async function ({ taskId, updatedTask }) {
    await TasksService.updateTask(taskId, updatedTask);
    let result = await TasksService.getInspectorTasks(updatedTask.inspector.id);
    result = result.filter((task) => task.status === TaskStatusEnum.Resolved)
    return result;
  }
)

export const getUsers = createAsyncThunk<IUser[], undefined, {}>(
  'tasks/getUsers',
  async function () {
    const result = await UserService.getUsers();
    return result;
  }
)

type tasks = {
  tasks: ITask[]
  inspectorTasks: ITask[]
  users: IUser[],
  modalTaskPending: boolean,
  modalTaskReject: boolean,
  modalTaskFulfilled: boolean,
  modal: string | null,
  modalTask: ITask,
  loading: boolean,
  loadingTask: boolean,
  errorTask: string,
  errorMessage: string
}

const initialState: tasks = {
  tasks: [],
  inspectorTasks: [],
  users: [],
  modalTaskReject: false,
  modalTaskFulfilled: false,
  modalTaskPending: false,
  modal: null,
  modalTask: {} as ITask,
  loading: true,
  loadingTask: false,
  errorTask: '',
  errorMessage: ''
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    updateCreateFulfilled: (state) => {
      state.modalTaskFulfilled = false
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
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(getInspectorTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInspectorTasks.fulfilled, (state, action) => {
        state.inspectorTasks = action.payload;
        state.loading = false;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload
      })
      .addCase(createTask.pending, (state) => {
        state.loadingTask = true
      })
      .addCase(createTask.rejected, (state, action) => {
        state.loadingTask = false
        state.errorMessage = action.error.message || ''
      }).addCase(createTask.fulfilled, (state, action) => {
        state.errorMessage = ''
        state.loadingTask = false
        state.tasks = action.payload
      })
      .addCase(updateTask.pending, (state) => {
        state.loadingTask = true
        state.loading = true;
      })
      .addCase(updateTask.rejected, (state) => {
        state.loadingTask = false
        state.loading = false;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.loadingTask = false
        state.tasks = action.payload
        state.loading = false;
      })
      .addCase(updateInspectorTask.pending, (state) => {
        state.loadingTask = true
      })
      .addCase(updateInspectorTask.rejected, (state) => {
        state.loadingTask = false
      })
      .addCase(updateInspectorTask.fulfilled, (state, action) => {
        state.loadingTask = false
        state.inspectorTasks = action.payload
      })
  }
})

export const { updateCreateFulfilled, updateModalValue, updateModalTask } = tasksSlice.actions
export default tasksSlice.reducer