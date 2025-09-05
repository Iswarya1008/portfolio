import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../services/api.js'

export const fetchProjects = createAsyncThunk('projects/fetch', async () => {
  const { data } = await API.get('/projects')
  return data
})

const projectsSlice = createSlice({
  name: 'projects',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProjects.pending, (state)=>{ state.status='loading'})
      .addCase(fetchProjects.fulfilled, (state, action)=>{ state.status='succeeded'; state.items = action.payload })
      .addCase(fetchProjects.rejected, (state, action)=>{ state.status='failed'; state.error = action.error.message })
  }
})

export default projectsSlice.reducer
