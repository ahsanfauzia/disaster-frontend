// Navigation bar component
// Provides links to all pages and includes mobile responsive menu

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Shield } from 'lucide-react'
import SOSButton from './SOSButton'
import './Navbar.css'

function Navbar() {
  // State to track mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Get current location to highlight active link
  const location = useLocation()

  // Navigation links configuration
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/disaster-info', label: 'Disaster Info' },
    { path: '/emergency-contacts', label: 'Emergency Contacts' },
    { path: '/chatbot', label: 'AI Chatbot' },
    { path: '/about', label: 'About' },
  ]

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and brand name */}
        <Link to="/" className="navbar-brand">
          <Shield className="brand-icon" />
          <span className="brand-text">DisasterGuard</span>
        </Link>

        {/* Desktop navigation links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
          
          {/* SOS Button in navbar */}
          <li className="nav-sos">
            <SOSButton />
          </li>
        </ul>

        {/* Mobile menu toggle button */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
