class Payment {
  pay(amount) {
    console.log(`Processing a payment of $${amount}.`);
  }
}

class CreditCard extends Payment {
  pay(amount) {
    console.log(`💳 Successfully paid $${amount} using a Credit Card.`);
  }
}

class PayPal extends Payment {
  pay(amount) {
    console.log(`🅿️ Payment of $${amount} made via PayPal.`);
  }
}

let paymentMethods = [new CreditCard(), new PayPal()];

paymentMethods.forEach((method) => method.pay(750));
