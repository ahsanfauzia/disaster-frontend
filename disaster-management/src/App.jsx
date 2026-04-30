import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import DisasterInfo from './pages/DisasterInfo.jsx'
import EmergencyContacts from './pages/EmergencyContacts.jsx'
import ChatbotPage from './pages/ChatbotPage.jsx'
import About from './pages/About.jsx'
import './App.css'

// ✅ INSTALL FUNCTION (FINAL)
function installApp() {
  if (window.deferredPrompt) {
    window.deferredPrompt.prompt()

    window.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted install')
      } else {
        console.log('User dismissed install')
      }
      window.deferredPrompt = null
    })
  } else {
    // 🔥 fallback (always works)
    alert("👉 Install manually:\n\nTap 3 dots (⋮) → 'Install App' or 'Add to Home Screen'")
  }
}

function App() {
  return (
    <div className="app">
      <Navbar />

      {/* 📲 INSTALL BUTTON */}
      <div style={{ textAlign: "center", margin: "10px" }}>
        <button
          onClick={installApp}
          style={{
            padding: "10px 20px",
            background: "#facc15",
            color: "#000",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          📲 Install App
        </button>
      </div>

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
