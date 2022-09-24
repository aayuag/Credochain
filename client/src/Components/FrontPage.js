import React from 'react'
import './style.css'
import {useNavigate} from 'react-router-dom';

const FrontPage = () => {

  const history=useNavigate()
  const handlesignup=()=>{
    history("/signup")
  }
  const handlesignin=()=>{
    history("/signin")
  }
  return (
    <>
        <div className='frontpage-full'>
        
            <div className='frontpage-middle'>
            <img src='logo.png' className='frontpage-image' alt='logo'></img>
                <h1 className='frontpage-heading'>Choose Your Option</h1>
                <button className='frontpage-button' onClick={handlesignin}>I Am A Existing Member</button>
                <br></br>
                
                <button className='frontpage-button' onClick={handlesignup}>I Am A New Member</button>
                <br></br>
                
            </div>
        </div>
    </>
  )
}

export default FrontPage