import { BrowserRouter,Routes, Route } from "react-router-dom"
import './App.css'
import LandingPage from './components/landingpage'
import Login from './components/login'
import Signup from './components/signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
