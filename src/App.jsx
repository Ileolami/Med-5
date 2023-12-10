import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import LandingPage from './pages/landingpage'
import Login from './pages/login'
import Signup from './pages/signup'
import Dashboard from "./pages/dashboard.jsx";
import Patients from "./pages/patient.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/dashboard/my-patient" element={<Patients/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
