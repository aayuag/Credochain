import React, { useState } from 'react'
import './style.css'
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

const SignIn = () => {
  const history=useNavigate()
  const handlecancel=()=>{
    history("/")
  }
  const handleroute=()=>{
    history("/dashboard")
  }
  const [login, setLogin] = useState({username: "", password: ""})
  const handlesigninbtn=(e)=>{
    axios({
      url: "https://credogym-backend.herokuapp.com/user/login",
      method: "POST",
      headers: {
      },
      data: login
  }).then((loginData)=> {    
    localStorage.setItem("authorization", loginData.data.authToken);
    handleroute()
  }).catch((err)=> {
      alert(err.response.data)
      
  })
  }
  return (
    <>
        <div className='frontpage-full'>    
        <div className='frontpage-middle'>
        <img src='logo.png' className='frontpage-image' alt='logo'></img>
            <h1 className='frontpage-heading'>Enter Your Details to Login</h1>
            <br></br>
            <div className='signup-grid'>
            <input type="text" id='username' className='signup-input' placeholder='Username' onChange={(e)=> {setLogin({...login, username: e.target.value})}}/>
            <br></br>            
            <input type="password" id='password' className='signup-input' placeholder='Password' onChange={(e)=> {setLogin({...login, password: e.target.value})}}/>
            <br></br>            
            <button className='frontpage-button' onClick={handlesigninbtn} >Submit</button>
            
            <p className='cancel' onClick={handlecancel}>Cancel</p>
            </div>            
        </div>
    </div>
    </>
  )
}

export default SignIn