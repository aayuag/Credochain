import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard'
import SignIn from './Components/SignIn'
import FrontPage from './Components/FrontPage'
import SignUp from './Components/SignUp'
import Protected from './Components/Protected';
import SignProtected from './Components/SignProtected';

const App = () => {
  return (
    <>
    <BrowserRouter>
     <Routes>
      
      <Route path="/" exact element={<SignProtected><FrontPage/></SignProtected>}></Route>
      <Route path="/dashboard" element={<Protected><Dashboard/></Protected>}></Route>
      <Route path="/signup" element={ <SignProtected><SignUp/></SignProtected>  }></Route>
      <Route path="/signin" element={ <SignProtected><SignIn/></SignProtected> }></Route>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
