import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Footer from './pages/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div>
      <Navbar />
      <ToastContainer
        toastClassName="bg-dark-300 text-white rounded-xl"
        bodyClassName="text-sm"
        position="top-right"
      />
      <Routes>

        <Route path='/' element={<Home />} />

      </Routes>
      <Footer />

    </div>

  )
}

export default App
