import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../services/api.js'

export const fetchCertificates = createAsyncThunk('certificates/fetch', async () => {
  const { data } = await API.get('/certificates')
  return data
})

const certificatesSlice = createSlice({
  name: 'certificates',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCertificates.pending, (state)=>{ state.status='loading'})
      .addCase(fetchCertificates.fulfilled, (state, action)=>{ state.status='succeeded'; state.items = action.payload })
      .addCase(fetchCertificates.rejected, (state, action)=>{ state.status='failed'; state.error = action.error.message })
  }
})

export default certificatesSlice.reducer
