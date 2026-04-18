import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ SAFE CORS (no crash, works on mobile)
app.use(cors());

// ❌ REMOVE THIS (Express v5 me error deta hai)
// app.options("*", cors());

app.use(express.json());

// ✅ API KEY SAFE
const GROQ_API_KEY = process.env.GROQ_API_KEY;

if (!GROQ_API_KEY) {
  console.error("❌ GROQ_API_KEY missing in .env");
}

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.post("/chat", async (req, res) => {
  try {
    const messages = req.body.messages;

    if (!Array.isArray(messages)) {
      return res.status(400).json({
        error: "Messages must be an array",
      });
    }

    const cleanedMessages = messages.map((m) => ({
      role: m.role,
      content: m.content,
    }));

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: cleanedMessages,
          temperature: 0.7,
          max_tokens: 512,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log("GROQ ERROR:", data);
      return res.status(response.status).json(data);
    }

    res.json(data);
  } catch (err) {
    console.error("SERVER ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Render compatible port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});