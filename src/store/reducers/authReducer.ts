import { IAuthReducer } from "../../types/reducers";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {login} from "../actions/authActions";

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
    [login.pending.type]: (state) => {
      state.loading = true;
    },
    [login.fulfilled.type]: (state, action:PayloadAction<{token: string}>) => {
      state.loading = false;
      state.token = action.payload.token;
    },
    [login.rejected.type]: (state, action: PayloadAction<{ message: string }>) => {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
})

export default authSlice.reducer
