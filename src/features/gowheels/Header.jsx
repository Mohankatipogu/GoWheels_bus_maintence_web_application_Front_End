import React, { useEffect } from 'react';
import Logo from "./assets/logo.png";
import "./Header.css"
import { useNavigate } from 'react-router-dom';
import Features from './Features';
import { Link } from 'react-router-dom';
function Header() {
  var navigate=useNavigate()
  async function logout(){
    await localStorage.clear('token')
    navigate('/login')
  }
  useEffect(()=>{
     if(window.localStorage.getItem('token')){
          navigate('/')
     }
     else{
      navigate("/login")
     }
},[])
  return (
    <div>
    <div className="d-flex align-items-center justify-content-between m-2">
      <div className="d-flex align-items-center hmbtn">
        <img src={Logo} alt="GoWheels Logo" className="logo" />
        <p className="logo-text mb-0 ms-2">GoWheels</p>
      </div>
      <button className="btn logout" onClick={(()=>{logout()})}>Logout</button>
    </div>
    <div>
    <div className="d-flex justify-content-center align-items-center title">
  <div className="d-flex align-items-center hmbtn">
    <img src={Logo} alt="GoWheels Logo" className="hdlogo" />
    <p className=" mb-0 ms- hdtext">GoWheels</p>
  </div>
</div>
    <div className=' text-center m-3 text'>
    <p>Resolve bus-related expenses for a business, you can consider multiple strategies to reduce costs,</p>
    <p>optimize operations, and track expenses more efficiently.</p>
    </div>
    </div>
    <div>
    <div className='d-flex align-items-center justify-content-center hmbtn'>
            {/* <button className='getbtn'>Get Started</button> */}
            {/* <button className='getbtn '>Learn More</button> */}
            <Link to="/drivers" className='text-decoration-none text-dark'>
            <p className='getbtn m-3 text-center p-3 rounded'>Get Started</p>
            </Link>
            <p className='getbtn m-3 text-center p-3 rounded'>Learn More</p>
    </div>
    </div>
    <div>
      <Features></Features>
    </div>
  </div>
  );
}

export default Header;
