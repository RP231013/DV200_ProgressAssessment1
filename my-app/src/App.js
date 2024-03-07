import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Chat from './Components/Chat';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App-container">
        <NavBar /> 
        <div className="page-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;