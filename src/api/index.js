import axios from 'axios';

export default axios.create({
  baseURL: 'https://auto-master-api.herokuapp.com' || process.env.BASE_URL,
})
