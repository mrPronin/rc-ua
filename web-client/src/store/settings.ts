import { makeAutoObservable } from 'mobx';

interface SettingsStore {
    isMobile: boolean;
    setIsMobile(data: boolean): void;
  }
  
  const createSettingsStore = (): SettingsStore => {
    const store: SettingsStore = {
      isMobile: window.innerWidth <= 600,
      setIsMobile(data: boolean) {
        this.isMobile = data;
      }
    };
  
    makeAutoObservable(store);
  
    return store;
  };
  
  const settingsStore = createSettingsStore();
  
  export default settingsStore;