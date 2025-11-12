import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Events from './pages/Event/Events'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Events />} />
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
