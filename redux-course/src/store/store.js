import { configureStore } from '@reduxjs/toolkit'
import { reducer as favoriteReducer } from './favorites/favorites.slice'
import { combineReducers } from '@reduxjs/toolkit'

const reducers = combineReducers({
  favorites : favoriteReducer,
})



export const store = configureStore({

    reducer:reducers,
  })