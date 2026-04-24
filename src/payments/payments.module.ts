import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { PaymentGatewayFactory } from './gateway/payment-gateway.factory';
import { HeleketGateway } from './gateway/heleket-gateway';
import { YookassaGateway } from './gateway/yookassa-gateway';

@Module({
  controllers: [PaymentsController],
  providers: [
    PaymentsService,
    PaymentGatewayFactory,
    HeleketGateway,
    YookassaGateway,
  ],
})
export class PaymentsModule {}
