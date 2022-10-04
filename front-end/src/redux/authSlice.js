import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login:{
            currentUser: null, //store all information when user login
            isFetching: false, //loading function
            error:false, 
        },
        register:{
            isFetching: false, //loading function
            error:false, //error function
            success:false, //success function           
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

    }
});

export const{
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    // logoutStart,
    // logoutSuccess,
    // logoutFailed,
} = authSlice.actions;

export default authSlice.reducer;








