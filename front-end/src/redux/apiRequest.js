import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { loginFailed, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice";
import { getUsersStart, getUsersSuccess, getUserFailed, deleteUserFailed, deleteUserSuccess, deleteUserStart } from "./userSlice";

const url = process.env.REACT_APP_URL_AXIOS;

export const authToken = async (accessToken, dispatch, navigate) => {
    //request to server with jwt to authentication server
    try {
        const res = await axios.get(url + "/auth/verifyToken", {
            headers: {
                token: `Bearer ${accessToken}`,
                accept: 'application/json'
            }
        });
        dispatch(loginSuccess(res.data));
        if (res.data.admin)
            return navigate('/AdminScreen');
    } catch (err) {
        console.log(err)
    }
}



export const loginUser = async (user, dispatch, navigate) => { //dispatch to call action in authSlice
    dispatch(loginStart());
    try {
        const res = await axios.post(url + "/auth/login", user);
        dispatch(loginSuccess(res.data));
        localStorage.setItem("jwtLogin", res.data.accessToken);
        if (res.data.admin)
            return navigate('/AdminScreen');
            alert("success")
            return navigate('/');
    } catch (err) {
        console.log(err);
        dispatch(loginFailed());
    }
};

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {

        await axios.post(url + "/auth/register", user,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    accept: 'application/json'
                }
            }
        );
        dispatch(registerSuccess());
        alert("register success")
        navigate("/login");
    } catch (err) {
        console.log(err)
        alert("register false")
        dispatch(registerFailed());
    }
};

export const deleteUser = async (accessToken, dispatch, id) => {
    dispatch(deleteUserStart());
    try {
        const res = await axios.delete(url + `/user/${id}`
            , {
                headers: { token: `Bearer ${accessToken}` },
            });
        dispatch(deleteUserSuccess(res.data));
    } catch (err) {
        dispatch(deleteUserFailed(err.response.data));
    }
};

// export const logout = async (dispatch, id, navigate, accessToken) => {
//     dispatch(logoutStart());
//     try {
//         await axios.post(url + "/auth/logout", id, {
//             headers: { token: `Bearer ${accessToken}` },
//         });
//         localStorage.clear("jwtLogin");     
//         dispatch(logoutSuccess())
//         navigate("/login");
//     } catch (err) {
//         console.log(err);
//         dispatch(logoutFailed())
//     }
// }

export const getAllUsers = async (accessToken, dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.get(url + "/user/getAllUsers", {
            headers: {
                token: `Bearer ${accessToken}`,
            }
        });
        dispatch(getUsersSuccess(res.data));
    } catch (error) {
        dispatch(getUserFailed());
    }
};





