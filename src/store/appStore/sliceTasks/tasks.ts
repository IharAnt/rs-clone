import { ITask } from './../../../types/interfaces/ITask';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TasksService from '../../../services/TasksService';
import TaskStatusEnum from '../../../types/enums/TaskStatusEnum';

export const getTasks = createAsyncThunk<ITask[], { id: string }, { rejectValue: string }>(
  'tasks/getTasks',
  async function ({ id }, { rejectWithValue }) {
    const result = await TasksService.getExecutorTasks(id);
    return result;
  }
)

export const updateTaskStatus = createAsyncThunk<ITask, { id: string, status: TaskStatusEnum }, { rejectValue: string }>(
  'tasks/updateTask',
  async function ({ id, status }) {
    const result = await TasksService.updateTasksStatus(id, status);
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

type tasks = {
  tasks: ITask[]
  inspectorTasks: ITask[]
}

const initialState: tasks = {
  tasks: [],
  inspectorTasks: []
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(updateTaskStatus.fulfilled, (state, action) => {
        const task = state.tasks.find((task) => action.payload.id === task.id)
        task!.status = TaskStatusEnum.Inprogress;
      })
      .addCase(getInspectorTasks.fulfilled, (state, action) => {
        state.inspectorTasks = action.payload;
      })
  }
})

export default tasksSlice.reducer