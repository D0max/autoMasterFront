import { IAuthReducer, IMessage, IToken } from "../../types/reducers";
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
    [login.fulfilled.type]: (state, action:PayloadAction<IToken>) => {
      state.loading = false;
      state.token = action.payload.token;
    },
    [login.rejected.type]: (state, action: PayloadAction<IMessage>) => {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
})

export default authSlice.reducer
