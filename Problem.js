// problem 1
function reverseString(str) {
  return str.split("").reverse().join("");
}

// problem 2
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// problem 3
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}
console.log(isPalindrome("racecar"));
