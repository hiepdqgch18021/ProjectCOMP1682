import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { createAxios } from '../../createInstance';

import { loginSuccess } from '../../redux/authSlice';
import jwtDecode from "jwt-decode";
import Header from "../Header/Header";
import StoryHome from '../Story/StoryData';
import "./home.css"
import { getAllStories } from '../../redux/apiRequest';
import ListStoryType from './ListStoryType';
const HomePage = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);


  const msg = useSelector((state) => state.user?.msg);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(user, dispatch, loginSuccess)
  // axios.create();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    };

  }, []);

  return (
    <>
      <Header />

      <div className="homePage">
        <ListStoryType />
        <StoryHome />
      </div>

    </>
  );
};

export default HomePage;


//const refreshToken = async()=>{
  //   try {
  //     const res = await axiosJWT.post("http://localhost:5000/api/auth/refreshToken",{
  //       withCredentials: true,
  //     });
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

// axiosJWT.interceptors.request.use(async(config) =>{
//   let date = new Date();
//   const decodedToken = jwtDecode(user?.accessToken);
//   if(decodedToken.exp < date.getTime()/1000){
//     const data = await refreshToken();
//     const refreshUser ={
//       ...user,
//       accessToken: data.accessToken,
//     };
//     dispatch(loginSuccess(refreshUser))
//     config.headers["token"] = "Bearer " + data.accessToken;
//   };
//   return config;
// },
// (error) => {
//   return Promise.reject(error);
// }
// )