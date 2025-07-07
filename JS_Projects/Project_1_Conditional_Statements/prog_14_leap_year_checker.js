console.log("--- Program 14: Leap Year Checker ---");

let year = 2025; // Use: 2000, 2400, 1900, 2100, 2023, 2025, 2004, 2008

console.log(`\nChecking if the year ${year} is a leap year...`);

let isLeap;

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  isLeap = true;
} else {
  isLeap = false;
}

// --- Output the result ---
if (isLeap) {
  console.log(`Result: ${year} IS a leap year.`);
} else {
  console.log(`Result: ${year} IS NOT a leap year.`);
}
