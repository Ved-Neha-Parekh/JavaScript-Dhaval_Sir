// ✂️ Substring & Substr
// 8️⃣ Ek string fruit = "Pineapple" lo:

// Isme se "apple" ko substring se nikalo.

// Pehle 4 letters substr se nikalo.

let str = "Pineapple";
let c1 = str.indexOf("a");
let c2 = str.lastIndexOf("e");
console.log(str.substring(c1, c2 + 1));

let C1 = str.indexOf("P");
let C2 = str.indexOf("e");
console.log(str.substring(C1, C2 + 1));
