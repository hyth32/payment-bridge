export interface PaymentGateway {
  createPayment(data: any): Promise<any>;
}
