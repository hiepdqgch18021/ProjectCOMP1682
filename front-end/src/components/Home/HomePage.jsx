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
      <header className='sidebar'>
        <Header />
      </header>

      <main className='main-home-page'>

        <section className="home-page-container ">

          <div className="container">
            <div className="row">
              {/* <div className="col-2 d-none d-lg-block d-md-block "></div> */}

              <div className="col-lg-10 col-md-10 col-sm-10 story-content-container ">
                <StoryHome />
              </div>

              <div className=" col-2 d-none d-lg-block d-md-block list-topic-container ">

                <ListStoryType/>

              </div>


              <div className="col-2 d-none d-lg-block d-md-block "></div>

            </div>
          </div>
        </section>

      </main>
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