export interface Category {
  id: null|string;
  tenantId: null|string;
  name: string;
  isCannabis: boolean;
  customerTypes: string;
}

export interface TREEZ_CONFIG_TYPE {
  brands: string[];
  categories: Category[];
}