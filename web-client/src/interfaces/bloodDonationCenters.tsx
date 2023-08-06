export interface IBloodDonationCenterConnection {
  bloodDonationCenters:{
    edges: IBloodDonationCenterEdge[];
    pageInfo: IPageInfo;
  }

}

export interface IPageInfo {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
}

export interface IBloodDonationCenterEdge {
    cursor: string;
    node: IBloodDonationCenter;
  }
  
interface Address {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
    postalCode: string;
    region: string;
    street: string;
  }
  
  interface Contacts {
    cellPhone: string | null;
    email: string;
    landlinePhone: string;
    website: string;
  }
  
  interface WorkScheduleItem {
    weekDay: string;
    startTimeBeforeLunchBreak: string;
    endTimeBeforeLunchBreak: string | null;
    startTimeAfterLunchBreak: string | null;
    endTimeAfterLunchBreak: string | null;
  }
  
  // Оголосимо інтерфейс для об'єкту кроводарного центру
  export interface IBloodDonationCenter {
    address: Address;
    category: string;
    contacts: Contacts;
    createdAt: string;
    id: string;
    name: string;
    notes: string;
    publishedAt: string;
    updatedAt: string;
    workSchedule: WorkScheduleItem[];
  }


  