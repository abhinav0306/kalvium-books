import HomePage from './components/HomePage'
import RegistrationForm from './components/RegistrationForm'
import { Route,Routes } from "react-router-dom"

const App = () => {
  return (
    // setting routes
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/registration" element={<RegistrationForm/>}/>
      
    </Routes>
  )
}

export default App