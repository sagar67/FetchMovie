import { createSlice } from "@reduxjs/toolkit";

const usernameSlice = createSlice({
    name:'login',
    initialState:{
        username:''
    },
    reducers:{
        username(state,action){
            state.username = state.username + action.payload
        }
    }
})

export const usernameActions = usernameSlice.actions;

export default usernameSlice.reducer;