import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../api/index";


export const login = createAsyncThunk(
  'auth/login',
  async (auth: {username: string, password: string}, thunkAPI) => {
    console.log(auth);
    try {
      const response = await axios.post('/auth/login', auth)
      console.log(response.data);
      localStorage.setItem('token', response.data.token)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
