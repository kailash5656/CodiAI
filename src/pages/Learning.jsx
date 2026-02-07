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

    setChatHistory((prev) => [
      ...prev,
      { type: "user", message: currentRequest },
    ]);

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

      setChatHistory((prev) => [
        ...prev,
        {
          type: "ai",
          message: item.answer,
          summary: item.summary,
        },
      ]);
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

      {/* PAGE BACKGROUND */}
      <div className="bg-zinc-950 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col gap-6">

          {/* SUBJECT SELECT */}
          <div className="flex justify-end">
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 text-white text-sm rounded-2xl px-4 py-2 focus:border-sky-500 outline-none"
            >
              <option value="" disabled>Select Subject</option>
              <option>JavaScript</option>
              <option>React</option>
              <option>Python</option>
              <option>HTML/CSS</option>
              <option>Machine Learning</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* CHAT BOX */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 min-h-[300px] max-h-[60vh] overflow-y-auto flex flex-col gap-4">

            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl max-w-[80%] text-sm whitespace-pre-wrap
                  ${
                    chat.type === "user"
                      ? "self-end bg-sky-500 text-black"
                      : "self-start bg-zinc-800 text-white"
                  }`}
              >
                {chat.type === "ai" && chat.summary && (
                  <p className="font-bold text-sky-400 mb-1">
                    {chat.summary}
                  </p>
                )}
                {chat.message}
              </div>
            ))}

            {loading && (
              <div className="self-start bg-zinc-800 text-white p-3 rounded-xl">
                AI is thinking...
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          {/* INPUT AREA */}
          <div className="flex gap-2 items-end">
            <textarea
              value={userRequest}
              onChange={(e) => setUserRequest(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                !e.shiftKey &&
                (e.preventDefault(), handleRequest())
              }
              placeholder="Ask a technical question..."
              rows={1}
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-zinc-500 outline-none resize-none focus:border-sky-500"
            />

            <button
              onClick={handleRequest}
              className="bg-sky-500 text-black px-8 py-4 rounded-2xl font-semibold hover:bg-sky-600 transition"
            >
              Send
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Learning;
