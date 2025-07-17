// 🎯 5️⃣ sort()
// 1️⃣7️⃣ [100, 25, 2, 50] ko sort() karo bina compareFn ke aur output dekho.
// 1️⃣8️⃣ Usi array ko compareFn ke saath ascending mein sort karo.
// 1️⃣9️⃣ Ek string array [ "Banana", "Apple", "Mango"] ko sort karo.
// 2️⃣0️⃣ Ek array ko sort() ke baad reverse() karo.

let arr = [100, 25, 2, 50];
let sortedArr = arr.sort();
// console.log(sortedArr);

let SortedArr = arr.sort(function (a, b) {
  return a - b;
});
// console.log(sortedArr);

let strArr = ["Banana", "Apple", "Mango"];
strArr.sort();
// console.log(strArr);

let Arr = [4, 7, 83, 2, 5, 6, 77];
let sortedNewArr = Arr.sort(function (a, b) {
  return a - b;
});

sortedNewArr.reverse();

// console.log(sortedNewArr);
