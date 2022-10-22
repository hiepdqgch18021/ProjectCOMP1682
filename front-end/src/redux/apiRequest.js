import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { loginFailed, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccess, registerFailed, registerStart, registerSuccess} from "./authSlice";
import { getStoriesStart, getStoriesSuccess } from "./storySlice";
import { getUsersStart,getUsersSuccess,getUserFailed, deleteUserFailed, deleteUserSuccess, deleteUserStart  } from "./userSlice";


export const authToken = async(accessToken,dispatch,navigate )=>{
    //request to server with jwt to authentication server
    try {
        const res = await axios.get("http://localhost:5000/api/auth/verifyToken",{
            headers:{ 
                token:`Bearer ${accessToken}`,
                accept: 'application/json'
            }
        });   
        dispatch(loginSuccess(res.data));
        if(res.data.admin)
        return navigate('/AdminScreen');
        
    } catch (err) {
        console.log(err)
    }
 }



export const loginUser = async(user,dispatch,navigate )=>{ //dispatch to call action in authSlice
    dispatch(loginStart());  
    try {
        const res = await axios.post("http://localhost:5000/api/auth/login",user);        
        dispatch(loginSuccess(res.data));
        localStorage.setItem("jwtLogin",res.data.accessToken);
        if(res.data.admin)
        return navigate('/AdminScreen');
        return navigate('/');
    } catch (err) {
          dispatch(loginFailed())  ;
    }
};
    
export const registerUser = async (user,dispatch,navigate) => {
    dispatch(registerStart());
    try {
        await axios.post("http://localhost:5000/api/auth/register",user);
        dispatch(registerSuccess());
        navigate("/InputInformationUser");
    } catch (err) {
        dispatch(registerFailed());
    }
};

export const InputUserInfo = async (UserInfo,dispatch,navigate) => {
try {
    
} catch (error) {
    
}
};

export const deleteUser = async(accessToken,dispatch,id,axiosJWT) => {
    dispatch(deleteUserStart());
    try {
        const res = await axiosJWT.delete(`http://localhost:5000/api/user/${id}`
        ,{
            headers: {token:`Bearer ${accessToken}`},
        });
        dispatch(deleteUserSuccess(res.data));   
    } catch (err) {
        dispatch(deleteUserFailed(err.response.data));
    }
};

// export const logout = async(dispatch,id,navigate,accessToken,axiosJWT)=>{
//     dispatch(logoutStart());
//     try {
//         await axiosJWT.post("http://localhost:5000/api/auth/logout",id,{
//             header: {token:`Bearer ${accessToken}`},            
//         });
//         dispatch(logoutSuccess())
//         navigate("/login");
//         localStorage.clear();
//     } catch (err) {
//         dispatch(logoutFailed())
//     }
// }

export const getAllStories = async(dispatch)=>{
    dispatch(getStoriesStart())
    try {
        const res = await axios.get("http://localhost:5000/api/story/getAllStory")
        dispatch(getStoriesSuccess(res.data))
        console.log(res.data)
    } catch (error) {
        dispatch(getStoriesStart())
    }
}

export const getAllUsers = async(accessToken,dispatch,axiosJWT)=>{
        dispatch(getUsersStart());
        try {
            const res = await axiosJWT.get("http://localhost:5000/api/user/getAllUsers",{
                headers:{ 
                    token:`Bearer ${accessToken}`,
                }
            });
            dispatch(getUsersSuccess(res.data));
        } catch (error) {
            dispatch(getUserFailed());
        }
    };





