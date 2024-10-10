import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import companiesListSlice from "./companiesListSlice";

const store = configureStore({
    reducer:{
        auth: authSlice,
        companiesList:companiesListSlice
    }
})

export default store;