var cashbox = {
  amount: 0,
  addPayment: function(payment) {
    // your code
  },
  refundPayment: function(refund) {
    // your code
  },
};
 
cashbox.addPayment({ amount: -10, info: 'Оплата штрафа'}); // show error (console), amount not affected
cashbox.addPayment({  amount: 10,  info: 'Оплата ЖКХ' }); // cashbox amount = 10
 
cashbox.refundPayment({  amount: 10,  info: 'Возврат клиенту' }); // cashbox amount = 0
cashbox.refundPayment({  amount: 10,  info: 'Возврат клиенту' }); // cashbox amount not affected (warning)