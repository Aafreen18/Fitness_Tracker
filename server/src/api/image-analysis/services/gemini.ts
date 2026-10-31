import { GoogleGenAI } from "@google/genai";
import fs from "fs";

export const analyzeImage = async (filePath: string, mimeType: string)=>{

    try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        throw new Error("GEMINI_API_KEY is not configured on the server");
    }

    const base64ImageFile = fs.readFileSync(filePath, { encoding: "base64" });

    const contents = [
        {
            inlineData: {
            mimeType,
            data: base64ImageFile,
            },
        },
        { text: "Extract the food name and estimated calories from this image in a JSON object." },
    ];

    const config = {
        responseMimeType: "application/json",
        responseJsonSchema: {
            type: "object",
            properties: {
                name: {type: "string" },
                calories: { type: "number" },
            }
        }
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
    model: "gemini-3.8-flash",
    contents: contents,
    config
    });

    // response.text should be valid JSON matching the schema
    if (!response.text) {
        throw new Error("Gemini returned an empty response");
    }
    return JSON.parse(response.text)

} catch (error) {
        console.log(error);
        throw error;
    }
}
