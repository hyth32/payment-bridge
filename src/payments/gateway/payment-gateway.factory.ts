import { BadRequestException, Injectable } from '@nestjs/common';
import { HeleketGateway } from './heleket-gateway';
import { YookassaGateway } from './yookassa-gateway';
import { PaymentProvider } from 'src/common/enums/payment-provider.enum';
import { PaymentGateway } from './payment-gateway.interface';

@Injectable()
export class PaymentGatewayFactory {
  private gateways: Record<PaymentProvider, PaymentGateway>;

  constructor(
    private readonly heleket: HeleketGateway,
    private readonly yookassa: YookassaGateway,
  ) {
    this.gateways = {
      [PaymentProvider.YOOKASSA]: this.yookassa,
      [PaymentProvider.HELEKET]: this.heleket,
    };
  }

  getGateway(provider: PaymentProvider): PaymentGateway {
    const gateway = this.gateways[provider];
    if (!gateway) {
      throw new BadRequestException('Unsupported provider');
    }
    return gateway;
  }
}
