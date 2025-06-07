import {genkit} from 'genkit';
import {openRouter} from 'genkitx-openrouter';

export const ai = genkit({
  plugins: [
    openRouter({
      apiKey: process.env.OPENROUTER_API_KEY || '',
    }),
  ],
  model: 'deepseek/deepseek-v3-0324', // Using DeepSeek V3 model from OpenRouter
});
