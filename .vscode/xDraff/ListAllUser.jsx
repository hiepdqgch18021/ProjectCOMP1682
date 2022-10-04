import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { deleteUser, getAllUsers } from '../../front-end/src/redux/apiRequest';
import axios from 'axios';
// import { createAxios } from '../../createInstance';
// import "./account.css";
import { loginSuccess } from '../../front-end/src/redux/authSlice';
import jwtDecode from "jwt-decode";


const HomePage = () => {

const user = useSelector((state)=>state.auth.login?.currentUser);
const userList = useSelector((state)=> state.users.users?.allUsers)
const msg = useSelector((state)=>state.user?.msg);
const dispatch = useDispatch();
const navigate = useNavigate();
let axiosJWT = axios.create();
// createAxios(user,dispatch,loginSuccess);

  const handleDelete = (id) => {
    deleteUser(user?.accessToken,dispatch,id,axiosJWT);
  };

// has moved to createInstance file 
const refreshToken = async()=>{
  try {
    const res = await axiosJWT.post("http://localhost:5000/api/auth/refreshToken",{
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

axiosJWT.interceptors.request.use(async(config) =>{
  let date = new Date();
  const decodedToken = jwtDecode(user?.accessToken);
  if(decodedToken.exp < date.getTime()/1000){
    const data = await refreshToken();
    const refreshUser ={
      ...user,
      accessToken: data.accessToken,
    };
    dispatch(loginSuccess(refreshUser))
    config.headers["token"] = "Bearer " + data.accessToken;
  };
  return config;
},
(error) => {
  return Promise.reject(error);
}
)

useEffect(()=>{
  if(!user){
    navigate("/login");
  }
  if(user?.accessToken){
    getAllUsers(user?.accessToken,dispatch,axiosJWT);// "?" : ignore null (optional chaining)
  }  // "?" in if-else : ternary operator
},[]);

  return (
    
    <main className="home-container">
      <div className="home-title">User List</div>
      <div className="home-role">
        {`your role: ${user?.admin ? `Admin` : `user`}`}  
        {/* "?" in if-else : ternary operator */}
      </div>
      <div className="home-userlist">       
        {userList?.map((user) => {
          return (
            <div className="user-container">
              <div className="home-user">{user.username}</div>
              <div className="delete-user" onClick={()=>handleDelete(user._id)}>
                {" "}
                Delete {" "} 
              </div>
            </div>
          );
        })}
      </div>
      <div className="errorMsg">{msg}</div>
    </main>
  );
};

export default HomePage;