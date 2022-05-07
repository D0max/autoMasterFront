import {configureStore, combineReducers} from "@reduxjs/toolkit";


const rootReducer = combineReducers({

})

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => {
    //   getDefaultMiddleware().concat()
    // }
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
