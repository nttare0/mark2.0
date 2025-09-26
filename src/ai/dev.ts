import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-conversation-history.ts';
import '@/ai/flows/generate-comprehensive-response.ts';
import '@/ai/flows/text-to-speech.ts';
import '@/ai/flows/speech-to-text.ts';
