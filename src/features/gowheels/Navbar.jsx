import React from 'react';
import Logo from "./assets/logo.png";
import "./Navbar.css";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <label>
    <div className="navbar-container">
      <div className="sidebar ">
        <div className="logo-container d-flex align-items-center m-2 ">
          <Link to="/">
          <img src={Logo} alt="GoWheels Logo" className="logo" />
          </Link>
          <Link to="/" className='text-decoration-none text-dark'>
          <p className="logo-text">GoWheels</p>
          </Link>
        </div>
        <hr className='border border-2'/>
        <ul className="menu">
          <Link to="/" className='text-decoration-none text-dark'>
          <li className="menu-item border border-2 m-2">
            <i className="bi bi-house-door"></i> Dashboard
          </li>
          </Link>
          <Link to="/drivers" className='text-decoration-none text-dark'>
          <li className="menu-item border border-2 m-2">
            <i className="bi bi-people"></i> Drivers
          </li>
          </Link>
          <Link to="/expenses" className='text-decoration-none text-dark'>
          <li className="menu-item border border-2 m-2">
            <i className="bi bi-person"></i> Expenses
          </li>
          </Link>
          <li className="menu-item border border-2 m-2">
            <i className="bi bi-bar-chart-line"></i> Reports
          </li>
          <li className="menu-item border border-2 m-2">
            <i className="bi bi-gear"></i> Settings
          </li>
        </ul>
      </div>
    </div>
    </label>
  );
}

export default Navbar;
