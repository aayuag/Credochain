import React from 'react'
import './style.css'
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
  const [name,setName]=useState("")
  const [mobile,setMobile]=useState("")
  const [address,setAddress]=useState("")
  const [age,setAge]=useState("")
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [istrainer,setIstrainer]=useState("")

  const history=useNavigate()
  const handlecancel=()=>{
    history("/")
  }
  const handlesignin=()=>{
    history("/signin")
  }
  
  const handlesignupbutton=(e)=>{
    if(name===""){
      alert("Please Enter Your Name")
    }else if(mobile===""){
      alert("Please Enter Your Mobile no.")
    }else if(address===""){
      alert("Please Enter Your Address")
    }else if(age===""){
      alert("Please Enter Your Age")
    }else if(username===""){
      alert("Please Enter Username")
    }else if(password===""){
      alert("Please Enter Your Password")
    }else if(istrainer===""){
      alert("Please Select You are a Trainer or Joiner")
    }else{
      handleserver()
    }
  }

  const handleserver=()=>{
    fetch("http://localhost:3001/user/signup", {
        method: "post",
        body: JSON.stringify({
            name,
            mobile,
            address,
            age,
            username,
            password,
            istrainer
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        if(res.status===400){
            alert("Already User Exists")
        }else{
            alert("User Successfully Added")
        }
        handlesignin()
    }).catch((err) => {
        console.log(err)
    })
}

  return (
    <>
    <div className='frontpage-full'>    
        <div className='frontpage-middle'>
        <img src='logo.png' className='frontpage-image' alt='logo'></img>
            <h1 className='frontpage-heading'>Register With Us</h1>
            <br></br>
            <div className='signup-grid'>    
            
            <input type="text" id='name' className='signup-input' placeholder='Full Name' onChange={(e)=>{setName(e.target.value)}}/>            
            <br></br>            
            <input type="number" id='mobile' className='signup-input' placeholder='Mobile No.' onChange={(e)=>{setMobile(e.target.value)}}/>
            <br></br>            
            <input type="text" id='address' className='signup-input' placeholder='Address' onChange={(e)=>{setAddress(e.target.value)}}/>
            <br></br>            
            <input type="number" id='age' className='signup-input' placeholder='Age' onChange={(e)=>{setAge(e.target.value)}}/>
            <br></br>            
            <input type="text" id='username' className='signup-input' placeholder='Username'onChange={(e)=>{setUsername(e.target.value)}}/>
            <span className='small-text'>*Username Should be Unique</span>
            <br></br>            
            <input type="password" id='password' className='signup-input' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <br></br>
            <div>
            <h4 className='signup-h4'>Please Select You are a Trianer or Joiner</h4>
            <div className='radio-button'>
            <div>
            <input type="radio" id="trainer" name='typeuser' value="Trainer" onChange={(e)=>{setIstrainer(e.target.value)}}/>
            <label for="trainer">Trainer</label>
            </div>
            <div>
            <input type="radio" id="joiner" name='typeuser' value="Joiner" onChange={(e)=>{setIstrainer(e.target.value)}}/>
            <label for="joiner">Joiner</label>
            </div>
            </div>
            </div>
            <button className='frontpage-button' onClick={handlesignupbutton}>Submit</button>
            </div>
            <p className='cancel' onClick={handlecancel}>Cancel</p>
        </div>
    </div>
</>
  )
}

export default SignUp