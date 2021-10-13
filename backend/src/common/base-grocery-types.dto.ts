import { PRODUCT_CATEGORIES } from './product-categories';
import { UNITS } from './units';

export type BaseGroceryTypesConfig = {
  [key in PRODUCT_CATEGORIES]: {
    [key: string]: {
      min: number;
      unit: UNITS;
    };
  };
};
