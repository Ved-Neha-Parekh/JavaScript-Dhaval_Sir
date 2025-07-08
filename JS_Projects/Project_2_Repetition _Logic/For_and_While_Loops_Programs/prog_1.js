console.log("--- Program 1: Print 1 2 3 4 5");

console.log("--- Using (for) Loop ---");

let str = "";
for (let i = 1; i <= 5; i++) {
  str += i + " ";
}
console.log(str);

console.log("--- Using (while) Loop ---");
let num = 1;
while (num <= 5) {
  console.log(num);
  num++;
}

console.log("--- Using (do-while) Loop ---");

num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);

console.log("--------------------------");
