import { IAuthReducer } from "../../types/reducers";
import {createSlice} from "@reduxjs/toolkit";

const initialState: IAuthReducer = {
  loading: false,
  error: null,
  code: '',
  token: undefined
}

export const authSlice = createSlice({
  reducers: {},
  name: 'auth',
  initialState,
  extraReducers: {

  }
})

export default authSlice.reducer
