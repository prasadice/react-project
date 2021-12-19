
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './bootstrap/css/bootstrap.min.css'
import Login from "./components/App";
import Home from "./components/Home";
import Logged from "./components/logged";




ReactDOM.render(
  <Router>
  <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Logged" element={<Logged/>}/>
      </Routes>
      </Router>
      ,

  document.getElementById("root")
);




