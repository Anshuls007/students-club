// import React, { Component } from "react";
import Home from "./components/pages/home";
import Register from "./components/pages/registration";
import Clubs from "./components/pages/clubs_info";
import Literary from "./components/pages/Literary";
import Photography from "./components/pages/photography";
import Artculture from "./components/pages/artculture";
import Sports from "./components/pages/sports";
import Techworms from "./components/pages/techworms";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/Clubs' element={<Clubs />}></Route>
        <Route exact path='/Registration' element={<Register />}></Route>
        <Route exact path='/Literary' element={<Literary />}></Route>
        <Route exact path='/Techworms' element={<Techworms />}></Route>
        <Route exact path='/Artculture' element={<Artculture />}></Route>
        <Route exact path='/Sports' element={<Sports/>}></Route>
        <Route exact path='/Photography' element={<Photography />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;