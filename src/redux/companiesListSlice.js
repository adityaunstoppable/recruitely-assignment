import { createSlice } from "@reduxjs/toolkit";

const companiesListSlice = createSlice({
    name:"companiesListSlice",
    initialState:{
        data:[]
    },
    reducers:{
        addCompaniesInBulk:(state, action) => {
            (action.payload)
            state.data = [...state.data, ...action.payload]
        },
        addNewCompany:(state, action) => {
            state.data =   state.data = [action.payload, ...state.data];
        }
    }
})

export const {addCompaniesInBulk, addNewCompany} = companiesListSlice.actions;

export default companiesListSlice.reducer;