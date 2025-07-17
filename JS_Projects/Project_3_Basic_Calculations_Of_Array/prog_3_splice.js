// 🎯 3️⃣ splice()
// 9️⃣ Ek array [1,2,3,4,5] mein 3rd index se 2 element delete karo.
// 🔟 [10,20,30,40] mein 2nd index pe 25 add karo bina kuch delete kiye.
// 1️⃣1️⃣ [5,10,15,20] mein se 10 aur 15 hatake unki jagah 11,12,13 add karo.
//? 1️⃣2️⃣ splice() se sirf add karke dekho, delete mat karo.

let arr = [1, 2, 3, 4, 5];
arr.splice(3, 2);

// console.log(arr);

let newArr = [10, 20, 30, 40];
newArr.splice(2, 0, 25);
// console.log(newArr);

let newArr2 = [5, 10, 15, 20];
newArr2.splice(1, 2, 11, 12, 13);

// console.log(newArr2)

let newArr3 = [5, 10, 15, 20];
// newArr3.splice();
