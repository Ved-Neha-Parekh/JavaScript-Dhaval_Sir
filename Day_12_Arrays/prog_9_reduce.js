// ✅ 📌 reduce Practice Questions
// 7️⃣ Ek array [1, 2, 3, 4, 5] ka reduce se sum nikalo.
// 8️⃣ [2, 3, 4] ka reduce se product nikalo.
// 9️⃣ [100, 50, 25] ka reduce se average nikalo (hint: sum/length).
// 🔟 Ek array [5, 10, 15] ka reduce se biggest number find karo.
// 1️⃣1️⃣ Ek array [10, 20, 30] ka reduce karo aur second argument 5 do — output dekho kya hota hai.

let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce(function (a, b) {
  return a + b;
}, 0);
// console.log(sum);

let newArr = [2, 3, 4];
let product = newArr.reduce(function (a, b) {
  return a * b;
}, 1);

// console.log(product);

let array = [100, 50, 25];
let sum2 =
  array.reduce(function (a, b) {
    return a + b;
  }, 0) / array.length;

let avg = sum2 / array.length;
// console.log(avg);
// console.log(sum2);

let Arr = [5, 10, 15];
let max = Arr.reduce(function (a, b) {
  return a < b ? a : b;
});

// console.log(max);

let argArr = [10, 20, 30];
let arg = argArr.reduce(function (a, b) {
  return a + b;
}, 5);

console.log(arg);
