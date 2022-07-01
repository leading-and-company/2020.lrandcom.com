import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UpperLeft = {
  type: string
  to: string
  text: string
}
type State = {
  upperLeft: UpperLeft
  slug: string
}

const initialState = {
  upperLeft: {
    type: 'logo',
    to: '',
    text: ''
  },
  slug: ''
}

const slice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setUpperLeft: (state: State, action: PayloadAction<UpperLeft>): State => {
      return { ...state, upperLeft: action.payload }
    },
    setSlug: (state: State, action: PayloadAction<string>): State => {
      return { ...state, slug: action.payload }
    }
  }
})

export const { setSlug, setUpperLeft } = slice.actions

export default slice.reducer
