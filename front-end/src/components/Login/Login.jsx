import {Link} from "react-router-dom";
import React, { useState } from "react";
import { loginUser } from "../../redux/apiRequest";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import "./login.css";

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
    <div className="login-title">Login</div>   

    <form onSubmit={handleLogin}>       
        <label htmlFor="">USERNAME</label>
        <input 
            type="text" 
            placeholder="Enter your username" 
            onChange={(e)=>setUsername(e.target.value)} 
        />
        
        <label htmlFor="">PASSWORD</label>
        <input 
        type="password" 
        placeholder="Enter your password"
        onChange={(e)=>setPassword(e.target.value)} 
        />
        
        <button type="submit">Login</button>
    </form>

    <div className="login-register">Don't have an account yet?</div>
    <Link className="login-register" to="/register">
        Register one for free
    </Link>

    </section>
);
}

export default Login;






























