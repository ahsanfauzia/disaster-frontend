// Emergency Contact Card Component
// Displays contact information with call functionality

import { Phone, Clock } from 'lucide-react'
import './ContactCard.css'

function ContactCard({ contact }) {
  // Destructure contact properties
  const { name, number, icon: Icon, color, description, available } = contact

  // Handle call button click
  const handleCall = () => {
    // In a real app, this would initiate a call
    // For web, we use tel: protocol
    window.location.href = `tel:${number}`
  }

  return (
    <div className="contact-card" style={{ '--contact-color': color }}>
      {/* Contact icon */}
      <div className="contact-icon-wrapper">
        <Icon size={28} className="contact-icon" />
      </div>

      {/* Contact details */}
      <div className="contact-info">
        <h3 className="contact-name">{name}</h3>
        <p className="contact-description">{description}</p>
        
        {/* Availability indicator */}
        <div className="contact-availability">
          <Clock size={14} />
          <span>{available}</span>
        </div>
      </div>

      {/* Phone number and call button */}
      <div className="contact-action">
        <span className="contact-number">{number}</span>
        <button className="call-button" onClick={handleCall}>
          <Phone size={18} />
          <span>Call Now</span>
        </button>
      </div>
    </div>
  )
}

export default ContactCard
