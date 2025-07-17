// 🎯 4️⃣ slice()
// 1️⃣3️⃣ Ek array [1,2,3,4,5,6] mein se 2 se 5 tak ka slice banao.
// 1️⃣4️⃣ Ek array ka pura slice banao (copy karo).
// 1️⃣5️⃣ Ek array mein slice() ka negative index use karo.
// 1️⃣6️⃣ slice() ka result store karo aur dono arrays print karo.

let arr = [1, 2, 3, 4, 5, 6];
let slicedArr = arr.slice(1, 5);
// console.log(slicedArr);

let copyArr = [...arr];
// console.log(copyArr);

let negIdx = arr.slice(-1,2);
// console.log(negIdx);

