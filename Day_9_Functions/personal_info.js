function displayInfo(name, age, city) {
  console.log(
    `My name is ${name}, I am ${age} years old, and I live in ${city}.`
  );
}
displayInfo("Rohan", 16, "Surat");

const displayInfoArrow = (name, age, city) => {
  console.log(
    `My name is ${name}, I am ${age} years old, and I live in ${city}.`
  );
};
displayInfoArrow("Harshita", 17, "Mumbai");

//! NOTE: console.log() aur 'undefined' ka confusion!

/*
Jab tum ek function banate ho, jaise 'displayInfo()', aur uske andar sirf 'console.log()' use karte ho
(matlab, function ke andar koi 'return' statement nahi hai),
toh woh function automatically 'undefined' return karta hai.

Agar tum us function call ko phir se 'console.log()' ke andar daaloge:
console.log(displayInfo("Rohan", 16, "Surat"));

Toh:
1. Pehle 'displayInfo()' chalega, aur woh apna message print karega.
   (Output: "My name is Rohan...")
2. 'displayInfo()' function chalne ke baad, woh 'undefined' return karega (kyunki koi 'return' nahi hai).
3. Ab, bahar wala 'console.log()' us 'undefined' ko print kar dega.
   (Output: "undefined")

Isiliye, agar function ka kaam sirf kuch print karna hai (TSRN - Takes Something, Returns Nothing),
toh usko seedha call karo, 'console.log()' ke andar mat daalo:

✅ Sahi Tareeka:
displayInfo("Rohan", 16, "Surat");

❌ Galat Tareeka (jo 'undefined' dega):
console.log(displayInfo("Rohan", 16, "Surat"));

*/
