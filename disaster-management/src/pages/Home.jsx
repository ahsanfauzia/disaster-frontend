// Home Page Component
// Landing page with introduction to disaster management

import { Link } from 'react-router-dom'
import { 
  Shield, 
  AlertTriangle, 
  Phone, 
  Bot, 
  ArrowRight,
  CheckCircle,
  Users,
  BookOpen
} from 'lucide-react'
import Weather from "../components/Weather"   // ✅ ADDED
import './Home.css'

function Home() {
  // Feature cards data
  const features = [
    {
      icon: AlertTriangle,
      title: 'Disaster Information',
      description: 'Comprehensive guides on various disasters including floods, earthquakes, fires, and landslides.',
      link: '/disaster-info',
      color: '#f59e0b'
    },
    {
      icon: Phone,
      title: 'Emergency Contacts',
      description: 'Quick access to essential emergency services including police, ambulance, and fire brigade.',
      link: '/emergency-contacts',
      color: '#10b981'
    },
    {
      icon: Bot,
      title: 'AI Assistant',
      description: 'Get instant answers to your disaster-related questions from our intelligent chatbot.',
      link: '/chatbot',
      color: '#3b82f6'
    }
  ]

  // Statistics for impact section
  const stats = [
    { value: '24/7', label: 'Support Available' },
    { value: '100+', label: 'Safety Guidelines' },
    { value: '10+', label: 'Disaster Types Covered' },
    { value: 'Instant', label: 'AI Response Time' }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Shield size={16} />
            <span>Trusted Safety Resource</span>
          </div>
          
          <h1 className="hero-title">
            AI-Powered <span className="highlight">Disaster Management</span> & Emergency Response System
          </h1>
          
          <p className="hero-description">
            Be prepared, stay informed, and respond effectively during emergencies. 
            Our comprehensive platform provides real-time guidance, safety protocols, 
            and AI-assisted support when you need it most.
          </p>
          
          <div className="hero-actions">
            <Link to="/disaster-info" className="btn btn-primary">
              Explore Safety Guides
              <ArrowRight size={18} />
            </Link>
            <Link to="/chatbot" className="btn btn-secondary">
              <Bot size={18} />
              Ask AI Assistant
            </Link>
          </div>
        </div>

        {/* Hero illustration */}
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-icon emergency">
              <AlertTriangle size={32} />
            </div>
            <h3>Emergency Ready</h3>
            <p>Instant access to critical information</p>
          </div>
        </div>
      </section>

      {/* 🌦️ Weather Section (ADDED) */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Weather />
      </div>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="section-header">
            <h2>How We Help You Stay Safe</h2>
            <p>Comprehensive tools and resources at your fingertips</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <Link 
                to={feature.link} 
                key={index} 
                className="feature-card"
                style={{ '--feature-color': feature.color }}
              >
                <div className="feature-icon">
                  <feature.icon size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="feature-link">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Preparedness Matters */}
      <section className="importance section">
        <div className="container">
          <div className="importance-content">
            <div className="importance-text">
              <h2>Why Disaster Preparedness Matters</h2>
              <p>
                Natural disasters can strike without warning. Being prepared can mean 
                the difference between life and death. Our platform equips you with 
                the knowledge and tools to protect yourself and your loved ones.
              </p>
              
              <ul className="importance-list">
                <li>
                  <CheckCircle className="check-icon" />
                  <span>Learn proper evacuation procedures</span>
                </li>
                <li>
                  <CheckCircle className="check-icon" />
                  <span>Know what supplies to keep ready</span>
                </li>
                <li>
                  <CheckCircle className="check-icon" />
                  <span>Understand warning signs of disasters</span>
                </li>
                <li>
                  <CheckCircle className="check-icon" />
                  <span>Get instant AI-powered guidance</span>
                </li>
              </ul>
            </div>

            <div className="importance-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <Users className="cta-icon" />
            <h2>Ready to Learn More?</h2>
            <p>
              Explore our comprehensive disaster management resources and 
              become better prepared for any emergency situation.
            </p>
            <Link to="/about" className="btn btn-primary">
              <BookOpen size={18} />
              About This Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home