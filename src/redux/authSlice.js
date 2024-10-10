import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"authSlice",
    initialState:{
        name:null,
        password:null
    },
    reducers:{
        addUser:(state, action) => {
            state.name = action.payload.username
            state.password = action.payload.password
        },
        logout:(state,action) => {
            state.name = null,
            state.password = null
        }
    }
})

export const {addUser, logout} = authSlice.actions;

export default authSlice.reducer;