import { configureStore } from '@reduxjs/toolkit'
import MetadataReducer from './slices/metadata'

export const store = configureStore({
  reducer: {
    metadata: MetadataReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
