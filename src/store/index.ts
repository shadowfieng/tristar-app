import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { moviesApi } from '../api/moviesApi'
import favoritesReducer from './slices'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

// Step 1: Configure persist settings
const persistConfig = {
  key: 'root',
  storage, // using localStorage
  whitelist: ['favorites'], // only persist the 'favorite' slice
}

// Step 2: Combine reducers
const rootReducer = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
  favorites: favoritesReducer,
})

// Step 3: Wrap root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable checks due to redux-persist
    }).concat(moviesApi.middleware),
})

// Step 5: Create a persistor
export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
