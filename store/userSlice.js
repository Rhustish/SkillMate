import { createSlice } from "@reduxjs/toolkit";
import { ActionSheetIOS } from "react-native";

const initialState = {
    authOK : false
};

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setAuthOK: (state,action) => {
            const retval = action.payload
            state.authOK = retval
        }
    }
})