// ✅ 📌 forEach Practice Questions
// 1️⃣ Ek array [10, 20, 30, 40] banao — forEach se sabko print karo.
//? 2️⃣ Usi array mein har element ke saath index bhi print karo.
// 3️⃣ [5, 10, 15] ka forEach se har number ko double karke console karo.
// 4️⃣ Ek array ["Ved", "JS", "Code"] banao — forEach se sabko "Hello <name>" print karo.
// 5️⃣ Ek array [1,2,3,4] mein forEach se sabko square karo aur console.log karo.
// 6️⃣ Ek array mein forEach se sum calculate karo aur console.log karo (hint: pehle let sum = 0 banao).

let arr = [10, 20, 30, 40];
arr.forEach(function (val) {
  // console.log(val);
});
arr.forEach(function (val, idx) {
  console.log(`Value: ${val}, Index: ${idx}`);
});

let nums = [5, 10, 15];
nums.forEach(function (val) {
  // console.log(val*2)
});

let strArr = ["Ved", "JS", "Code"];

strArr.forEach(function (val) {
  // console.log(`Hello ${val}`);
});

let arr2 = [1, 2, 3, 4];
arr2.forEach(function (val) {
  // console.log(val ** 2);
});

let Arr = [5, 10, 15];
let sum = 0;
Arr.forEach(function (val) {
  sum += val;
});
// console.log(sum);
