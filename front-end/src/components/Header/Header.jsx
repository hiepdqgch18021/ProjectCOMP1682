import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAxios } from '../../createInstance';
 import { logout } from "../../redux/apiRequest";
import {loginSuccess} from "../../redux/authSlice";
// import Messenger from "../Messenger/Messenger";

import "./header.css";
import {  DropdownToggle,DropdownMenu,NavbarBrand,Nav,ListGroup,
          DropdownItem,Navbar,ListGroupItem,NavLink,NavItem,UncontrolledDropdown } from 'reactstrap';
import Story from "../Story/Story";

const Header = ({ direction, ...args}) => {
 
 const user = useSelector((state) => state.auth.login.currentUser);  

// -----------------------------------------------------
const accessToken = user?.accessToken;
const id = user?._id;
const dispatch = useDispatch();
const navigate = useNavigate();

let axiosJWT = createAxios(user,dispatch,loginSuccess)



const handleLogout=()=>{
logout(dispatch,navigate,id,accessToken,axiosJWT)
}

  return (    
    <div className="header-container">
    <Navbar className="navbar-container">
      <NavbarBrand href="/ListAllUser">list all user</NavbarBrand>
      <NavbarBrand href="/register">Register</NavbarBrand>
      <NavbarBrand href="/StoryDetail">StoryDetail</NavbarBrand>
        <Nav >
          <NavItem >
            {/* Home */}
            <NavLink href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
              </svg>
            </NavLink>
          </NavItem>

          <NavItem className="link-items"> 
              {/* Mes */}
            <NavLink href="/Messenger">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
            </svg>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/StoryForm">  
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg> 
            </NavLink>   
          </NavItem>
          <NavItem className="nav-item-notifications">
            {/* notifications */}
{/* -------------------------------------------------- */}
          <UncontrolledDropdown nav inNavbar >
            <DropdownToggle nav caret >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
              </svg>         
            </DropdownToggle>
            <DropdownMenu  className="dropdown-menu-notifications">
              <DropdownItem>
              <ListGroup>
                <ListGroupItem  action href="#" tag="a">
                  Dapibus ac facilisis in
                </ListGroupItem>
                <ListGroupItem action href="#" tag="a">
                  Morbi leo risus
                </ListGroupItem>
                <ListGroupItem action href="#" tag="a">
                  Porta ac consectetur ac
                </ListGroupItem>          
              </ListGroup>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
{/* -------------------------------------------------- */}
          </NavItem>

{/* profile */}       
          <UncontrolledDropdown nav inNavbar >      
            <DropdownToggle nav caret >
              <span>
                {user.username}
              </span>              
              <img
                src="https://github.com/mdo.png"
                // src="https://github.com/mdo.png"
                alt="mdo"
                width={32}
                height={32}
                className="rounded-circle"
              />          
            </DropdownToggle>
                  
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href="/UserProfile"> Profile </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/EditProfile">Edit</NavLink>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={handleLogout} >Logout</DropdownItem>
            </DropdownMenu>

          </UncontrolledDropdown>
          
        </Nav>
      
    </Navbar>
  </div>

  );
  
};

export default Header;




























