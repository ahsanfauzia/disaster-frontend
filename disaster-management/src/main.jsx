import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// ✅ PWA REGISTER (offline + install support)
import { registerSW } from 'virtual:pwa-register'

registerSW({
  immediate: true,
  onOfflineReady() {
    console.log("App is ready to work offline ✅")
  },
  onNeedRefresh() {
    console.log("New content available 🔄")
  }
})

// ✅ INSTALL PROMPT CAPTURE
let deferredPrompt

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault()
  deferredPrompt = e
  window.deferredPrompt = e
  console.log("Install prompt ready ✅")
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
