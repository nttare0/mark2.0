'use client';

import { Button } from '@/components/ui/button';
import { useVoiceStore } from '@/hooks/use-voice-store';
import { Volume2, VolumeX } from 'lucide-react';

export default function VoiceModeToggle() {
  const { isVoiceMode, toggleVoiceMode } = useVoiceStore();

  return (
    <Button variant="outline" size="icon" onClick={toggleVoiceMode} aria-label="Toggle voice mode">
      {isVoiceMode ? (
        <Volume2 className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <VolumeX className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
