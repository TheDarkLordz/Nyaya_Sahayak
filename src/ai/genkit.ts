
import {genkit} from 'genkit';
// Removed googleAI plugin as it's not used for the OpenRouter flow
// and was causing API key errors.

export const ai = genkit({
  plugins: [
    // googleAI({ // Removed
    //   apiKey: process.env.GOOGLE_API_KEY || '', // Removed
    // }), // Removed
  ],
  // model: 'gemini-1.5-flash-latest', // Removed default Google AI model
  // Flows will now use their own specific clients, e.g., the OpenAI SDK for OpenRouter.
});

