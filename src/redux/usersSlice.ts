import { createSlice } from "@reduxjs/toolkit";
import data from '../../initData.json'

const initialState = data



export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
});


export default usersSlice.reducer;
