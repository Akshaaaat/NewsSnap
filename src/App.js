import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'

import Navbar from "./components/Navbar";
import News from "./components/News";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App(){

  const [mode, setMode] = useState('light');
  const [progress, setProgress]= useState(0);

   const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = "#2c3034";
    } 
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
    }
  };
  
  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>

        <Route exact path="/" element={
            <News setProgress={setProgress} key="general" mode={mode} country="in" catagory="general"/> 
        } />
        <Route exact path="/business" element={
            <News setProgress={setProgress} key="business" mode={mode} country="in" catagory="business"/> 
        } />
        <Route path="/entertainment" element={
            <News setProgress={setProgress} key="entertainment" mode={mode} country="in" catagory="entertainment"/> 
        } />
        <Route path="/health" element={
            <News setProgress={setProgress} key="health" mode={mode} country="in" catagory="health"/> 
        } />
        <Route path="/science" element={
            <News setProgress={setProgress} key="science" mode={mode} country="in" catagory="science"/> 
        } />
        <Route path="/sports" element={
            <News setProgress={setProgress} key="sports" mode={mode} country="in" catagory="sports"/> 
        } />

      </Routes>
    </Router>
  );
}
