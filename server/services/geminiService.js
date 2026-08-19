// Gemini API Integration Service for Dynamic Live Generation
import axios from "axios";

export async function callGeminiApi({ prompt, apiKey }) {
  const key = apiKey || process.env.GEMINI_API_KEY;
  if (!key) {
    return null; // Signals the caller to use our high-fidelity built-in engine
  }

  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
    const response = await axios.post(endpoint, {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2048,
      }
    }, { timeout: 15000 });

    const text = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return text;
  } catch (err) {
    console.warn("Gemini API call warning (falling back to built-in intelligence):", err.message);
    return null;
  }
}
