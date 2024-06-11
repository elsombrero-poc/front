import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Metadata } from '../../../api/types'

const initialState: {value: Metadata} = {
  value: {}
}

export const MetadataSlice = createSlice({
  name: 'metadata',
  initialState,
  reducers: {
    setMetadata: (state, action: PayloadAction<Metadata>) => {
      state.value = action.payload
    },
  },
})

export const { setMetadata } = MetadataSlice.actions

export default MetadataSlice.reducer