import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { createAxios } from '../../createInstance';

import { loginSuccess } from '../../redux/authSlice';
import jwtDecode from "jwt-decode";
import Header from "../Header/Header";
import StoryHome from '../Story/StoryHome';
import "./home.css"
import { getAllStories } from '../../redux/apiRequest';

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

                <div className="topic-title">
                  <h3>
                    <span>List Of Topic</span>
                  </h3>
                </div>

                <div className="list-topic">
                  <nav className="navbar bg-light">
                    <div className="container-fluid">
                      <form className="d-flex form-search-topic" role="search">
                        <input
                          className="form-control me-2"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </form>
                    </div>
                  </nav>

                  <div className="topic-element">
                    <div className='btn-topic-element'>
                      <div className="topic-name">
                        <span>Detective novels</span>
                      </div>
                      <div className="topic-amount">
                        <span> 138k story </span>
                      </div>
                    </div>

                    <div className='btn-topic-element'>
                      <div className="topic-name">
                        Historical fiction
                      </div>
                      <div className="topic-amount">
                        <span> 138k story </span>
                      </div>
                    </div>
                    <div className='btn-topic-element'>
                      <div className="topic-name">
                        Romance novels
                      </div>
                      <div className="topic-amount">
                        <span> 138k story </span>
                      </div>
                    </div>
                    <div className='btn-topic-element'>
                      <div className="topic-name">
                        Fantasy novels
                      </div>
                      <div className="topic-amount">
                        <span> 138k story </span>
                      </div>
                    </div>
                  </div>
                </div>

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