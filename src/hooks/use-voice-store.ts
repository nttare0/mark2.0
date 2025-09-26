import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type VoiceStoreState = {
  isVoiceMode: boolean;
  toggleVoiceMode: () => void;
};

export const useVoiceStore = create<VoiceStoreState>()(
  persist(
    (set) => ({
      isVoiceMode: false,
      toggleVoiceMode: () => set((state) => ({ isVoiceMode: !state.isVoiceMode })),
    }),
    {
      name: 'voice-mode-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
