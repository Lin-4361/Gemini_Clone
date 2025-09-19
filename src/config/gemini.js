// src/config/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// You'll need to get your API key from https://makersuite.google.com/app/apikey
const apiKey = "AIzaSyAzfwZOL3HMgILdDrgy8fL_syKLLLSD0co";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 0.9,
    topP: 1,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
};

async function runChat(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    return response.text();
}

export default runChat;