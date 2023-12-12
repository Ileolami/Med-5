import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Web5Provider } from './Utils/Web5Provider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Web5Provider>
   <App/>
   </Web5Provider>
  </React.StrictMode>,
)
