import { GoogleGenerativeAI } from "@google/generative-ai";

// Don't change this code specially pull for the website builder

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export const agentService = {

    // Gemini is getting called running at gemini-2.0-flash

    executeAdHoc: async (prompt: string) => {
        if (!genAI) throw new Error("AI not initialized");
        const getBestModel = async () => {
            try {
                const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;
                const response = await fetch(url);
                const data = await response.json();
                const flashModels = data.models.filter((m: any) =>
                    m.name.includes('flash') && m.supportedGenerationMethods.includes('generateContent')
                );
                return flashModels.length > 0 ? flashModels[flashModels.length - 1].name.split('/').pop() : "gemini-2.0-flash";
            } catch {
                return "gemini-2.0-flash"; // Fallback
            }
        };

        const modelName = await getBestModel();
        // For exeed attemp Edge Case - Saikat
        const attemptRequest = async (retries = 2): Promise<any> => {
            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent(prompt);
                return { status: 'success', data: { output: result.response.text() } };
            } catch (error: any) {
                if (error.message.includes('429') && retries > 0) {
                    const seconds = error.message.match(/retry in ([\d.]+)s/)?.[1] || 20;
                    const waitMs = (parseFloat(seconds) + 2) * 1000; // buffer of s second. DON'T CHANGE -Saikat

                    console.warn(`Quota hit. Sleeping for ${seconds}s then retrying...`);
                    await new Promise(resolve => setTimeout(resolve, waitMs));
                    return attemptRequest(retries - 1);
                }
                throw error;
            }
        };
        return await attemptRequest();
    }
};