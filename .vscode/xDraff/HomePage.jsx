import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
// import { createAxios } from '../../createInstance';
// import "./account.css";
import { Button,FormGroup, Label,Input,ButtonGroup,Toast,ToastHeader,ToastBody} from 'reactstrap';
import NavBar from "../NavBar/NavBar";

import { loginSuccess } from '../../redux/authSlice';
import jwtDecode from "jwt-decode";
import "./home.css"
const HomePage = () => {

const user = useSelector((state)=>state.auth.login?.currentUser);
const userList = useSelector((state)=> state.users.users?.allUsers)
const msg = useSelector((state)=>state.user?.msg);
const dispatch = useDispatch();
const navigate = useNavigate();
let axiosJWT = axios.create();
// createAxios(user,dispatch,loginSuccess);

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
    navigate("/");
  }
},[]);
  
  return (
    
  <div className="home_page">  
    <div className="nav_bar">
      <NavBar/>
    </div>

    <div className="form_middle flex-center"> 
        <div className="form_up_story">
          <FormGroup>
              <Label for="exampleSelect">
                Story Type
              </Label>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
              >
                <option>
                  1
                </option>
                <option>
                  2
                </option>
                <option>
                  3
                </option>
              </Input>
              <Label for="exampleText"> Your Story </Label>
              <Input id="exampleText" name="text" type="textarea" />
              <Label for="exampleFile"> File </Label>
              <Input id="exampleFile" name="file" type="file" />
                <Button> Submit </Button>
          </FormGroup>
        </div>

        <div className="display_story">
        {/* <div className="p-3 bg-info my-2 rounded">
          <Toast>
            <ToastHeader>
              Hiepdqgch18021
            </ToastHeader>
            <ToastBody>
              This is a toast on an info background — check it out!
            </ToastBody>
          </Toast>
          <Toast>
            <ToastHeader>
              Hiepdqgch
            </ToastHeader>
            <ToastBody>
              This is a toast on an info background — check it out!
            </ToastBody>
          </Toast>
          <Toast>
            <ToastHeader>
              yang
            </ToastHeader>
            <ToastBody>
              This is a toast on an info background — check it out!
            </ToastBody>
          </Toast>
        </div> */}

          <section class="text-white-600 body-font ">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="p-4 lg:w-1/3">
                  <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1>
                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <a class="text-blue-500 inline-flex items-center">Learn More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>

                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        </div>
    </div>
      <div className="story_topic">
        <ButtonGroup vertical className="btn_group_topic">        
          <Button color="danger">
            Detective novels
          </Button>
          <Button color="warning">
            Fantasy novels
          </Button>
          <Button color="success">
            Romance novels
          </Button>
          <Button color="success">
            Historical fiction
          </Button>
        </ButtonGroup>
      </div>
  </div>
);
};

export default HomePage;