import ChatInterface from '@/components/app/chat-interface';
import MathFormulasBackground from '@/components/app/math-formulas-background';
import ThemeSwitcher from '@/components/app/theme-switcher';
import { Button } from '@/components/ui/button';
import { CodeXml } from 'lucide-react';
import Link from 'next/link';
import VoiceModeToggle from '@/components/app/voice-mode-toggle';

export default function HomePage() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-background">
      <MathFormulasBackground />
      <div className="z-10 flex h-full w-full flex-col md:h-[95vh] md:max-w-4xl md:rounded-xl md:border md:shadow-2xl">
        <header className="flex shrink-0 items-center justify-between border-b bg-card/80 p-2 md:p-4 backdrop-blur-sm md:rounded-t-xl">
          <div className="flex items-center gap-2 md:gap-4">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-primary">mark2.0</h1>
            <p className="hidden text-sm text-muted-foreground md:block">
              Your Conversational AI Assistant
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8 md:h-9 md:w-auto md:px-3" asChild>
              <Link href="/code-editor">
                <CodeXml className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">mark coder</span>
              </Link>
            </Button>
            <VoiceModeToggle />
            <ThemeSwitcher />
          </div>
        </header>
        <ChatInterface />
      </div>
    </div>
  );
}
