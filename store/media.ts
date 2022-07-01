import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  sp: boolean
}

const initialState = {
  sp: false
}

const slice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    setSp: (state: State, action: PayloadAction<boolean>): State => {
      return { ...state, sp: action.payload }
    }
  }
})

export const { setSp } = slice.actions

export default slice.reducer
