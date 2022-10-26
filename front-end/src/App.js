import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import Login from "./components/Login/Login";
import HomePage from "./components/Home/HomePage";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Messenger from "./components/Messenger/Messenger";
import StoryDetail from "./components/Form/StoryDetail";
import UserProfile from "./components/User/UserProfile"
import EditProfile from './components/User/EditProfile';
import DiaryDetail from './components/Diary/DiaryDetail';
import DiaryEdit from './components/Diary/DiaryEdit';
import DiaryForm from './components/Diary/DiaryForm';
import StoryForm from './components/Story/StoryForm.jsx';
import InputInformationUser from './components/Register/InputInformation';
import { useEffect } from 'react'
import ListAllUser from './components/AdminScreen/ListAllUser';
import UserDetail from './components/User/UserDetail';
import AdminScreen from './components/AdminScreen/AdminScreen.jsx';
import AddTopic from './components/AdminScreen/AddTopic';
// import { useState } from "react";
import './App.css';
import { authToken } from "../src/redux/apiRequest"

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('persist:root'));//get JWT
  //   const user = JSON.parse(data?.auth);
  //   if(user?.login?.currentUser) setUser(user?.login?.currentUser)
  // }, [])
  const location = useLocation();
  const user = useSelector((state) => state.auth.login.currentUser);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem('jwtLogin')
    console.log(location.pathname)
    if (!token) return navigate("/login")
    authToken(token, dispatch,navigate)
    
    if(location.pathname.slice(0,6)==="/login") 
    return navigate("/") 
    
    
  }, [location.pathname])

  return (
    <>{user ? 
    <div className="App"
      style={{
        // backgroundImage: `url("https://c1.wallpaperflare.com/preview/652/531/737/wood-aerial-background-beverage.jpg")`
      }}
    >
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Messenger" element={<Messenger />} />
        <Route path="/StoryDetail" element={<StoryDetail />} />
        <Route path="/UserProfile" element={<UserProfile />} />

        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/DiaryDetail/:id" element={<DiaryDetail />} />
        <Route path="/DiaryEdit/:id" element={<DiaryEdit />} />
        <Route path="/DiaryForm" element={<DiaryForm />} />
        <Route path="/StoryForm" element={<StoryForm />} />

        <Route path="/ListAllUser" element={<ListAllUser />} />
        <Route path="/UserDetail/:id" element={<UserDetail />} />
        <Route path="/InputInformationUser" element={<InputInformationUser />} />
        <Route path="/AdminScreen" element={<AdminScreen />} />
        <Route path="/AddTopic" element={<AddTopic />} />
      </Routes>
    </div> : 
    <div className="App">
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/InputInformationUser" element={<InputInformationUser />} />
    </Routes>
    </div>
    }
    </>



  )
}

export default App;
