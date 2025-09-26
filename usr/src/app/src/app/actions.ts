'use server';

import { generateComprehensiveResponse, GenerateComprehensiveResponseOutput } from '@/ai/flows/generate-comprehensive-response';
import { speechToText } from '@/ai/flows/speech-to-text';
import { textToSpeech } from '@/ai/flows/text-to-speech';

export async function askAI(question: string, mode: 'assistant' | 'coder'): Promise<GenerateComprehensiveResponseOutput> {
  if (!question) {
    return { type: 'text', answer: 'Please provide a question.' };
  }

  try {
    const response = await generateComprehensiveResponse({ question, mode });
    return response;
  } catch (error) {
    console.error('Error calling AI:', error);
    return { type: 'text', answer: 'Sorry, something went wrong. Please try again.' };
  }
}

export async function speakAI(text: string): Promise<string> {
  if (!text) {
    return '';
  }

  try {
    const response = await textToSpeech({ text });
    return response.audio;
  } catch (error) {
    console.error('Error in text-to-speech:', error);
    return '';
  }
}

export async function transcribeAudio(audioDataUri: string): Promise<string> {
  if (!audioDataUri) {
    return '';
  }
  try {
    const response = await speechToText({ audio: audioDataUri });
    return response.text;
  } catch (error) {
    console.error('Error in speech-to-text:', error);
    return 'Sorry, I could not understand the audio. Please try again.';
  }
}
