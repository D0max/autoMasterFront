import { IAuthReducer, IMessage, IToken } from "../../types/reducers";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {login, registrationAction, sendToEmailCode} from "../actions/authActions";

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
    },

    [registrationAction.pending.type]: (state) => {
      state.loading = true;
    },
    [registrationAction.fulfilled.type]: (state, action: PayloadAction<IToken>) => {
      state.loading = false;
      state.token = action.payload.token;
    },
    [registrationAction.rejected.type]: (state, action: PayloadAction<IMessage>) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [sendToEmailCode.pending.type]: (state) => {
      state.loading = true;
    },
    [sendToEmailCode.fulfilled.type]: (state) => {
      state.loading = false;
    },
    [sendToEmailCode.rejected.type]: (state) => {
      state.loading = false;
    }
  }
})

export default authSlice.reducer
