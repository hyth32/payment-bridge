import {
  HeleketPaymentCurrency,
  HeleketPaymentNetwork,
} from '../enums/heleket.payment-currency.enum';

interface HeleketValidationError {
  state: 1;
  errors: Record<string, string[]>;
}

interface HeleketBusinessError {
  state: 1;
  message: string;
}

interface HeleketServerError {
  message: string;
  code: number;
  error: null | string;
}

interface HeleketSuccessResponse<T> {
  state: 0;
  result: T;
}

export type HeleketResponse<T> =
  | HeleketSuccessResponse<T>
  | HeleketValidationError
  | HeleketBusinessError
  | HeleketServerError;

export interface HeleketPaymentMethod {
  currency: HeleketPaymentCurrency;
  network: HeleketPaymentNetwork;
}
