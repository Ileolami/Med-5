import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import LandingPage from './pages/landingpage'
import Login from './pages/login'
import Signup from './pages/signup'
import Dashboard from "./pages/dashboard.jsx";
import Patients from "./pages/patient.jsx"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

function App() {
  AOS.init();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route exact path="/dashboard" 
          element={<Dashboard/>}
          >
          <Route path="my-patient" element={<Patients/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
