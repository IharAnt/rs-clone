import { ITask } from './../../../types/interfaces/ITask';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TasksService from '../../../services/TasksService';

const service = new TasksService()

export const getTasks = createAsyncThunk<ITask[], undefined, { rejectValue: string }>(
  'tasks/getTasks',
  async function (_, { rejectWithValue }) {
    const result = await service.getExecutorTasks('1')
    // dispatch(setTasks(result))
    return result
  }
)

type tasks = {
  tasks: ITask[]
}

const initialState: tasks = {
  tasks: []
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

  }, 
  extraReducers: (builder)=> {
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.tasks = action.payload
    })
  }})

export default tasksSlice.reducer