import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../services/api.js'

export const sendContact = createAsyncThunk('contact/send', async (payload) => {
  const { data } = await API.post('/contact', payload)
  return data
})

const contactSlice = createSlice({
  name: 'contact',
  initialState: { status: 'idle', error: null, lastResponse: null },
  reducers: {
    resetContact(state){ state.status='idle'; state.error=null; state.lastResponse=null }
  },
  extraReducers: builder => {
    builder
      .addCase(sendContact.pending, (state)=>{ state.status='loading' })
      .addCase(sendContact.fulfilled, (state, action)=>{ state.status='succeeded'; state.lastResponse = action.payload })
      .addCase(sendContact.rejected, (state, action)=>{ state.status='failed'; state.error = action.error.message })
  }
})

export const { resetContact } = contactSlice.actions
export default contactSlice.reducer
