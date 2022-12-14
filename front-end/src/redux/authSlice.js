import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        register:{
            isFetching: false, //loading function
            error:false, //error function
            success:false, //success function           
        },
        login:{
            currentUser: null, //store all information when user login success
            isFetching: false, //loading function
            error:false, 
        },
      
    },
    reducers: {
        loginStart:(state)=>{
            state.login.isFetching = true;
        },
        loginSuccess:(state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error =false;
        },
        loginFailed:(state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },

// -----------------------------------------------------------
        registerStart:(state)=>{
            state.register.isFetching = true;
        },
        registerSuccess:(state) => {
            state.register.isFetching = false;
            state.register.error =false;
            state.register.success =true;
        },
        registerFailed:(state) => {
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success =false;
        },
// -----------------------------------------------------------
        logoutStart:(state)=>{
            state.login.isFetching = true;
        },
        logoutSuccess:(state) => {
            state.login.isFetching = false;
            state.login.currentUser =null;
            state.login.error =false;
        },
        logoutFailed:(state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
    }
});

export const{
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    logoutStart,
    logoutSuccess,
    logoutFailed,
} = authSlice.actions;

export default authSlice.reducer;








