import { create } from 'zustand';
import { IBloodDonationCenter } from 'interfaces/bloodDonationCenters';

interface IBloodCentersStore {
    bloodCenters: IBloodDonationCenter[];
    setBloodCentersStore(data: IBloodDonationCenter[]): void;
}

export const useBloodCentersStore = create<IBloodCentersStore>()(
    (set) => ({
        bloodCenters: [],
        bloodCenter: null,
        setBloodCentersStore: (data: IBloodDonationCenter[]) =>
            set({ bloodCenters: [...data] })
    })
)







