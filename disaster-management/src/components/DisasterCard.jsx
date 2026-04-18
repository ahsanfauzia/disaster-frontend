// Disaster Information Card Component
// Displays disaster type with icon and safety guidelines

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import './DisasterCard.css'

function DisasterCard({ disaster }) {
  // State to toggle expanded guidelines
  const [isExpanded, setIsExpanded] = useState(false)

  // Destructure disaster properties
  const { title, icon: Icon, color, description, guidelines } = disaster

  return (
    <div className="disaster-card" style={{ '--card-color': color }}>
      {/* Card header with icon and title */}
      <div className="disaster-header">
        <div className="disaster-icon-wrapper">
          <Icon size={32} className="disaster-icon" />
        </div>
        <h3 className="disaster-title">{title}</h3>
      </div>

      {/* Brief description */}
      <p className="disaster-description">{description}</p>

      {/* Toggle button for guidelines */}
      <button 
        className="guidelines-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>Safety Guidelines</span>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {/* Expandable guidelines section */}
      <div className={`guidelines-content ${isExpanded ? 'expanded' : ''}`}>
        <ul className="guidelines-list">
          {guidelines.map((guideline, index) => (
            <li key={index} className="guideline-item">
              <span className="guideline-number">{index + 1}</span>
              <span>{guideline}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DisasterCard
