import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; 
import Logo from '../Assets/Logo.jpg';


function Navbar() {
  return (
    <nav className="navbar">
        <img src={Logo} alt="Logo" />
        <h1>Ferrari Fever</h1>
        <ul className="navbar-nav">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined} >Home</NavLink></li>
            <li><NavLink to="/Chat" className={({ isActive }) => isActive ? 'active' : undefined}>Chat</NavLink></li>
            
        </ul>
        <p><i>No relation to Ferrari, <br></br>just a educational project.</i></p>
        
    </nav>
  );
}

export default Navbar;