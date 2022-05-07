import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../api/index";


export const login = createAsyncThunk(
  'auth/login',
  async (auth, thunkAPI) => {
    try {
      const response = await axios.post('/login', auth)
      return  response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
