
'use server';
/**
 * @fileOverview A flow that suggests relevant Indian laws and provides general advice based on a user's legal question, using OpenRouter.
 *
 * - suggestRelevantLaws - A function that suggests relevant laws and advice.
 * - SuggestRelevantLawsInput - The input type for the suggestRelevantLaws function.
 * - SuggestRelevantLawsOutput - The return type for the suggestRelevantLaws function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import OpenAI from 'openai';

const SuggestRelevantLawsInputSchema = z.object({
  legalQuestion: z
    .string()
    .describe('The legal question in natural language.'),
  customSystemPrompt: z
    .string()
    .optional()
    .describe('An optional custom system prompt to override the default.'),
});
export type SuggestRelevantLawsInput = z.infer<
  typeof SuggestRelevantLawsInputSchema
>;

const LawSuggestionItemSchema = z.object({
  lawName: z.string().describe('The name or section of the relevant Indian law.'),
  advice: z.string().describe('General guidance or potential steps to consider in relation to this law and the user\'s situation. This is not legal advice.'),
});

const SuggestRelevantLawsOutputSchema = z.object({
  suggestions: z
    .array(LawSuggestionItemSchema)
    .describe('A list of suggested laws and corresponding general advice.'),
});
export type SuggestRelevantLawsOutput = z.infer<
  typeof SuggestRelevantLawsOutputSchema
>;

const openRouterClient = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY || "",
});

const SITE_URL = process.env.SITE_URL || "https://nyayasahayak.example.com";
const SITE_NAME = process.env.SITE_NAME || "Nyaya Sahayak";

const defaultSystemPrompt = `You are an AI legal assistant specializing in Indian law. Your role is to help users understand potential legal avenues related to their questions by suggesting relevant laws and providing general guidance.

Based on the user's legal question, provide a list of potentially relevant Indian laws or legal sections. For each law or section you suggest, also provide practical, general advice or guidance on what steps the user might consider in relation to that law and their specific situation. This guidance should be for informational purposes only and not constitute specific legal advice.

Your response MUST be a valid JSON object conforming to this structure:
{
  "suggestions": [
    {
      "lawName": "string (The name or section of the relevant Indian law.)",
      "advice": "string (General guidance or potential steps to consider...)"
    }
  ]
}
If no specific laws are found, return an empty array for "suggestions", like so: {"suggestions": []}.
Do not include any explanatory text before or after the JSON object itself. Ensure the entire output is a single JSON object.`;

export async function suggestRelevantLaws(
  input: SuggestRelevantLawsInput
): Promise<SuggestRelevantLawsOutput> {
  return suggestRelevantLawsFlow(input);
}

const suggestRelevantLawsFlow = ai.defineFlow(
  {
    name: 'suggestRelevantLawsFlow',
    inputSchema: SuggestRelevantLawsInputSchema,
    outputSchema: SuggestRelevantLawsOutputSchema,
  },
  async (input: SuggestRelevantLawsInput): Promise<SuggestRelevantLawsOutput> => {
    const systemPromptToUse = input.customSystemPrompt || defaultSystemPrompt;

    try {
      const completion = await openRouterClient.chat.completions.create({
        extra_headers: {
          "HTTP-Referer": SITE_URL,
          "X-Title": SITE_NAME,
        },
        model: "deepseek/deepseek-r1:free", // Specified model
        messages: [
          { role: "system", content: systemPromptToUse },
          { role: "user", content: input.legalQuestion },
        ],
        response_format: { type: "json_object" },
      });

      const content = completion.choices[0]?.message?.content;

      if (!content) {
        console.error("OpenRouter returned empty content.");
        return { suggestions: [] };
      }

      try {
        const parsedOutput = JSON.parse(content);
        const validationResult = SuggestRelevantLawsOutputSchema.safeParse(parsedOutput);
        if (validationResult.success) {
          return validationResult.data;
        } else {
          console.error("OpenRouter response failed Zod validation:", validationResult.error.errors);
          // Try to return the raw content if it looks somewhat like the expected structure,
          // or at least provide a more informative error to the client if possible.
          // For now, sticking to returning empty on Zod fail.
          return { suggestions: [] };
        }
      } catch (parseError) {
        console.error("Failed to parse JSON response from OpenRouter:", parseError, "\\nRaw content:", content);
        return { suggestions: [] };
      }

    } catch (error) {
      console.error("Error calling OpenRouter:", error);
      return { suggestions: [] };
    }
  }
);
