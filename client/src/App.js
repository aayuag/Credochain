import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard'
import SignIn from './Components/SignIn'
import FrontPage from './Components/FrontPage'
import SignUp from './Components/SignUp'
import Protected from './Components/Protected';

const App = () => {
  return (
    <>
    <BrowserRouter>
     <Routes>
      
      <Route path="/" exact element={<FrontPage/>}></Route>
      <Route path="/dashboard" element={<Protected><Dashboard/></Protected>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App