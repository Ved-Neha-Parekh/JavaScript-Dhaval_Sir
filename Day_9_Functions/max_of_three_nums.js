function findMax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) return num1;
  if (num2 > num1 && num2 > num3) return num2;
  else return num3;
}

console.log(findMax(10, 5, 15));
