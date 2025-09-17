// src/config/gemini.js
import { GoogleGenerativeAI } from "@google/genai";

// Use environment variable
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyBU-EQeDuVYLRMd4up8BxzJ1mML5N1ksIE";
const MODEL_NAME = "gemini-pro";

async function runChat(prompt) {
    if (!API_KEY) {
        throw new Error("Gemini API key not configured. Please add VITE_GEMINI_API_KEY to your .env file");
    }
    
    const genAI = new GoogleGenerativeAI(API_KEY);
    
    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
    };

    const generativeModel = genAI.getGenerativeModel({ 
        model: MODEL_NAME,
        generationConfig
    });

    try {
        const result = await generativeModel.generateContent(prompt);
        const response = result.response;
        return response.text();
    } catch (error) {
        console.error("Error generating content:", error);
        return "Sorry, I encountered an error. Please try again.";
    }
}

export default runChat;