import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../reducers/appSlice";
import chatSlice from "../reducers/chatSlice";
import searchSlice from "../reducers/searchSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        chat: chatSlice
    }
});

export default store;