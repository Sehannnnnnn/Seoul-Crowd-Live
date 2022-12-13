import './App.css';
import React, {useEffect, useState} from 'react';
import Splash from './page/Splash';
import Main from './page/Main';
import List from './page/List';
import Info from './page/Info';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Splash/>} />
        <Route path="/main" element={<Main/>}/>
        <Route path="/list" element={<List/>} />
        <Route path="/info" element={<Info/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
