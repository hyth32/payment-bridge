import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentProvider } from 'src/common/enums/payment-provider.enum';

@Controller('payments/:provider')
export class PaymentsController {
  constructor(private readonly service: PaymentsService) {}

  @Post()
  @HttpCode(201)
  async create(
    @Body() dto: any,
    @Param('provider') provider: PaymentProvider,
  ): Promise<any> {
    return await this.service.createPayment(provider, dto);
  }

  @Get(':id')
  async show(
    @Param('provider') provider: PaymentProvider,
    @Param('id') id: string,
  ): Promise<any> {
    return await this.service.getPayment(provider, id);
  }

  @Post(':id/refund')
  async refund(
    @Param('provider') provider: PaymentProvider,
    @Param('id') id: string,
    @Body() dto: any,
  ): Promise<any> {
    return await this.service.refund(provider, id, dto);
  }

  @Post('webhook')
  async webhook(
    @Param('provider') provider: PaymentProvider,
    @Body() payload: any,
  ): Promise<void> {
    return await this.service.webhook(provider, payload);
  }
}
