import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './routes/AbtPage'

// import NBB_Route from './routes/NBB_Route'

import './index.css'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './routes/ContactPage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactPage />} />
        {/* <Route path="nbb" element={<NBB_Route />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
)
