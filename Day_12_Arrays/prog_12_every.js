// ✅ 📌 every Practice Questions
// 2️⃣0️⃣ [2,4,6,8] mein check karo sab even hai ya nahi.
// 2️⃣1️⃣ [1,2,3,4] mein check karo sab positive hai ya nahi.
// 2️⃣2️⃣ [10, 20, 30] mein check karo sab >15 hai ya nahi.
// 2️⃣3️⃣ [1, 2, -3] mein check karo sab positive hai ya nahi.

let arr1 = [2, 4, 6, 8];
let ans1 = arr1.every(function (val) {
  return val % 2 === 0;
});

// console.log(ans1);

let arr2 = [1, 2, 3, 4];
let ans2 = arr2.every(function (val) {
  return val > 0;
});
// console.log(ans2);

let arr3 = [10, 20, 30];
let ans3 = arr3.every(function (val) {
  return val > 15;
});

// console.log(ans3);

let arr4 = [1, 2, -3];
let ans4 = arr4.every(function (val) {
  return val > 0;
});

// console.log(ans4);
