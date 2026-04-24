import { 
  Shield, 
  Target, 
  Lightbulb, 
  Code,
  Users,
  Award,
  BookOpen,
  Rocket
} from 'lucide-react'
import './About.css'

function About() {

  const technologies = [
    { name: 'React', description: 'Frontend Development' },
    { name: 'Vite', description: 'Fast Build Tool' },
    { name: 'React Router', description: 'Navigation Handling' },
    { name: 'Groq API', description: 'AI Chatbot Integration' },
    { name: 'Open-Meteo API', description: 'Weather Data' },
    { name: 'OpenStreetMap API', description: 'Location & City Detection' },
    { name: 'Express.js', description: 'Backend Server' },
    { name: 'CSS3', description: 'UI Styling' }
  ]

  return (
    <div className="about-page">

      {/* Header */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <BookOpen className="header-icon" />
            <h1>About This Project</h1>
            <p>
              An AI-powered Disaster Management System designed to provide real-time 
              assistance, weather updates, and emergency guidance to users.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="overview-section section">
        <div className="container">
          <div className="overview-grid">

            <div className="overview-card">
              <Target className="overview-icon" />
              <h3>Objective</h3>
              <p>
                To develop a smart system that helps users stay prepared and respond 
                effectively during disasters using AI and real-time data.
              </p>
            </div>

            <div className="overview-card">
              <Lightbulb className="overview-icon" />
              <h3>Problem</h3>
              <p>
                Lack of immediate access to disaster-related information and guidance 
                during emergencies can lead to severe consequences.
              </p>
            </div>

            <div className="overview-card">
              <Award className="overview-icon" />
              <h3>Innovation</h3>
              <p>
                Integration of AI chatbot, weather monitoring, and emergency alerts 
                in a single platform.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section section">
        <div className="container">
          <h2>Key Features</h2>

          <div className="features-list">
            <div className="feature-item">✔ AI-powered chatbot for disaster queries</div>
            <div className="feature-item">✔ Real-time weather monitoring</div>
            <div className="feature-item">✔ Auto location detection</div>
            <div className="feature-item">✔ Emergency alerts & notifications</div>
            <div className="feature-item">✔ Disaster safety guidelines</div>
            <div className="feature-item">✔ Emergency contact system</div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-section section">
        <div className="container">
          <h2>Technology Stack</h2>

          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-card">
                <Code className="tech-icon" />
                <h4>{tech.name}</h4>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Scope */}
      <section className="future-section section">
        <div className="container">
          <h2><Rocket /> Future Scope</h2>

          <div className="future-grid">
            <div className="future-item">GPS-based emergency tracking</div>
            <div className="future-item">Push notifications for disasters</div>
            <div className="future-item">Mobile app development</div>
            <div className="future-item">Government API integration</div>
            <div className="future-item">Multi-language support</div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About