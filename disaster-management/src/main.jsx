import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// ✅ PWA REGISTER
import { registerSW } from 'virtual:pwa-register'

registerSW({ immediate: true })

// ✅ INSTALL PROMPT GLOBAL
window.deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  window.deferredPrompt = e;
  console.log("✅ Install available");
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
