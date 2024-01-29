import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './component/Homepage/Homepage.jsx'
import Navbar from './component/Navbar/Navbar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Homepage />
    <Navbar/>
  </React.StrictMode>,
)
