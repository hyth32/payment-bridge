export enum HeleketPaymentStatus {
  PAID = 'paid', // оплачен
  PAID_OVER = 'paid_over', // оплачено больше
  WRONG_AMOUNT = 'wrong_amount', // оплачено меньше
  PROCESSING = 'process', // в обработке
  CONFIRM_CHECK = 'confirm_check', // ожидание необходимого количества подтверждений блокчейна
  WRONG_AMOUNT_WAITING = 'wrong_amount_waiting', // оплачено меньше, но есть возможность доплаты
  CHECKING = 'check', // ожидание появления транзации в блокчейне
  FAILED = 'fail', // ошибка при оплате
  CANCELLED = 'cancel', // платеж отменен
  SYSTEM_FAIL = 'system_fail', // системная ошибка
  REFUND_PROCESSING = 'refund_process', // обработка возврата
  REFUND_FAILED = 'refund_fail', // ошибка при возврате
  REFUND_PAID = 'refund_paid', // успешный возврат средств
  LOCKED = 'locked', // средства заблокированы из-за AML
}
