'use client';

import { askAI, speakAI, transcribeAudio } from '@/app/actions';
import RobotFace from '@/components/app/robot-face';
import WebsitePreview from '@/components/app/website-preview';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { useCodeStore } from '@/hooks/use-code-store';
import { cn } from '@/lib/utils';
import {
  Bot,
  Code,
  LoaderCircle,
  Mic,
  MicOff,
  SendHorizonal,
  User,
  Volume2,
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState, type FormEvent } from 'react';

type Website = {
  html: string;
  css: string;
  js: string;
};

type Message = {
  role: 'user' | 'assistant';
  content: string;
  website?: Website;
};

export default function ChatInterface() {
  const pathname = usePathname();
  const isCodingMode = pathname.includes('/code-editor');
  const initialMessage = isCodingMode
    ? 'Hello! I am Vibe Coder. How can I help you with your website today?'
    : 'Hello! I am mark2.0. How can I assist you today?';
  
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: initialMessage,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [activeSpeakingMessage, setActiveSpeakingMessage] = useState<string | null>(null);

  const { setCode } = useCodeStore();
  const router = useRouter();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioStreamRef = useRef<MediaStream | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [input]);

  const processSubmit = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const mode = isCodingMode ? 'coder' : 'assistant';
      const aiResponse = await askAI(text, mode);
      let assistantMessage: Message;
      if (aiResponse.type === 'website' && aiResponse.website) {
        assistantMessage = {
          role: 'assistant',
          content: 'Here is the website I created for you.',
          website: aiResponse.website,
        };
        // Also update the code in our global store
        setCode(aiResponse.website.html, aiResponse.website.css, aiResponse.website.js);
      } else {
        assistantMessage = {
          role: 'assistant',
          content: aiResponse.answer,
        };
      }
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: 'assistant',
        content: "Sorry, I couldn't get a response. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await processSubmit(input);
  };

  const handleSpeak = async (message: Message) => {
    if (isSpeaking && activeSpeakingMessage === message.content) {
      audioRef.current?.pause();
      audioRef.current!.currentTime = 0;
      setIsSpeaking(false);
      setActiveSpeakingMessage(null);
      return;
    }

    if (isSpeaking) {
      audioRef.current?.pause();
    }
    
    setIsSpeaking(true);
    setActiveSpeakingMessage(message.content);
    try {
      const audioDataUri = await speakAI(message.content);
      if (audioDataUri && audioRef.current) {
        audioRef.current.src = audioDataUri;
        audioRef.current.play();
        audioRef.current.onended = () => {
          setIsSpeaking(false);
          setActiveSpeakingMessage(null);
        }
      } else {
        setIsSpeaking(false);
        setActiveSpeakingMessage(null);
      }
    } catch (error) {
      console.error('Failed to play audio:', error);
      setIsSpeaking(false);
      setActiveSpeakingMessage(null);
    }
  };

  const stopListening = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    if (audioStreamRef.current) {
      audioStreamRef.current.getTracks().forEach((track) => track.stop());
      audioStreamRef.current = null;
    }
    setIsListening(false);
  };

  const startListening = async () => {
    if (isListening) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioStreamRef.current = stream;
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm',
      });
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });

        if (audioBlob.size === 0) {
          console.warn('Empty audio recording, skipping transcription.');
          return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = async () => {
          const base64Audio = reader.result as string;
          setIsLoading(true);
          const transcribedText = await transcribeAudio(base64Audio);
          if (transcribedText && transcribedText.trim()) {
            await processSubmit(transcribedText);
          }
          setIsLoading(false);
        };
      };

      mediaRecorder.start();
      setIsListening(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Could not access microphone. Please check permissions.');
      setIsListening(false);
    }
  };

  const handleEditInCodeEditor = (website: Website) => {
    setCode(website.html, website.css, website.js);
    router.push('/code-editor');
  };
  
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      {isListening && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
          <RobotFace isListening={isListening} />
          <p className="mt-4 text-lg text-foreground">Listening...</p>
          <Button
            onClick={stopListening}
            variant="destructive"
            className="mt-6 rounded-full"
          >
            <MicOff className="mr-2 h-4 w-4" />
            Stop Listening
          </Button>
        </div>
      )}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-6 pr-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                'flex items-start gap-3',
                message.role === 'user' && 'justify-end'
              )}
            >
              {message.role === 'assistant' && (
                <Avatar className="h-8 w-8 shrink-0 border">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  'relative max-w-xl rounded-lg group shadow-md',
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground px-4 py-3'
                    : 'bg-card w-full',
                  !message.website && 'px-4 py-3'
                )}
              >
                <p className={cn('whitespace-pre-wrap text-sm', message.website && 'px-4 py-3 border-b')}>{message.content}</p>
                {message.website && (
                  <div className="relative">
                     <WebsitePreview
                      html={message.website.html}
                      css={message.website.css}
                      js={message.website.js}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                      <Button onClick={() => handleEditInCodeEditor(message.website!)}>
                        <Code className="mr-2 h-4 w-4" />
                        Edit in Code Editor
                      </Button>
                    </div>
                  </div>
                )}
                {message.role === 'assistant' && !message.website && (
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute -right-11 top-1/2 h-8 w-8 -translate-y-1/2 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    onClick={() => handleSpeak(message)}
                    disabled={isSpeaking && activeSpeakingMessage !== message.content}
                    aria-label="Speak message"
                  >
                    {isSpeaking && activeSpeakingMessage === message.content ? (
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </Button>
                )}
              </div>
              {message.role === 'user' && (
                <Avatar className="h-8 w-8 shrink-0 border">
                  <AvatarFallback className="bg-secondary text-secondary-foreground">
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && !isListening && (
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8 shrink-0 border">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <Bot className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-2 rounded-lg bg-muted px-4 py-3 shadow-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-foreground/50 [animation-delay:-0.3s]"></span>
                <span className="h-2 w-2 animate-pulse rounded-full bg-foreground/50 [animation-delay:-0.15s]"></span>
                <span className="h-2 w-2 animate-pulse rounded-full bg-foreground/50"></span>
              </div>
            </div>
          )}
        </div>
        <div ref={messagesEndRef} />
      </ScrollArea>
      <div className="border-t bg-card/80 p-4 backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="flex items-start gap-3">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="max-h-48 flex-1 resize-none overflow-y-auto rounded-full border-2 px-6 py-3 shadow-inner"
            rows={1}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
              }
            }}
            disabled={isLoading || isListening}
          />
          <Button
            type="button"
            size="icon"
            onClick={startListening}
            disabled={isLoading || isListening}
            aria-label={'Start listening'}
            variant={'outline'}
            className="h-12 w-12 rounded-full"
          >
            <Mic className="h-5 w-5" />
          </Button>
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || isListening || !input.trim()}
            aria-label="Send message"
            className="h-12 w-12 rounded-full"
          >
            <SendHorizonal className="h-5 w-5" />
          </Button>
        </form>
      </div>
      <audio ref={audioRef} className="hidden" />
    </div>
  );
}
