// 🎯 8️⃣ filter()
// 2️⃣9️⃣ [5,10,15,20] mein se sab even number nikalo.
// 3️⃣0️⃣ [1,2,3,4,5,6,7] mein se jo 4 se bade hain wo nikalo.
// 3️⃣1️⃣ Ek array mein se sirf negative numbers nikalo.
// 3️⃣2️⃣ Ek string array mein se sirf 5 letters wale word nikalo.

let arr = [5, 10, 15, 20];

let result = arr.filter(function (val) {
  return val % 2 === 0;
});

// console.log(result);

let numArr = [1, 2, 3, 4, 5, 6, 7];
let ans = numArr.filter(function (val) {
  return val > 4;
});

// console.log(ans);

let newArr = [1, -2, 3, -4, 5, 6, -7];

let negArr = newArr.filter(function (val) {
  return val < 0;
});

// console.log(negArr);

let strArr = ["Banana", "Apple", "Mango", "Kiwi", "Guava"];
let findStr = strArr.filter(function (val) {
  return val.length === 5;
});

// console.log(findStr);
