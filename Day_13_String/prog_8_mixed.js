// 🧩 Mixed Practice
// 1️⃣1️⃣ Ek string para = "I love coding in JavaScript and JavaScript loves me" banao:

// "JavaScript" ko "JS" se replace karo.

// Pehla "love" word ka index print karo.

// Check karo "Python" word present hai ya nahi.

let str = "I love coding in JavaScript and JavaScript loves me";

let replaced = str.replace("JavaScript", "JS");
// console.log(replaced);

let idx = str.indexOf("love");
// console.log(idx);

let check = str.includes("Python");
// console.log(check);

// 🧵 Combining Methods
// 1️⃣2️⃣ Ek string msg = " Learn JS with practice ":

// String ko trim karo (trim method, agar padha ho).

// Sabko lowercase mein convert karo.

// "JS" word ko "JavaScript" se replace karo.

let msg = " Learn JS with practice ";

let result = msg.replace("JS", "JavaScript").toLowerCase().trim();
// console.log(result);

// 🧩 Bonus
// 1️⃣3️⃣ Ek string str = "HELLO" ko pehle lowercase mein convert karo, fir pehla letter capital karo baaki chhota rakho (e.g. "Hello").

let str_1 = "HELLO";
let ans = str_1.toLowerCase().replace("h", "H");
console.log(ans);
