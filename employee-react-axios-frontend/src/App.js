import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import {Routes,Route,Link } from 'react-router-dom'
import React, { Component } from "react";


import Home from './components/Home'
import AddEmp from './components/AddEmp';
import EditEmp from './components/EditEmp';

class App extends Component {
    render() {
      return (
        <div>

          <Navbar></Navbar>    
      <Routes>
      
      <Route path="/" element={<Home />}></Route>
      <Route path="/addEmp" element={<AddEmp />}></Route>
      <Route path="/editEmp/:id" element={<EditEmp />}></Route>
     </Routes>
      
    
        </div>
      );
    }
  }
  
  export default App;
