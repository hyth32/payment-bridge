import { Injectable } from '@nestjs/common';
import { PaymentGateway } from './payment-gateway.interface';

@Injectable()
export class YookassaGateway implements PaymentGateway {
  createPayment(data: any): Promise<any> {
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
