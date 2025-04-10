
import { createSlice } from "@reduxjs/toolkit"
import { getItem, setItem } from "../storage/storageService"


const initialState = {
    movies: getItem('favourite'),
}

const writeFromFavouriteToStorage = (favourite) => {
    localStorage.setItem('favourites', JSON.stringify(favourite))
}

export const favouritesSlices = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        addFavourite: (state, action) => {
            const findFavourite = state.movies && state.movies.find((movie) => movie.id == action.payload.id)
            if(findFavourite) {
                // daha önce eklenmiş
            } else {
                state.movies = [...state.movies, action.payload]
                setItem('favourite',state.movies)
            }
        },
        removeFavourite: (state, action) => {
            const filtered = state.movies && state.movies.filter((movie) => movie.id !==  action.payload.id)
            console.log(filtered);
            state.movies = filtered
            setItem('favourite',state.movies)
        }
    }
})

export const { addFavourite, removeFavourite } = favouritesSlices.actions;
export default favouritesSlices.reducer;
