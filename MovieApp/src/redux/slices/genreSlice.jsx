import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_GENRE, API_KEY } from '../../constants/api'

const initialState = {
  genres: [],
}
export const getGenres=createAsyncThunk('genres', async()=>{
    const res=await axios.get(`${API_GENRE}?api_key=${API_KEY}`)
    console.log("API Response:", res.data);  
    return res.data.genres;
})

export const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {},
  extraReducers: (builder) => { 
    builder
      .addCase(getGenres.fulfilled, (state, action) => {
        state.genres = action.payload.length > 0 ? action.payload : [{ id: 0, name: "Veri bulunamadı" }];
      })
  }
})


export const {  } = genreSlice.actions

export default genreSlice.reducer