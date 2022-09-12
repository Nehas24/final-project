import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';

import Employee from './Components/Employee';
import Contact from './Components/Contact';

const App = () => {

  

  const pbaseURL = "http://127.0.0.1:8089/employee"

  const [ppost, setPpost] = useState(null);
  useEffect(() => {
    axios.get(pbaseURL)
      .then((response) => {
        setPpost(response.data);
      });
  }, []);


  // const [post, setPost] = useState(null);
  // useEffect(() => {
  //   axios.get(baseURL)
  //     .then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);


  // const handleDelete = (id) => {
  //   axios.delete(`http://127.0.0.1:8089/user/${id}`)
  //   window.location.reload()
  // }

  const employeeDelete = (id) => {
    axios.delete(`http://127.0.0.1:8089/employee/${id}`)
    window.location.reload()
  }

  return (
    <>
      <Router>
        <div className="page">
          <Navbar />
        </div>
        <div className="Home">
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/About' element={< About />}></Route>
            {/* <Route exact path='/Table' element={< Table post={post} handleDelete={handleDelete} />}></Route> */}
            <Route exact path='/Employee' element={< Employee ppost={ppost} employeeDelete={employeeDelete} />}></Route>
            <Route exact path='/Contact' element={< Contact />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;