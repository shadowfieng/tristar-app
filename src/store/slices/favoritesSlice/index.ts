import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Movie = {
  title: string
  description: string
  posterImg: string
  id: string
}

export interface FavoritesState {
  items: Movie[]
}

const initialState: FavoritesState = {
  items: [],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<Movie>) {
      state.items.push(action.payload)
    },
    removeFromFavorites(state, action: PayloadAction<{ id: string }>) {
      state.items = state.items.filter(
        (movie) => movie.id !== action.payload.id
      )
    },
    clearAllFavorites(state) {
      state.items = []
    },
  },
  selectors: {
    selectFavorites: (state) => state.items,
  },
})

// Action creators are generated for each case reducer function
export const favoritesSliceActions = favoritesSlice.actions
export const favoritesSliceSelectors = favoritesSlice.selectors

export default favoritesSlice.reducer
