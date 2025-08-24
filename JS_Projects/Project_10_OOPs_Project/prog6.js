class Shipping {
  calculate(order) {
    return 0; // Default cost
  }
}

class Flipkart extends Shipping {
  calculate(order) {
    return order.weight * 12; 
  }
}

class Amazon extends Shipping {
  calculate(order) {
    return order.distance * 6; 
  }
}

class SpeedyDelivery extends Shipping {
  calculate(order) {
    return order.weight * 9 + order.distance * 3; 
  }
}

function getShippingCost(order, shippingProvider) {
  return shippingProvider.calculate(order);
}

let customerOrder = {
  weight: 5,
  distance: 120,
};

console.log(
  `📦 Flipkart Shipping Cost: ₹${getShippingCost(
    customerOrder,
    new Flipkart()
  )}`
);
console.log(
  `📦 Amazon Shipping Cost: ₹${getShippingCost(customerOrder, new Amazon())}`
);
console.log(
  `📦 SpeedyDelivery Cost: ₹${getShippingCost(
    customerOrder,
    new SpeedyDelivery()
  )}`
);
