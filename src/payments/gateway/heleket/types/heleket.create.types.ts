import { HeleketCourceSource } from '../enums/heleket.course-source.enum';
import { HeleketPaymentStatus } from '../enums/heleket.payment-status.enum';
import { HeleketPaymentMethod } from './heleket.shared.types';
import { HeleketPaymentCurrency } from '../enums/heleket.payment-currency.enum';

export interface HeleketCreatePaymentRequest {
  amount: string;
  currency: HeleketPaymentCurrency;
  order_id: string;
  network?: string;
  url_return?: string;
  url_success?: string;
  url_callback?: string;
  is_payment_multiple?: boolean;
  lifetime?: number;
  to_currency?: string;
  subtract?: number;
  accuracy_payment_percent?: number;
  additional_data?: string;
  currencies?: HeleketPaymentMethod[];
  except_currencies?: HeleketPaymentMethod[];
  course_source?: HeleketCourceSource;
  from_referral_code?: string;
  discount_percent?: number;
  is_refresh?: boolean;
  payer_email?: string;
}

export interface HeleketCreatePaymentResponse {
  uuid: string;
  order_id: string;
  amount: string;
  payment_amount?: string;
  payer_amount: string;
  discount_percent: number;
  discount: string;
  payer_currency: string;
  currency: string;
  merchant_amount: string;
  network: string;
  address: string;
  from?: string;
  txid?: string;
  payment_status: HeleketPaymentStatus;
  url: string;
  expired_at: number;
  is_final: boolean;
  additional_data?: string;
  created_at: string;
  updated_at: string;
  address_qr_code: string;
  payment_amount_usd: string;
  commission: string;
  convert: {
    to_currency: string;
    comission: string;
    rate: string;
    amount: string;
  };
}
