import { configureStore } from '@reduxjs/toolkit'
import skillsReducer from './slices/skillsSlice.js'
import projectsReducer from './slices/projectsSlice.js'
import internshipsReducer from './slices/internshipsSlice.js'
import certificatesReducer from './slices/certificatesSlice.js'
import contactReducer from './slices/contactSlice.js'

const store = configureStore({
  reducer: {
    skills: skillsReducer,
    projects: projectsReducer,
    internships: internshipsReducer,
    certificates: certificatesReducer,
    contact: contactReducer,
  }
})

export default store
