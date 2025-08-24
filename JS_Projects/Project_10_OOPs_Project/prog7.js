class Payment {
  process(amount) {
    console.log(`🔄 Processing a payment of ₹${amount}...`);
  }
}

class CreditCardPayment extends Payment {
  process(amount) {
    console.log(`💳 Paid ₹${amount} using Credit Card successfully!`);
  }
}

class UPIPayment extends Payment {
  process(amount) {
    console.log(`📲 Paid ₹${amount} with UPI. Payment is instant!`);
  }
}

class PayPalPayment extends Payment {
  process(amount) {
    console.log(`🅿️ Payment of ₹${amount} completed via PayPal.`);
  }
}

function checkout(amount, paymentMethod) {
  console.log("--- Starting checkout process ---");
  paymentMethod.process(amount);
  console.log("--- Checkout completed ---");
}

checkout(1500, new CreditCardPayment());
checkout(3000, new UPIPayment());
checkout(7500, new PayPalPayment());
