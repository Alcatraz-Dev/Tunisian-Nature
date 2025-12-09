import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI representative for "Tunisian Nature", a premium organic product company.
Your products include:
1. Extra Virgin Organic Olive Oil (Sun & Rain grown, cold-pressed).
2. Tunisian Dates (Deglet Nour, organic soft dates).
3. Carob Products (Powder, Syrup, Honey).
4. Premium Tuna in Olive Oil.
5. Organic Wild Honey from the Atlas Mountains (Sidr, Eucalyptus).

About the company:
- Products from the heart of Tunisia (Mediterranean, Sahara, Atlas Mountains).
- 100% natural, no irrigation for olives.
- Target audience: Organic shops, supermarkets, hotels, international distributors.

Your tone is warm, professional, and evocative of nature and purity.
Keep answers concise (under 50 words) unless asked for a specific product sheet.
If asked about wholesale, mention that private label and custom packaging are available.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I am checking our inventory. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection to the nature network interrupted.";
  }
};

export const generateWallpaperDescription = async (prompt: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate a detailed prompt for an image generation model to create a nature-inspired wallpaper based on: "${prompt}". Focus on "Organic", "Sunlight", "Texture", "Tunisian Landscape" aesthetics.`,
    });
    return response.text || "";
  } catch (error) {
    console.error("Gemini Prompt Gen Error:", error);
    return "";
  }
};

export const generateWallpaperImage = async (prompt: string): Promise<string | null> => {
  try {
    const response = await ai.models.generateImages({
        model: 'imagen-3.0-generate-001', 
        prompt: prompt,
        config: {
            numberOfImages: 1,
            aspectRatio: '9:16',
            outputMimeType: 'image/jpeg'
        }
    });
    
    const base64 = response.generatedImages?.[0]?.image?.imageBytes;
    if (base64) {
        return `data:image/jpeg;base64,${base64}`;
    }
    return null;
  } catch (error) {
    console.error("Image Gen Error:", error);
    return null;
  }
}