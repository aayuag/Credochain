import React from 'react'
import './style.css'
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = ()=> {
    // console.log("entered in logout")
    localStorage.setItem("authorization", "");
    navigate("/");
    }
  return (
    <>
        	<header className="header">
            <div className='navbar-logo'>
            <img src='logo.png' className='navbar-logo' alt='logo'></img>
		<h1 className="logo"><a href="#home">Credo Gym</a></h1>

        </div>
      <ul className="main-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><button className='navbar-button' onClick={handleLogout}>Logout</button></li>
      </ul>

	</header> 
    </>
  )
}

export default Navbar