import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Experience from './pages/Experience'
import Data from './pages/Data'
import Mission from './pages/Mission'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Experience />} />
        <Route path="/data" element={<Data />} />
        <Route path="/mission" element={<Mission />} />
      </Routes>
    </div>
  )
}

export default App