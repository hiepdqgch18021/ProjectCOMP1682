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
import Story from "../Story/StoryForm";

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
    <>
    
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

    <header aria-label="Page Header" className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="flex items-center sm:justify-between sm:gap-4">
      <div className="relative hidden sm:block">
        <label className="sr-only" htmlFor="search">
          {" "}
          Search{" "}
        </label>
        <input
          className="h-10 w-full rounded-lg border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
          id="search"
          type="search"
          placeholder="Search website..."
        />
        <button
          type="button"
          className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
        >
          <span className="sr-only">Submut Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
        <div className="flex gap-4">
          <button
            type="button"
            className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
          >
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <a
            href="#"
            className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
          >
            <span className="sr-only">Academy</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </a>
          <a
            href="#"
            className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
          >
            <span className="sr-only">Notifications</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </a>
        </div>
        <button
          type="button"
          className="group flex shrink-0 items-center rounded-lg transition"
        >
          <span className="sr-only">Menu</span>
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-10 w-10 rounded-full object-cover"
          />
          <p className="ml-2 hidden text-left text-xs sm:block">
            <strong className="block font-medium">Eric Frusciante</strong>
            <span className="text-gray-500"> eric@frusciante.com </span>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>

  </div>
</header>
    </>  



  );
  
};

export default Header;




























