import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../services/api.js'

export const fetchSkills = createAsyncThunk('skills/fetch', async () => {
  const { data } = await API.get('/skills')
  return data
})

const skillsSlice = createSlice({
  name: 'skills',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSkills.pending, (state)=>{ state.status='loading'})
      .addCase(fetchSkills.fulfilled, (state, action)=>{ state.status='succeeded'; state.items = action.payload })
      .addCase(fetchSkills.rejected, (state, action)=>{ state.status='failed'; state.error = action.error.message })
  }
})

export default skillsSlice.reducer
