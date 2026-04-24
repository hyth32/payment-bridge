import { Body, Controller, Param, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentProvider } from 'src/common/enums/payment-provider.enum';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly service: PaymentsService) {}

  @Post(':provider')
  async create(
    @Body() dto: any,
    @Param('provider') provider: PaymentProvider,
  ): Promise<any> {
    return await this.service.createPayment(provider, dto);
  }
}
