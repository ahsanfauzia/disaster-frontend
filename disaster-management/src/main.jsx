// Entry point of the React application

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// 🔥 PWA REGISTER
import { registerSW } from 'virtual:pwa-register'
registerSW({ immediate: true })

// 🔥 INSTALL PROMPT CAPTURE
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  window.deferredPrompt = e; // global access
  console.log("Install ready");
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
