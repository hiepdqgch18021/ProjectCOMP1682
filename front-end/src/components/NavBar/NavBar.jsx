import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createAxios } from "../../createInstance";
import { logout } from "../../redux/apiRequest";
import { logoutSuccess } from "../../redux/authSlice";
import "./NavBar.css";

const NavBar = () => {

  const user = useSelector((state)=>state.auth.login.currentUser) ;
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(user,dispatch,logoutSuccess);
  
  const handleLogout = ()=>{
    logout(dispatch,id,navigate,accessToken,axiosJWT);
  }
  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-home"> Home </Link>
      {user? (
        <>
        <p className="navbar-user"> {user.username}  </p>
        <Link 
          to="/login" 
          className="navbar-logout"
          onClick={handleLogout}>
             Log out
        </Link>
        </>
      ) : (    
      <>
      <Link to="/login" className="navbar-login"> Login </Link>
      <Link to="/register" className="navbar-register"> Register</Link>
      </>
)}
    </nav>
  );
};

export default NavBar;



























