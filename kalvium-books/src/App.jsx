import React from 'react'
import HomePage from './components/HomePage'
import RegistrationForm from './components/RegistrationForm'
import { Route,Routes } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/registration" element={<RegistrationForm/>}/>
      
    </Routes>
  )
}

export default App