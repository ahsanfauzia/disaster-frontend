import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";
import "./Chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I am your Disaster Management Assistant 🤖",
    },
  ]);
  console.log("NEW VERSION LOADED");

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const endRef = useRef(null);

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
      const res = await fetch("https://disaster-project-oyfj.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();

      console.log("FULL DATA:", data);

      if (!res.ok) {
        const text = JSON.stringify(data);
        console.log("ERROR RESPONSE:", text);
        throw new Error("API Error");
      }

      // ✅ SAFE RESPONSE HANDLING
      const reply =
        data?.choices?.[0]?.message?.content ||
        data?.choices?.[0]?.text ||
        data?.message ||
        "⚠️ No response from AI";

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: reply,
        },
      ]);
    } catch (err) {
      console.log("ERROR:", err);
      setError("❌ Server slow hai ya API issue hai (wait & retry)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot">

      {/* HEADER */}
      <div className="chat-header">
        <Bot />
        <h3>Disaster Assistant</h3>
      </div>

      {/* MESSAGES */}
      <div className="messages-container">
        {messages.map((m, i) => (
          <div key={i} className={`message ${m.role}`}>
            <div className="message-avatar">
              {m.role === "assistant" ? <Bot size={18} /> : <User size={18} />}
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

      {/* INPUT */}
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