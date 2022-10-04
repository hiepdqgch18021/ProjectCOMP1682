import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { DatePicker } from 'antd';
// ReactDOM.render(<DatePicker />, mountNode);
// import 'antd/dist/antd.css';

import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Account from "./components/Account/Account";
import Messenger from "./components/Messenger/Messenger";
import FormUpStory from "./components/Form/FormUpStory";
import StoryDetail from "./components/Form/StoryDetail";
import UserProfile from "./components/User/UserProfile"
import EditProfile from './components/User/EditProfile';
import DiaryDetail from './components/Diary/DiaryDetail';
import DiaryEdit from './components/Diary/DiaryEdit';
import DiaryForm from './components/Diary/DiaryForm';
import InputInformationUser from './components/Register/InputInformation';

import ListAllUser from './components/AdminScreen/ListAllUser';
import AdminScreen from './components/AdminScreen/AdminScreen.jsx';
// import { useState } from "react";
import './App.css';

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('persist:root'));
  //   const user = JSON.parse(data?.auth);
  //   if(user?.login?.currentUser) setUser(user?.login?.currentUser)
  // }, [])

  return (
  <Router>

    <div className="App" 
      style={{ 
        backgroundImage: `url("https://c1.wallpaperflare.com/preview/652/531/737/wood-aerial-background-beverage.jpg")` 
      }}
    >    
      <Routes>   
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={ <Login />} />  
          <Route path='/account' element={<Account/>}/>  
          <Route path="/register" element={<Register />} />
          <Route path="/Messenger" element={<Messenger />} />
          <Route path="/FormUpStory" element={<FormUpStory />} />
          <Route path="/StoryDetail" element={<StoryDetail />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/DiaryDetail" element={<DiaryDetail />} />
          <Route path="/DiaryEdit" element={<DiaryEdit />} />
          <Route path="/DiaryForm" element={<DiaryForm />} />
          <Route path="/ListAllUser" element={<ListAllUser />} />
          <Route path="/InputInformationUser" element={<InputInformationUser />} />
          <Route path="/AdminScreen" element={<AdminScreen />} />
      </Routes>      
    </div>
  </Router>
  );
}

export default App;
