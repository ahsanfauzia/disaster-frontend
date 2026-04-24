// Disaster Information Page
// Displays detailed information about various disasters

import { 
  Droplets, 
  Activity, 
  Flame, 
  Mountain,
  AlertTriangle,
  Skull
} from 'lucide-react'
import DisasterCard from '../components/DisasterCard'
import './DisasterInfo.css'

function DisasterInfo() {

  const disasters = [
    {
      id: 1,
      title: 'Flood',
      icon: Droplets,
      color: '#3b82f6',
      description: 'Floods occur when water overflows onto normally dry land. They can happen due to heavy rainfall, dam breaks, or rapid snowmelt.',
      guidelines: [
        'Move to higher ground immediately when flooding occurs',
        'Never walk, swim, or drive through flood waters',
        'Stay away from bridges over fast-moving water',
        'Disconnect electrical appliances if safe to do so',
        'Avoid contact with floodwater as it may be contaminated',
        'If trapped in a building, go to the highest level',
        'Do not return home until authorities declare it safe',
        'Document property damage for insurance claims'
      ]
    },
    {
      id: 2,
      title: 'Earthquake',
      icon: Activity,
      color: '#8b5cf6',
      description: 'Earthquakes are sudden shaking of the ground caused by movement of tectonic plates beneath Earth\'s surface.',
      guidelines: [
        'DROP to your hands and knees to prevent falling',
        'Take COVER under a sturdy desk or table',
        'HOLD ON until the shaking stops',
        'Stay away from windows, mirrors, and heavy objects',
        'If outdoors, move to an open area away from buildings',
        'If driving, pull over and stay inside the vehicle',
        'After shaking stops, check for injuries and damage',
        'Be prepared for aftershocks',
        'Do not use elevators after an earthquake'
      ]
    },
    {
      id: 3,
      title: 'Fire',
      icon: Flame,
      color: '#ef4444',
      description: 'Fires can spread rapidly and cause severe damage to life and property. Quick response is crucial for survival.',
      guidelines: [
        'Alert everyone in the building immediately',
        'Call emergency services (Fire: 101)',
        'Evacuate using stairs, never use elevators',
        'Feel doors before opening - if hot, use another exit',
        'Stay low to avoid smoke inhalation',
        'Cover nose and mouth with a wet cloth',
        'If clothes catch fire: Stop, Drop, and Roll',
        'Meet at a designated assembly point outside',
        'Do not re-enter the building for any reason',
        'If trapped, seal doors and signal for help from window'
      ]
    },
    {
      id: 4,
      title: 'Landslide',
      icon: Mountain,
      color: '#f59e0b',
      description: 'Landslides involve the movement of rock, debris, or earth down a slope. They often occur after heavy rainfall or earthquakes.',
      guidelines: [
        'Evacuate immediately if landslide danger is imminent',
        'Move away from the path of the landslide',
        'If escape is not possible, curl into a tight ball and protect your head',
        'Stay away from the landslide area after it occurs',
        'Watch for flooding that may follow landslides',
        'Check for injured or trapped people near the area',
        'Report damaged utilities to authorities',
        'Replant damaged ground to prevent further erosion',
        'Be alert during storms that could trigger landslides'
      ]
    },

    // 🔥 NEW: GAS TRAGEDY (REAL INCIDENT TYPE)
    {
      id: 5,
      title: 'Gas Tragedy',
      icon: Skull,
      color: '#64748b',
      description: 'Gas tragedies occur due to leakage of toxic industrial gases causing severe health hazards or mass casualties.',
      guidelines: [
        'Immediately move to higher ground or upwind direction',
        'Cover nose and mouth with wet cloth',
        'Avoid inhaling toxic air',
        'Evacuate area immediately if instructed',
        'Do not panic and run randomly',
        'Close all doors and windows if indoors',
        'Turn off AC and ventilation systems',
        'Seek medical help if symptoms like dizziness occur',
        'Follow government emergency alerts strictly'
      ]
    },

    // ⚠️ NEW: CHEMICAL EXPLOSION
    {
      id: 6,
      title: 'Chemical Explosion',
      icon: AlertTriangle,
      color: '#dc2626',
      description: 'Chemical explosions occur in factories or industrial areas releasing hazardous substances into the environment.',
      guidelines: [
        'Evacuate the area immediately',
        'Avoid touching unknown liquids or gases',
        'Cover nose and mouth with cloth or mask',
        'Stay away from smoke or chemical fumes',
        'Follow emergency evacuation routes',
        'Do not use phone near blast area unnecessarily',
        'Wash exposed skin with clean water if safe',
        'Seek immediate medical attention',
        'Follow official instructions only'
      ]
    }
  ]

  return (
    <div className="disaster-info-page">

      {/* Header */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <AlertTriangle className="header-icon" />
            <h1>Disaster Information Hub</h1>
            <p>
              Learn about disasters and safety guidelines to protect yourself in emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="disasters-section section">
        <div className="container">
          <div className="disasters-grid">
            {disasters.map((disaster) => (
              <DisasterCard key={disaster.id} disaster={disaster} />
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="preparedness-section section">
        <div className="container">
          <h2>General Emergency Preparedness Tips</h2>

          <div className="tips-grid">
            <div className="tip-card">
              <span className="tip-number">1</span>
              <h4>Create Emergency Kit</h4>
              <p>Water, food, flashlight, medicines, documents.</p>
            </div>

            <div className="tip-card">
              <span className="tip-number">2</span>
              <h4>Family Plan</h4>
              <p>Set meeting points and emergency contacts.</p>
            </div>

            <div className="tip-card">
              <span className="tip-number">3</span>
              <h4>Stay Updated</h4>
              <p>Follow weather and government alerts.</p>
            </div>

            <div className="tip-card">
              <span className="tip-number">4</span>
              <h4>Practice Drills</h4>
              <p>Regular emergency practice saves lives.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default DisasterInfo