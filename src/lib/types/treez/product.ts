export interface TIER_PRICING_DETAIL {
  start_value: number;
  price_per_value: number;
}

export interface ProductPricing {
  price_type: string;
  price_sell: string|null;
  tier_name: string;
  tier_method: string;
  tier_pricing_detail: TIER_PRICING_DETAIL[]
}

export interface ProductData {
  productId: string;
  categoryId: string;
  productName: string;
  seoProductName: string;
  productDescription: string;
  priceSell: string;
  discountedPrice: string;
  discountedPriceRounded: string;
  displayPriceSell: string;
  taxRate: number;
  inStock: number;
  weight: number;
  productGroup: string;
  productUnit: string;
  barcodes: null|string;
  active: boolean;
  type: string;
  unitOfMeasurement: string;
  terminalId: string|null;
  pricing: ProductPricing
}

export interface TREEZ_PRODUCT_TYPE {
  afterKey: {
    productId: string;
    customerType: string;
  };
  categoryId: string;
  categoryName: string;
  type: string;
  shortDescription: string|null;
  longDescription: string|null;
  croppedImage: string;
  largeImage: string;
  classifications: string[];
  flavors: string[];
  effects: string[];
  subTypes: string[];
  brand: string;
  thc: null|number;
  cbd: null|number;
  cbdPercent: null|number;
  totalCannabinoids: null|number;
  terps: null|number;
  cbdRatio: string;
  description: string;
  size: string;
  mgDose: string;
  medium: string;
  active: boolean;
  tier35priceSell: string;
  liveInventory: string;
  taxRate: string;
  secondaryTaxRate: string;
  menuTitle: string;
  altMenuTitle: string;
  totalDoses: number;
  lastUpdateDate: string|null;
  productList: ProductData[];
}

export interface PRODUCT_CART_TYPE {
  product: TREEZ_PRODUCT_TYPE;
  quantity: number;
}

export interface ORDER_PRODUCT_TYPE {
  productId: string;
  quantity: number;
}