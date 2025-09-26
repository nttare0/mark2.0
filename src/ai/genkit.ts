import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: 'AIzaSyAJ8LLiMBrZMJbvu-lvr6MMoRGv8ARHbd4',
    }),
  ],
  model: 'googleai/gemini-2.5-flash',
});
