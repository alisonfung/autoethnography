import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home.js'; 
import Start from './pages/Start';


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
