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
      <header className="flex h-16 shrink-0 items-center justify-between border-b px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-primary">Vibe Coder</h1>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/">
              <MessageSquare className="mr-2 h-4 w-4" />
              Main Chat
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
          <ResizablePanel defaultSize={35} minSize={25}>
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
