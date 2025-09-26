import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type CodeStoreState = {
  html: string;
  css: string;
  js: string;
  setHtml: (html: string) => void;
  setCss: (css: string) => void;
  setJs: (js: string) => void;
  setCode: (html: string, css: string, js: string) => void;
};

export const useCodeStore = create<CodeStoreState>()(
  persist(
    (set) => ({
      html: '',
      css: '',
      js: '',
      setHtml: (html) => set({ html }),
      setCss: (css) => set({ css }),
      setJs: (js) => set({ js }),
      setCode: (html, css, js) => set({ html, css, js }),
    }),
    {
      name: 'code-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
