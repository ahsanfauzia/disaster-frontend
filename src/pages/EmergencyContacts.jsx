// Emergency Contacts Page
// Displays important emergency contact numbers

import { 
  Phone, 
  Shield, 
  HeartPulse,   // ✅ fixed (Ambulance removed)
  Flame,
  AlertTriangle,
  Users,
  Building,
  Heart
} from 'lucide-react'
import ContactCard from '../components/ContactCard'
import './EmergencyContacts.css'

function EmergencyContacts() {
  // Emergency contacts data
  const contacts = [
    {
      id: 1,
      name: 'Police',
      number: '100',
      icon: Shield,
      color: '#3b82f6',
      description: 'Report crimes, accidents, and law enforcement emergencies',
      available: '24/7 Available'
    },
    {
      id: 2,
      name: 'Ambulance',
      number: '102',
      icon: HeartPulse,   // ✅ fixed
      color: '#10b981',
      description: 'Medical emergencies and urgent health situations',
      available: '24/7 Available'
    },
    {
      id: 3,
      name: 'Fire Brigade',
      number: '101',
      icon: Flame,
      color: '#ef4444',
      description: 'Fire emergencies and rescue operations',
      available: '24/7 Available'
    },
    {
      id: 4,
      name: 'National Emergency',
      number: '112',
      icon: AlertTriangle,
      color: '#f59e0b',
      description: 'Unified emergency number for all emergencies',
      available: '24/7 Available'
    },
    {
      id: 5,
      name: 'Women Helpline',
      number: '1091',
      icon: Users,
      color: '#ec4899',
      description: 'Support for women in distress or emergency',
      available: '24/7 Available'
    },
    {
      id: 6,
      name: 'Disaster Management',
      number: '108',
      icon: Building,
      color: '#8b5cf6',
      description: 'Natural disaster response and emergency relief',
      available: '24/7 Available'
    }
  ]

  return (
    <div className="emergency-contacts-page">
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <Phone className="header-icon" />
            <h1>Emergency Contacts</h1>
            <p>
              Quick access to essential emergency services. In case of emergency, 
              stay calm and dial the appropriate number for immediate assistance.
            </p>
          </div>
        </div>
      </section>

      <section className="emergency-notice">
        <div className="container">
          <div className="notice-content">
            <AlertTriangle className="notice-icon" />
            <div>
              <strong>Universal Emergency Number: 112</strong>
              <p>Works across all mobile networks, even without a SIM card</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contacts-section section">
        <div className="container">
          <div className="contacts-grid">
            {contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </section>

      <section className="emergency-tips section">
        <div className="container">
          <h2>When Calling Emergency Services</h2>
          <div className="tips-content">
            <div className="tip-item">
              <Heart className="tip-icon" />
              <h4>Stay Calm</h4>
              <p>Take a deep breath and speak clearly</p>
            </div>
            <div className="tip-item">
              <Building className="tip-icon" />
              <h4>State Location</h4>
              <p>Give your exact address or landmarks</p>
            </div>
            <div className="tip-item">
              <AlertTriangle className="tip-icon" />
              <h4>Describe Emergency</h4>
              <p>Explain what happened and who needs help</p>
            </div>
            <div className="tip-item">
              <Phone className="tip-icon" />
              <h4>Stay on Line</h4>
              <p>Don't hang up until told to do so</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EmergencyContacts