export interface PaymentGateway {
  createPayment(data: any): Promise<any>;
  getPayment(data: any): Promise<any>;
  refund(id: string, data: any): Promise<any>;
  handleWebhook(payload: any): Promise<void>;
}
