import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../store'

export type TurboPostState = {
  selectedTags: string[]
}

const initialState: TurboPostState = {
  selectedTags: [],
}

export const turboPostsSlice = createSlice({
  name: 'turboPosts',
  initialState,
  reducers: {
    clearSelectedTags: (state) => {
      state.selectedTags = initialState.selectedTags
    },
    toggleSelectedTag: (state, action: PayloadAction<string>) => {
      state.selectedTags.includes(action.payload)
        ? (state.selectedTags = state.selectedTags.filter((ele) => {
            return ele !== action.payload
          }))
        : state.selectedTags.push(action.payload)
    },
  },
})

export const selectTurboPostsSelectedTags = (state: AppState): TurboPostState =>
  state.turboPosts

export const turboPostsActions = turboPostsSlice.actions

export const turboPostsReducer = turboPostsSlice.reducer

export default turboPostsSlice
