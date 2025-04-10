import { configureStore } from '@reduxjs/toolkit'
import genreSlice from './slices/genreSlice'
import  movieListSlice  from './slices/movieListSlice'
import movieDetailSlice from './slices/movieDetailSlice'
import  favouriteSlices from './slices/favouriteSlices'

export const store = configureStore({
  reducer: {
    genre:genreSlice,
    movieList:movieListSlice,
    movieDetail:movieDetailSlice,
    favourites:favouriteSlices,
  },
})
