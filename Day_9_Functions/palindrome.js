function isPalindrome(str) {
  const len = str.length;

  if (len <= 1) return true;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) return false;
  }
  return true;
}

// --- Test Cases for isPalindrome ---
console.log("\n--- isPalindrome Tests ---");
console.log(`Is "madam" palindrome? ${isPalindrome("madam")}`);
console.log(`Is "racecar" palindrome? ${isPalindrome("racecar")}`);
console.log(`Is "hello" palindrome? ${isPalindrome("hello")}`);
console.log(`Is "A" palindrome? ${isPalindrome("A")}`);
console.log(`Is "" palindrome? ${isPalindrome("")}`);
console.log(`Is "level" palindrome? ${isPalindrome("level")}`);
console.log(`Is "rotor" palindrome? ${isPalindrome("rotor")}`);
console.log(`Is "Madam" palindrome? ${isPalindrome("Madam")}`);
console.log(
  `Is "A man a plan a canal Panama" palindrome? ${isPalindrome(
    "A man a plan a canal Panama"
  )}`
);
