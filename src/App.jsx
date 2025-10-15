import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Events from './pages/Event/Events'
import CirclesPage from './components/Check/CirclesPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Events />} />
      <Route path="/circle" element={ <CirclesPage />} />
    </Routes>
  )
}

export default App
