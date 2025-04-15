import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
const initialState = {
    users: [],
    loading: false
}
export const getAllUsers = createAsyncThunk('users', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data;
})
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //Http isteği olmaz ise kullanılır.

    },
    extraReducers: (builder) => {
        //Http isteği olduğunda kullanılır.
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
    }
})

export const { } = userSlice.actions // Sadece reducer içindeki fonksiyonları açmak için kullanılır
export default userSlice.reducer