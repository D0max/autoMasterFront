import {configureStore, combineReducers} from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import { personApi } from "../services/persons";


const rootReducer = combineReducers({
  authReducer,
  [personApi.reducerPath]: personApi.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        personApi.middleware,
      ])
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
