import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <img className="image image-cover" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg" />

      <div className="navbar-title">
        
        Library Management System
        
        </div>
    </div>
   
        </>
  );
};

export default Navbar;