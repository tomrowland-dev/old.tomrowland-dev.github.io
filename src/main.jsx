import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './routes/AbtPage'
import './index.css'


import { BrowserRouter, Route, Routes } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        {/* <Route path="portfolio" element={<MyAccount />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
)
