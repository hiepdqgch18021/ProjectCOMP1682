import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import "./home.css";
import { loginSuccess } from '../../front-end/src/redux/authSlice';
import { Button,FormGroup, Label,Input} from 'reactstrap';
import jwtDecode from "jwt-decode";


const HomePage = () => {
const user = useSelector((state)=>state.auth.login?.currentUser);
const userList = useSelector((state)=> state.users.users?.allUsers)
const msg = useSelector((state)=>state.user?.msg);
const dispatch = useDispatch();
const navigate = useNavigate();
let axiosJWT = axios.create();
// createAxios(user,dispatch,loginSuccess);


  return (
    <div className="home_page">  
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
    </div>

  );
};

export default HomePage;