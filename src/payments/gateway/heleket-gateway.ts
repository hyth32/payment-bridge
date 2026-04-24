import { Injectable } from '@nestjs/common';
import { PaymentGateway } from './payment-gateway.interface';

@Injectable()
export class HeleketGateway implements PaymentGateway {
  async createPayment(data: any): Promise<any> {
    //
  }
}
