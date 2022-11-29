import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import Login from "./components/Login/Login";
import HomePage from "./components/Home/HomePage";
import Register from "./components/Register/Register";
import Messenger from "./components/Messenger/Messenger";
import UserProfile from "./components/User/UserProfile"
import EditProfile from './components/User/EditProfile';
import DiaryDetail from './components/Diary/DiaryDetail';
import DiaryForm from './components/Diary/DiaryForm';
import { useEffect } from 'react'
import ListAllUser from './components/AdminScreen/ListAllUser';
import AdminScreen from './components/AdminScreen/AdminScreen.jsx';
import AddTopic from './components/AdminScreen/AddTopic';
import StoryTypeDetail from './components/Home/StoryTypeDetail.jsx'

import './App.css';
import { authToken } from "../src/redux/apiRequest"

function App() {

  const location = useLocation();
  const user = useSelector((state) => state.auth.login.currentUser);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem('jwtLogin')
    if (!token)  {
      navigate("/login")
      return
    }
    authToken(token, dispatch,navigate)
    
    if(location.pathname.slice(0,6)==="/login") 
    return navigate("/") 
    console.log(location.pathname)
  }, [])

  return (
    <>{user ? 
    <div className="App">
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Messenger" element={<Messenger />} />
        <Route path="/StoryTypeDetail/:type" element={<StoryTypeDetail />} />     
        <Route path="/UserProfile/:id" element={<UserProfile />} />
        <Route path="/EditProfile/:id" element={<EditProfile />} />
        <Route path="/DiaryDetail/:id" element={<DiaryDetail />} />
        <Route path="/DiaryForm" element={<DiaryForm />} />
        <Route path="/ListAllUser" element={<ListAllUser />} />
        <Route path="/AdminScreen" element={<AdminScreen />} />
        <Route path="/AddTopic" element={<AddTopic />} />
      </Routes>
    </div> : 
    <div className="App">
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </div>
    }
    </>



  )
}

export default App;
