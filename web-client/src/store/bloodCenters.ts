import { makeAutoObservable } from 'mobx';
import {IBloodDonationCenter} from 'interfaces/bloodDonationCenters';

interface IBloodCentersStore {
    bloodCenters: IBloodDonationCenter[];
    setBloodCenters(data: IBloodDonationCenter[]): void;
}

const createBloodCentersStore = (): IBloodCentersStore => {
    const store: IBloodCentersStore = {
        bloodCenters: [],
        setBloodCenters(data: []) {
            this.bloodCenters = [...data];
        }
    };

    makeAutoObservable(store);

    return store;
};

const bloodCentersStore = createBloodCentersStore();

export default bloodCentersStore;