import { GoogleGenAI } from "@google/genai";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useRef, useEffect } from "react";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const ai = new GoogleGenAI({ apiKey });

const Learning = () => {
  const [userRequest, setUserRequest] = useState("");
  const [topic, setTopic] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chatHistory, loading]);

  const handleRequest = async () => {
    if (!topic) return setError("Please select a subject first.");
    if (!userRequest.trim()) return setError("Please type your question.");

    setError("");
    setLoading(true);

    const currentRequest = userRequest.trim();
    setUserRequest("");

    // Save user question to chat history immediately
    setChatHistory((prev) => [...prev, { type: "user", message: currentRequest }]);

    const prompt = `
You are an expert ${topic} educator with 10+ years of teaching experience.
Respond to this user request: "${currentRequest}"

Return ONLY valid JSON array with 1 object:
{
  "summary": "4 word headline",
  "answer": "EXPLANATION, EXAMPLE, SUMMARY"
}
`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const cleaned = response.text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();

      const data = JSON.parse(cleaned);
      const item = Array.isArray(data) ? data[0] : data;

      // Save AI response to chat history
      setChatHistory((prev) => [...prev, { type: "ai", message: item.answer, summary: item.summary }]);
    } catch (err) {
      console.log("AI Error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 mt-10 flex flex-col gap-6">

        {/* Subject selector on top-right */}
        <div className="flex justify-end mb-2">
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 text-white text-sm rounded-2xl px-4 py-2 focus:border-sky-500 outline-none transition"
          >
            <option value="" disabled>Select Subject</option>
            <option>JavaScript</option>
            <option>React</option>
            <option>Python</option>
            <option>HTML/CSS</option>
            <option>Machine Learning</option>
          </select>
        </div>

        {/* Error */}
        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        {/* Chat history */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-4 shadow-md min-h-[300px] max-h-[60vh] overflow-y-auto transition flex flex-col gap-4">
          {chatHistory.map((chat, index) => (
            <div key={index} className={`p-3 rounded-xl max-w-[80%] ${chat.type === "user" ? "self-end bg-sky-500 text-black" : "self-start bg-zinc-900 text-white"}`}>
              {chat.type === "ai" && chat.summary && (
                <p className="text-sky-400 font-bold mb-1">{chat.summary}</p>
              )}
              <p className="text-sm whitespace-pre-wrap">{chat.message}</p>
            </div>
          ))}

          {loading && (
            <div className="self-start p-3 bg-zinc-900 rounded-xl text-zinc-400 flex items-center gap-2">
              <span>AI is thinking...</span>
              <span className="flex gap-1">
                <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0s" }}></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.15s" }}></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></span>
              </span>
            </div>
          )}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Input + Send button */}
        <div className="flex gap-2 items-end">
          <textarea
            value={userRequest}
            onChange={(e) => setUserRequest(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleRequest())
            }
            placeholder="Ask a technical question..."
            rows={1}
            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 resize-none transition"
          />

          <button
            onClick={handleRequest}
            className="bg-sky-500 text-black px-8 py-4 rounded-2xl font-semibold hover:bg-sky-600 transition shadow-md"
          >
            Send
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Learning;
