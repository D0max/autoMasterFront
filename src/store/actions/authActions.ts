import { createAsyncThunk } from "@reduxjs/toolkit";
import { saveToLocalStorage } from "../localStorage";
import axios from "../../api/index";
import { ILoginBody } from '../../types/actions'


export const login = createAsyncThunk(
  'auth/login',
  async (auth: ILoginBody, thunkAPI) => {
    try {
      const response = await axios.post('/auth/login', auth)
      await saveToLocalStorage(response.data.token)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
