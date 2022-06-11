import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8000' || process.env.BASE_URL,
  headers: {
    Authorization: localStorage.getItem('token')
  }
})
