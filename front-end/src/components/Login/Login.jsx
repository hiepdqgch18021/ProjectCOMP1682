import {Link} from "react-router-dom";
import React, { useState } from "react";
import { loginUser } from "../../redux/apiRequest";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button,FormGroup, Label,Input} from 'reactstrap';

import "./login.css";
import { addListener } from "@reduxjs/toolkit";
import { Alert } from "bootstrap";

const Login = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e)=>{
      e.preventDefault(); //to not loading page again
    const newUser = {
        //the name have to same title in req.body in postman
        username: username,
        password: password,
    };
    loginUser(newUser, dispatch,navigate);
   }

return(
  <section className="login-container" >              
      <div className="min-h-full  justify-center py-12 px-4 sm:px-6 lg:px-8">
      <img
        className="mx-auto mb-px h-40 w-auto"
        src="https://img.freepik.com/premium-vector/story-life-book-logo_144543-387.jpg"
        alt="Workflow"
      />
          <div className="max-w-md w-full space-y-8">
            <div className="login_title">
              
              <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
                Sign in
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or 
                <Link className="login-register" to="/register">
                  <Button className="btn-register">
                    Register        
                  </Button>
                </Link>
              </p>
            </div>

            <form className="login_input" onSubmit={handleLogin}>
              <FormGroup>
                <Label for="exampleEmail" hidden>
                  Username
                </Label>
                <Input
                  id="exampleEmail"
                  name="username"
                  placeholder="Username"
                  type="text"
                  onChange={(e)=>setUsername(e.target.value)} 
                />
              </FormGroup>              
              <FormGroup>
                <Label for="examplePassword" hidden>
                  Password
                </Label>
                <Input id="examplePassword"
                 name="password"
                 placeholder="Password"  
                 type="password"
                 onChange={(e)=>setPassword(e.target.value)} 
                  />
              </FormGroup>              
              <Button className="btn_submit">
                Submit
              </Button>
            </form>
            
          </div>
        </div>
  </section>

);
}

export default Login;






























