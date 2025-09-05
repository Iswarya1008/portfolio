import axios from 'axios'

const API = axios.create({
  baseURL: 'https://portfolio-mci6.onrender.com/api',
  timeout: 10000,
})

export default API
