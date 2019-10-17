var cashbox = {
  amount: 0,
  addPayment: function(payment) {
    if (payment && payment.amount > 0) {
      this.amount += payment.amount;
      console.log('cashbox amount = ', this.amount);
    } else {
      console.error('Amount not affected');
    }
  },
  refundPayment: function(refund) {
    if (refund && refund.amount > 0 && this.amount - refund.amount >= 0) {
      this.amount -= refund.amount;
      console.log('cashbox amount = ', this.amount);
    } else {
      console.warn('cashbox amount not affected');
    }
  },
};

cashbox.addPayment({ amount: -10, info: 'Оплата штрафа' }); // show error (console), amount not affected
cashbox.addPayment({ amount: 10, info: 'Оплата ЖКХ' }); // cashbox amount = 10

cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' }); // cashbox amount = 0
cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' }); // cashbox amount not affected (warning)

cashbox.addPayment({ amount: 'qwerty', info: 'Оплата штрафа' }); // show error (console), amount not affected
cashbox.addPayment({ }); // show error (console), amount not affected
cashbox.addPayment(); // show error (console), amount not affected

cashbox.refundPayment({ amount: 'qwerty', info: 'Оплата штрафа' }); // cashbox amount not affected (warning)
cashbox.refundPayment({ amount: -10, info: 'Возврат клиенту' }); // cashbox amount not affected (warning)
cashbox.refundPayment({ }); // cashbox amount not affected (warning)
cashbox.refundPayment(); // cashbox amount not affected (warning)
