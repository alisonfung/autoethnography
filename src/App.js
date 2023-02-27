import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home.js'; 
import Start from './pages/Start';
import DB02R from './pages/DB02R';
import Beach from './pages/Beach';
import Pier from './pages/Pier';
import FoTan from './pages/FoTan';
import ExitC from './pages/ExitC';
import SuiWo from './pages/SuiWo';
import Temple from './pages/Temple';
import End from './pages/End';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Start" element={<Start/>}></Route>
        <Route path="/DB02R" element={<DB02R/>}></Route>
        <Route path="/Beach" element={<Beach/>}></Route>
        <Route path="/Pier" element={<Pier/>}></Route>
        <Route path="/FoTan" element={<FoTan/>}></Route>
        <Route path="/ExitC" element={<ExitC/>}></Route>
        <Route path="/SuiWo" element={<SuiWo/>}></Route>
        <Route path="/Temple" element={<Temple/>}></Route>
        <Route path="/End" element={<End/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
