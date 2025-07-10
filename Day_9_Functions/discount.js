const checkDiscountEligibility = (totalBillAmt, isMember) => {
  if (totalBillAmt >= 1000 && isMember) {
    return "Eligible to get 10% discount";
  } else {
    return "No discount applied.";
  }
};

console.log(checkDiscountEligibility(1000, true));
console.log(checkDiscountEligibility(1000, false));
