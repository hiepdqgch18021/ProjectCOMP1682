import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NavBar from "./components/NavBar/NavBar";
// import { useState } from "react";
import './App.css';

function App() {

  return (
    <Router>
    <NavBar />
    <div className="App"> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
