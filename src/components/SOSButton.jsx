// SOS Emergency Button Component
// Displays an alert when clicked (simulates emergency message)

import { useState } from 'react'
import { AlertTriangle, Phone } from 'lucide-react'
import './SOSButton.css'

function SOSButton() {
  // State to show confirmation message
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Handle SOS button click
  const handleSOS = () => {
    // Show alert to user
    alert('🚨 Emergency SOS Activated!\n\nYour emergency message has been sent to local authorities.\n\nPlease stay calm and wait for assistance.')
    
    // Show confirmation message
    setShowConfirmation(true)
    
    // Hide confirmation after 3 seconds
    setTimeout(() => {
      setShowConfirmation(false)
    }, 3000)
  }

  return (
    <div className="sos-container">
      <button className="sos-button" onClick={handleSOS}>
        <AlertTriangle className="sos-icon" />
        <span>SOS</span>
      </button>
      
      {/* Confirmation message */}
      {showConfirmation && (
        <div className="sos-confirmation">
          <Phone size={16} />
          <span>Emergency message sent!</span>
        </div>
      )}
    </div>
  )
}

export default SOSButton
