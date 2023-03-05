import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({

    name: "search",

    initialState: {
        "shubham" : [ "Shubham jain", "shubhamjainpvt28@gmail.com" ,"Jain", "Coder" , "Coding Enthusiator", "React developer", "MERN", "Node JS"]
    },

    reducers : {

        cacheResults : (state,action) => {
            state = Object.assign(state, action.payload);
        }

    }

});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

/**
 *  API Call Like
 *      example :- Iphone
 *  if we are earsing this like
 *      example :- Iphon
 *  it will make a new API Call for Iphon, what if we can Cache it in Redux store for further Use
 *  it will reduce our API Calls.
 *  
 *  Flipcard --> Not Using this.
 *  Youtube --> Using this.
 */