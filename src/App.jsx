import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import LandingPage from './pages/landingpage'
import Dashboard from "./pages/dashboard.jsx";
import Patients from "./pages/patient.jsx"
import Doctor from "./pages/doctor.jsx"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  AOS.init();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>} />
            <Route path="/dashboard/doctor" element={<Doctor/>}/>
            <Route path="/dashboard/patient" element={<Patients/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
