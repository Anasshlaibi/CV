import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("API Key not found in .env");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
  try {
    console.log("Fetching available models...");
    // For listing models, we don't need a specific model instance.
    // However, the SDK exposes listModels usually via the API directly or a manager.
    // The current node SDK simplifies this. Let's try to get a model and run a basic prompt.
    // Actually, listing models might not be directly exposed in the high-level GenAI class in all versions.
    // Let's try a direct fetch if the SDK method isn't obvious, but checking documentation (or common usage):
    // It's usually not on the `genAI` instance directly in some versions.
    // Let's try a simple generation ensuring we can connect at all.
    
    // Attempt with gemini-1.5-flash
    console.log("Testing gemini-1.5-flash...");
    const modelFlash = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    try {
        const result = await modelFlash.generateContent("Hello");
        console.log("Success with gemini-1.5-flash:", result.response.text());
    } catch (e) {
        console.error("Failed gemini-1.5-flash:", e.message);
    }

    // Attempt with gemini-pro
    console.log("Testing gemini-pro...");
    const modelPro = genAI.getGenerativeModel({ model: "gemini-pro" });
    try {
        const resultPro = await modelPro.generateContent("Hello");
        console.log("Success with gemini-pro:", resultPro.response.text());
    } catch (e) {
        console.error("Failed gemini-pro:", e.message);
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

listModels();
