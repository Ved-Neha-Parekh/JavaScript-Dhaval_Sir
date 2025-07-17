// ✅ 📌 find Practice Questions
// 1️⃣2️⃣ [5, 10, 15, 20] mein pehla number jo >12 ho use find karo.
// 1️⃣3️⃣ Ek string array ["Apple", "Banana", "Mango"] mein pehla fruit jo B se start ho, find karo.
// 1️⃣4️⃣ [2, 4, 6, 8] mein pehla number jo >5 ho.
// 1️⃣5️⃣ [1,2,3] mein find karo koi number >10 hai ya nahi (kya output aayega?).

let arr = [5, 10, 15, 20];
let found = arr.find(function (val) {
  return val > 12;
});

// console.log(found);

let fruits = ["Apple", "Banana", "Mango"];
let fruitFound = fruits.find(function (fruit) {
  return fruit.startsWith("B");
});

// console.log(fruitFound);

let numArr = [2, 4, 6, 8];
let numFound = numArr.find(function (val) {
  return val > 5;
});

// console.log(numFound)

let Arr = [1, 2, 3];
let findTen = Arr.find(function (val) {
  return val > 10;
});

console.log(findTen); // undefined
