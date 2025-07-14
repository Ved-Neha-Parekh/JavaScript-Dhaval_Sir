// 🎯 6️⃣ map()
// 2️⃣1️⃣ [1,2,3,4] ka square banao map() se.
// 2️⃣2️⃣ Ek string array ka har item toUpperCase() karo map() se.
// 2️⃣3️⃣ Ek number array mein sabko +5 karo map() se.
// 2️⃣4️⃣ Ek map() likho jo array mein se sabko string mein convert kare.

let arr = [1, 2, 3, 4];
let squredArr = arr.map(function (val) {
  return val ** 2;
});

// console.log(squredArr)

let strArr =[ "Banana", "Apple", "Mango"];
let upperArr = strArr.map(function(val){
    return val.toUpperCase();
})

// console.log(upperArr);

let numArr = [1, 2, 3, 4];
let addedArr = numArr.map(function(val){
    return val + 5;
})

// console.log(addedArr);
let convertArr = [1, 2, 3, 4];
let convertedArr = convertArr.map(function(val){
    return val.toString();
})

// console.log(convertedArr)
