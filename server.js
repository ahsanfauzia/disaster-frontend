import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ SIMPLE & SAFE CORS
app.use(cors());

// ✅ JSON parser
app.use(express.json());

// ✅ ENV CHECK
const GROQ_API_KEY = process.env.GROQ_API_KEY;
if (!GROQ_API_KEY) {
  console.log("❌ API KEY MISSING");
}

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// ✅ CHAT ROUTE
app.post("/chat", async (req, res) => {
  try {
    const messages = req.body.messages;

    if (!messages) {
      return res.status(400).json({ error: "No messages" });
    }

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
          messages: messages,
        }),
      }
    );

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.log("SERVER ERROR:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ IMPORTANT FOR RENDER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});