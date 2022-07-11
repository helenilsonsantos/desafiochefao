import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLogged: false,
    token: ""
}


 export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}
})

