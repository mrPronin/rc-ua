import { makeAutoObservable, reaction } from 'mobx';
import { IBloodDonationCenter } from 'interfaces/bloodDonationCenters';

interface IBloodCentersStore {
    bloodCenters: IBloodDonationCenter[];
    bloodCenter: IBloodDonationCenter | null;
    setBloodCenters(data: IBloodDonationCenter[]): void;
    setBloodCenter(data: IBloodDonationCenter | null): void;
}

const createBloodCentersStore = (): IBloodCentersStore => {
    const store: IBloodCentersStore = {
        bloodCenters: [],
        bloodCenter: null,
        setBloodCenters(data: []) {
            this.bloodCenters = [...data];
        },
        setBloodCenter(data: IBloodDonationCenter | null) {
            if (data) this.bloodCenter = { ...data };
        }
    };

    makeAutoObservable(store);
    const persistedData = localStorage.getItem('BloodCenterStorage');
    if (persistedData) {
      const parsedData = JSON.parse(persistedData);
      store.bloodCenter = parsedData.bloodCenter;
    }
  
    reaction(
      () => ({
        bloodCenter: store.bloodCenter,
      }),
      data => {
        localStorage.setItem('BloodCenterStorage', JSON.stringify(data));
      }
    );
    return store;
};

const bloodCentersStore = createBloodCentersStore();

export default bloodCentersStore;