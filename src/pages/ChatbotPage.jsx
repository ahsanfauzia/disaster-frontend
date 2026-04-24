import { Bot, Info } from "lucide-react";
import Chatbot from "../components/Chatbot";
import "./ChatbotPage.css";

function ChatbotPage() {
  return (
    <div className="chatbot-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <Bot className="header-icon" />
            <h1>AI Disaster Assistant</h1>
            <p>
              Get instant answers to disaster-related questions. Our AI helps
              you stay safe during emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section className="chatbot-section section">
        <div className="container">
          <div className="api-notice">
            <Info size={18} />
            <span>
              Connected to backend server (Node.js + Groq API)
            </span>
          </div>

          <Chatbot />
        </div>
      </section>
    </div>
  );
}

export default ChatbotPage;