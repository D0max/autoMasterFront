import { createAsyncThunk } from "@reduxjs/toolkit";
import { saveToLocalStorage } from "../localStorage";
import axios from "../../api/index";
import {IForgotPassword, ILoginBody, IRegistrationBody} from '../../types/actions'


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

export const registrationAction = createAsyncThunk(
  'auth/registration',
  async (auth: IRegistrationBody, thunkAPI) => {
    try {
      const response = await axios.post('/auth/registration/', auth)
      await saveToLocalStorage(response.data.token)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const sendToEmailCode = createAsyncThunk(
  'auth/sendToEmailCode',
  async (email: IForgotPassword, thunkAPI ) => {
    try {
      await axios.post('/auth/email_refresh', email)
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const updatePassword = createAsyncThunk(
  'auth/updatePassword',
  async (data, thunkAPI) => {
    try {
      await axios.put('/auth/email_refresh', data)
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  })
