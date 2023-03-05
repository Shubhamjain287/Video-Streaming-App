import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../reducers/appSlice";
import searchSlice from "../reducers/searchSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice
    }
});

export default store;