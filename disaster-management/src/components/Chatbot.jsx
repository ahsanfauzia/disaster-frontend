import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";
import "../components/Chatbot.css";

// ✅ UPDATED BACKEND URL
const API_URL = "https://disaster-backend-616z.onrender.com";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I am your Disaster Management Assistant 🤖",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const endRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      role: "user",
      content: input.trim(),
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    setError("");

    try {
      // Wake backend (Render cold start)
      await fetch(API_URL);

      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error("Invalid server response");
      }

      console.log("RESPONSE:", data);

      if (!res.ok) {
        console.log("API ERROR:", data);
        throw new Error(
          typeof data?.error === "string"
            ? data.error
            : data?.error?.message || "Server error"
        );
      }

      const reply =
        data?.choices?.[0]?.message?.content ||
        data?.message ||
        "No response received from AI.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply },
      ]);
    } catch (err) {
      console.log("ERROR:", err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot">
      {/* Header */}
      <div className="chat-header">
        <Bot />
        <h3>Disaster Assistant</h3>
      </div>

      {/* Messages */}
      <div className="messages-container">
        {messages.map((m, i) => (
          <div key={i} className={`message ${m.role}`}>
            <div className="message-avatar">
              {m.role === "assistant" ? (
                <Bot size={18} />
              ) : (
                <User size={18} />
              )}
            </div>
            <div className="message-content">{m.content}</div>
          </div>
        ))}

        {loading && (
          <div className="loading">
            <Loader2 className="spin" />
            <span>Thinking...</span>
          </div>
        )}

        {error && <p className="error">{error}</p>}

        <div ref={endRef}></div>
      </div>

      {/* Input */}
      <div className="chat-input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask about disasters..."
        />

        <button onClick={handleSend} disabled={loading}>
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
