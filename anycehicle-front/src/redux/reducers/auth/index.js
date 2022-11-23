import { createSlice } from "@reduxjs/toolkit";

export const    authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token") || "",
        isLoggedIn:  localStorage.getItem("token") ? true : false
    },
    reducers: {
        login: (state, action) => {
            localStorage.setItem("token",action.payload);
            state.token=action.payload;
            state.isLoggedIn=true;
        },
        logout :(state,action)=>{
            state.token="";
            state.isLoggedIn=false;
            localStorage.clear();
        }
    }
})


export const{login,logout}=authSlice.actions

export default authSlice.reducer