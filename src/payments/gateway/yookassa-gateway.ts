import { Injectable } from '@nestjs/common';
import { PaymentGateway } from './payment-gateway.interface';

@Injectable()
export class YookassaGateway implements PaymentGateway {
  async createPayment(data: any): Promise<any> {
    //
  }
}
