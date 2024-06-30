export interface Category {
  id: null|string;
  tenantId: null|string;
  name: string;
  isCannabis: boolean;
  customerTypes: string;
}

export interface PICKUP_ADDRESS {
  id: number;
  street: string;
  city: string;
  state: string;
  country: string;
  county: string;
  type: string;
  zip: string;
  placeId: string;
  comment: string;
  name: string;
  longitude: number;
  latitude: number;
  apt: string;
  primary: boolean;
}

export interface TREEZ_CONFIG_TYPE {
  brands: string[];
  categories: Category[];
  shortName: string;
  pickupAddresses: PICKUP_ADDRESS[];
}