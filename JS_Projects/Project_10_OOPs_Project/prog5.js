class Shipping {
  calculate(order) {
    return 0;
  }
}

class Flipkart extends Shipping {
  calculate(order) {
    return order.weight * 10;
  }
}

class Amazon extends Shipping {
  calculate(order) {
    return order.distance * 5;
  }
}

class Delivery extends Shipping {
  calculate(order) {
    return order.weight * 8 + order.distance * 2;
  }
}

function getShippingCost(order, shippingProvider) {
  return shippingProvider.calculate(order);
}

let order = { weight: 3, distance: 50 };

console.log("Flipkart:", getShippingCost(order, new Flipkart()));
console.log("Amazon:", getShippingCost(order, new Amazon()));
console.log("Delivery:", getShippingCost(order, new Delivery()));
