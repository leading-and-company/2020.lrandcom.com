import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  width: number
  height: number
}

const initialState = {
  width: 0,
  height: 0
}

const slice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    setWindowSize: (state: State, action: PayloadAction<State>): State => {
      return { ...state, ...action.payload }
    }
  }
})

export const { setWindowSize } = slice.actions

export default slice.reducer
