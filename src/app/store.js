import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { gowheelsapi } from '../services/gowheelsapi'
export const store = configureStore({
  reducer: {
    [gowheelsapi.reducerPath]: gowheelsapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gowheelsapi.middleware),
})

setupListeners(store.dispatch)