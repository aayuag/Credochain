import React from 'react'
import MainBody from './MainBody'
import Navbar from './Navbar'

const Dashboard = () => {
  return (
    <>
        <div className='main-body'>
            <Navbar />
            <MainBody/>
        </div>
    </>
  )
}

export default Dashboard