// ! push(), pop(), shift(), unshift()
// 5️⃣ Ek array [1,2] mein last mein 3 add karo aur first mein 0 add karo.
// 6️⃣ Usi array se pop() aur shift() use karke dono side se remove karo.
// 7️⃣ Ek array banao aur usme push() aur unshift() ek sath use karo.
// 8️⃣ Ek empty array banao aur 5 times push() use karke values add karo.

let nums = [1, 2];
nums.unshift(0);
nums.push(3);

// console.log(nums);

nums.shift();
nums.pop();
// console.log(nums);

// nums.push(3).unshift(0); // TypeError: nums.push(...).unshift is not a function
// console.log(nums);

let newArr = [];
newArr.push(1);
newArr.push(2);
newArr.push(3);
newArr.push(4);
newArr.push(5);

console.log(newArr);
