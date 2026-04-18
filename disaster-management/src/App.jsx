import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import DisasterInfo from './pages/DisasterInfo.jsx'
import EmergencyContacts from './pages/EmergencyContacts.jsx'
import ChatbotPage from './pages/ChatbotPage.jsx'
import About from './pages/About.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disaster-info" element={<DisasterInfo />} />
          <Route path="/emergency-contacts" element={<EmergencyContacts />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App