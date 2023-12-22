import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import ServicesPage from './components/ServicesPage'
import View_Portfolio_Page from './components/View_Portfolio_Page'
import PricePage from './components/PricePage'
import BlogsPage from './components/BlogsPage'
import Navbar from './context/Navbar'
import "@fontsource/inter";
import "@fontsource/inter/400.css";
const App = () => {
  return (
    <div className='app_bg'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/services" element={<ServicesPage />} />
          <Route exact path="/viewportfolio" element={<View_Portfolio_Page />} />
          <Route exact path="/price" element={<PricePage />} />
          <Route exact path="/bloge" element={<BlogsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
