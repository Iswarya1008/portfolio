import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../services/api.js'

export const fetchInternships = createAsyncThunk('internships/fetch', async () => {
  const { data } = await API.get('/internships')
  return data
})

const internshipsSlice = createSlice({
  name: 'internships',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchInternships.pending, (state)=>{ state.status='loading'})
      .addCase(fetchInternships.fulfilled, (state, action)=>{ state.status='succeeded'; state.items = action.payload })
      .addCase(fetchInternships.rejected, (state, action)=>{ state.status='failed'; state.error = action.error.message })
  }
})

export default internshipsSlice.reducer
