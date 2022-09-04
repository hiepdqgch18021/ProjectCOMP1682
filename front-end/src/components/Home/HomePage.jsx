import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
// import { createAxios } from '../../createInstance';
// import "./account.css";
import { Button,FormGroup, Label,Input,ButtonGroup} from 'reactstrap';
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
    navigate("/login");
  }
},[]);

  return (
    
  <div className="home_page">  
    <div className="nav_bar">
      <NavBar/>
    </div>

    <div className="form_middle"> 
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
          
        </div>
    </div>
      <div className="story_topic">
        <ButtonGroup vertical>        
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