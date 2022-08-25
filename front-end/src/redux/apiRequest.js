import axios from "axios";
import { token } from "morgan";
// import { useNavigate } from "react-router-dom";
import { loginFailed, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccess, registerFailed, registerStart, registerSuccess} from "./authSlice";
import { getUsersStart,getUsersSuccess,getUserFailed, deleteUserFailed, deleteUserSuccess, deleteUserStart  } from "./userSlice";


export const loginUser = async(user,dispatch,navigate )=>{
    dispatch(loginStart());  
    try {
        const res = await axios.post("http://localhost:5000/api/auth/login",user);
        dispatch(loginSuccess(res.data));
        navigate('/')
    } catch (err) {
          dispatch(loginFailed())  
    }

};

export const registerUser = async (user,dispatch,navigate) => {
    dispatch(registerStart());
    try {
        const res = await axios.post("http://localhost:5000/api/auth/register",user);
        dispatch(registerSuccess());
        navigate("/login");
    } catch (err) {
        dispatch(registerFailed());
    }
};

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

export const deleteUser = async(accessToken,dispatch,id,axiosJWT) => {
    dispatch(deleteUserStart());
    try {
        const res = await axiosJWT.delete(`http://localhost:5000/api/user/${id}`,{
            headers: {token:`Bearer ${accessToken}`},
        });
        dispatch(deleteUserSuccess(res.data));
        
    } catch (err) {
        dispatch(deleteUserFailed(err.response.data));
    }
};

export const logout = async(dispatch,id,navigate,accessToken,axiosJWT)=>{
    dispatch(logoutStart());
    try {
        await axiosJWT.post("http://localhost:5000/api/auth/logout",id,{
            header: {token:`Bearer ${accessToken}`},            
        });
        dispatch(logoutSuccess())
        navigate("/login");
        localStorage.clear();
    } catch (err) {
        dispatch(logoutFailed())
    }
}






