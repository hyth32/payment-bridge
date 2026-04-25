import { Injectable } from '@nestjs/common';
import { PaymentGateway } from '../payment-gateway.interface';
import { HeleketResponse } from './types/heleket.shared.types';
import {
  HeleketCreatePaymentRequest,
  HeleketCreatePaymentResponse,
} from './types/heleket.create.types';

@Injectable()
export class HeleketGateway implements PaymentGateway {
  createPayment(
    data: HeleketCreatePaymentRequest,
  ): Promise<HeleketResponse<HeleketCreatePaymentResponse>> {
    throw new Error('Method not implemented.');
  }

  getPayment(data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }

  refund(id: string, data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }

  handleWebhook(payload: any): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
