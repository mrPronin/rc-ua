import { create } from 'zustand'

interface SettingsStore {
    isMobile: boolean;
    setIsMobile: (data: boolean)=> void;
    language: string;
    setLanguage: (data: string)=>void;
  }
  
export const useSettingsStore = create<SettingsStore>((set) => ({
    isMobile: window.innerWidth <= 600,
    language: 'ua',
    setIsMobile: (data: boolean) => set({ isMobile: data }),
    setLanguage: (data: string) => set({ language: data }),
  }));
