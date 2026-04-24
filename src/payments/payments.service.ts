import { Injectable } from '@nestjs/common';
import { PaymentGatewayFactory } from './gateway/payment-gateway.factory';
import { PaymentProvider } from 'src/common/enums/payment-provider.enum';

@Injectable()
export class PaymentsService {
  constructor(private readonly factory: PaymentGatewayFactory) {}

  async createPayment(provider: PaymentProvider, dto: any): Promise<any> {
    return await this.factory.getGateway(provider).createPayment(dto);
  }
}
