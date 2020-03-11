var cashbox = {
  amount: 0,
  addPayment: function(payment) {
    if (payment && this.isNumber(payment.amount) && this.isString(payment.info) && payment.amount > 0) {
      this.amount += payment.amount;
      console.log('cashbox amount = ', this.amount, 'info: ', payment.info);
    } else {
      console.error('Amount not affected');
    }
  },
  refundPayment: function(refund) {
    if (refund && this.isNumber(refund.amount && this.isString(refund.info)) && refund.amount > 0 && this.amount - refund.amount >= 0) {
      this.amount -= refund.amount;
      console.log('cashbox amount = ', this.amount);
    } else {
      console.warn('cashbox amount not affected');
    }
  },
  isNumber: function(variable) {
    return typeof variable == 'number';
  },
  isString: function(variable) {
    return typeof variable == 'string';
  }
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
