'use server';

/**
 * @fileOverview A flow that summarizes the conversation history.
 *
 * - summarizeConversationHistory - A function that summarizes the conversation history.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeConversationHistoryInputSchema = z.object({
  conversationHistory: z
    .string()
    .describe('The complete conversation history to summarize.'),
});
export type SummarizeConversationHistoryInput = z.infer<
  typeof SummarizeConversationHistoryInputSchema
>;

const SummarizeConversationHistoryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the conversation.'),
});
export type SummarizeConversationHistoryOutput = z.infer<
  typeof SummarizeConversationHistoryOutputSchema
>;

export async function summarizeConversationHistory(
  input: SummarizeConversationHistoryInput
): Promise<SummarizeConversationHistoryOutput> {
  return summarizeConversationHistoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeConversationHistoryPrompt',
  input: {schema: SummarizeConversationHistoryInputSchema},
  output: {schema: SummarizeConversationHistoryOutputSchema},
  prompt: `Summarize the following conversation history in a concise manner:\n\n{{{conversationHistory}}}`,
});

const summarizeConversationHistoryFlow = ai.defineFlow(
  {
    name: 'summarizeConversationHistoryFlow',
    inputSchema: SummarizeConversationHistoryInputSchema,
    outputSchema: SummarizeConversationHistoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
