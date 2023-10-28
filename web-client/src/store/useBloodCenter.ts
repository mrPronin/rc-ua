import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'
import { IBloodDonationCenter } from 'interfaces/bloodDonationCenters';

interface IBloodCenterStore {
    bloodCenter: IBloodDonationCenter | null;
    setBloodCenter(data: IBloodDonationCenter | null): void;
}

export const useBloodCenterStore = create<IBloodCenterStore>()(
    devtools(
        persist(
            (set) => ({
                bloodCenter: null,
                setBloodCenter: (data: IBloodDonationCenter | null) => {
                    if (data) set({ bloodCenter: { ...data } });
                },
            }),
            { name: 'BloodCenterStorage' }
        )
    )
)







