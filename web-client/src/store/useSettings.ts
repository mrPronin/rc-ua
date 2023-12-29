import { create } from 'zustand'

interface SettingsStore {
    language: string;
    setLanguage: (data: string)=>void;
  }
  
export const useSettingsStore = create<SettingsStore>((set) => ({
    language: 'ua',
    setLanguage: (data: string) => set({ language: data }),
  }));
