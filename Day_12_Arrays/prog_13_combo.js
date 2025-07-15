let arr = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Kiwi",
  "Pineapple",
  "Grapes",
  "Papaya",
  "Berry",
];

// 🔢 Step 1: Access & Modify
// 1️⃣ 4th item access karo aur console.log karo.
// console.log(arr[3]);
// 2️⃣ Last item ko "Strawberry" se replace karo.
let spliced = arr.splice(8, 1, "Strawberry");
// console.log(arr);
// 3️⃣ push se ek aur fruit "Watermelon" add karo.
let pushed = arr.push("Watermelon");
// console.log(arr);
// 4️⃣ unshift se "Guava" ko start mein add karo.
let unshifted = arr.unshift("Guava");
// console.log(arr);
// 5️⃣ pop aur shift se ek ek fruit hatao.
let shifted = arr.shift();
// console.log(arr);
let popped = arr.pop();
// console.log(arr);

// 🔪 Step 2: splice() vs slice()
// 6️⃣ splice se middle se 2 fruits hatao aur "Litchi", "Cherry" add karo.
let splice_2 = arr.splice(3, 2, "Litchi", "Cherry");
// console.log(arr);
// 7️⃣ slice se 3rd se 6th fruit ka naya array banao.
let sliced = arr.slice(3, 7);
// console.log(sliced);
// 8️⃣ slice se last 3 fruits ka ek aur naya array banao.
let lastSliced = arr.slice(6, 9);
// console.log(lastSliced);

// 🔄 Step 3: sort(), reverse()
// 9️⃣ Array ko sort karo aur console.log karo.
let sorted = arr.sort();
// console.log(sorted);
// 🔟 Uske baad reverse karo aur console.log karo.
let reversed = arr.reverse();
// console.log(reversed);

// 🧩 Step 4: map(), forEach()
// 1️⃣1️⃣ map se sab fruits ko uppercase karo aur print karo.
let mapped = arr.map(function (val) {
  //   console.log(val.toUpperCase());
});

// 1️⃣2️⃣ forEach se sab fruits ke saath "Yummy" print karo: Yummy Apple etc.
let forEachLoop = arr.forEach(function (val) {
  //   console.log(`Yummy ${val}`);
});
// 1️⃣3️⃣ forEach se sab fruits ke length print karo.
let fruitLength = arr.forEach(function (val) {
  // console.log(val.length);
});

// ✅ Step 5: filter(), find(), some(), every()
// 1️⃣4️⃣ filter se woh fruits nikalo jinke naam 6 ya usse zyada letters ke hain.
let filterd = arr.filter(function (val) {
  return val.length >= 6;
});
// console.log(filterd)
// 1️⃣5️⃣ find se pehla fruit jo P se start ho, dhoondo.
let findFruit = arr.find(function (val) {
  return val.startsWith("P");
});
// console.log(findFruit)
// 1️⃣6️⃣ some se check karo koi fruit "Kiwi" hai ya nahi.
let someFruit = arr.some(function (val) {
  return val === "Kiwi";
});
// console.log(someFruit)
// 1️⃣7️⃣ every se check karo sab fruits ka naam length > 3 hai ya nahi.
let everyFruit = arr.every(function (val) {
  return val.length > 3;
});
// console.log(everyFruit);

// 🔢 Step 6: reduce()
// 1️⃣8️⃣ map se sab fruits ke length nikalo, aur reduce se total letters count karo.
let lenghtOfFruit = arr.map(function (val) {
  return val.length;
});

let totalLetters = lenghtOfFruit.reduce(function (a, b) {
  return a + b;
}, 0);
// console.log(totalLetters);
// 1️⃣9️⃣ reduce se longest fruit ka naam find karo.
// (Hint: compare .length inside reduce.)
let longestFruit = arr.reduce(function (a, b) {
  return a.length > b.length ? a : b;
});
// console.log(longestFruit);

// 🧩 Step 7: Destructuring + Spread
// 2️⃣0️⃣ Array mein se pehle 3 fruits destructure karo let [a,b,c] se aur print karo.
// 2️⃣1️⃣ Spread operator se ek nayi array banao jisme old array + "Melon", "Dragonfruit" ho.

let [a, b, c] = [...arr];
// console.log(a, b, c);

let spreadArr = [...arr, "Melon", "Dragonfruit"];
console.table(spreadArr);
