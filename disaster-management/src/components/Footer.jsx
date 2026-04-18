// Footer Component
// Displays copyright and additional links

import { Shield, Heart } from 'lucide-react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand and tagline */}
        <div className="footer-brand">
          <div className="footer-logo">
            <Shield size={24} />
            <span>DisasterGuard</span>
          </div>
          <p className="footer-tagline">
            Empowering communities with disaster preparedness knowledge
          </p>
        </div>

        {/* Quick links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/disaster-info">Disaster Information</a></li>
            <li><a href="/emergency-contacts">Emergency Contacts</a></li>
            <li><a href="/chatbot">AI Assistant</a></li>
          </ul>
        </div>

        {/* Emergency reminder */}
        <div className="footer-emergency">
          <h4>In Case of Emergency</h4>
          <p>National Emergency Number: <strong>112</strong></p>
          <p>Stay calm and follow safety guidelines</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {currentYear} DisasterGuard. Made with <Heart size={14} className="heart-icon" /> for Community Safety
        </p>
        <p className="footer-note">
          College Minor Project - B.Tech CSE
        </p>
      </div>
    </footer>
  )
}

export default Footer
