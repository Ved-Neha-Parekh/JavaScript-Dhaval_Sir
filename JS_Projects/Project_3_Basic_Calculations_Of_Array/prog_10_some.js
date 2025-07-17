// ✅ 📌 some Practice Questions
// 1️⃣6️⃣ [1, 3, 5, 7] mein check karo koi even number hai ya nahi.
// 1️⃣7️⃣ [10, 20, 30] mein check karo koi >25 hai ya nahi.
// 1️⃣8️⃣ [true, false, false] mein check karo koi true hai ya nahi.
// 1️⃣9️⃣ Ek empty array pe some lagao aur output dekho kya hota hai.

let arr1 = [1, 3, 5, 7];
let ans1 = arr1.some(function (val) {
  return val % 2 === 0;
});

// console.log(ans1)

let arr2 = [10, 20, 30];
let ans2 = arr2.some(function (val) {
  return val > 25;
});
// console.log(ans2)

let arr3 = [true, false, false];
let ans3 = arr3.some(function (val) {
  return val === true;
});
// console.log(ans3);

let empArr = [];
let empAns = empArr.some(function (val) {
  return val;
});
console.log(empAns);
