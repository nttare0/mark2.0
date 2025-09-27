'use client';

import ChatInterface from '@/components/app/chat-interface';
import CodeEditor from '@/components/app/code-editor';
import ThemeSwitcher from '@/components/app/theme-switcher';
import VoiceModeToggle from '@/components/app/voice-mode-toggle';
import { Button } from '@/components/ui/button';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { useIsMobile } from '@/hooks/use-mobile';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function CodeEditorPage() {
  const isMobile = useIsMobile();

  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <header className="flex h-16 shrink-0 items-center justify-between border-b px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-primary">Vibe Coder</h1>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-8 w-8 md:h-9 md:w-auto md:px-3" asChild>
            <Link href="/">
              <MessageSquare className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Main Chat</span>
            </Link>
          </Button>
          <VoiceModeToggle />
          <ThemeSwitcher />
        </div>
      </header>
      <main className="flex flex-1 flex-col overflow-hidden">
        <ResizablePanelGroup
          direction={isMobile ? 'vertical' : 'horizontal'}
          className="flex-1"
        >
          <ResizablePanel defaultSize={35} minSize={20}>
            <ChatInterface />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={65} minSize={30}>
            <CodeEditor />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  );
}
