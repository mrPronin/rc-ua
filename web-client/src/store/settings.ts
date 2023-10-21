import { makeAutoObservable } from 'mobx';

interface SettingsStore {
    isMobile: boolean;
    setIsMobile(data: boolean): void;
    language: string;
    setLanguage(data: string):void;
  }
  
  const createSettingsStore = (): SettingsStore => {
    const store: SettingsStore = {
      isMobile: window.innerWidth <= 600,
      language: 'ua',
      setIsMobile(data: boolean) {
        this.isMobile = data;
      },
      setLanguage(data: string){
        this.language = data;
      }
    };
  
    makeAutoObservable(store);
  
    return store;
  };
  
  const settingsStore = createSettingsStore();
  
  export default settingsStore;