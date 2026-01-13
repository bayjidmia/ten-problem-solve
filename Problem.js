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

// problem 4
function findLargestNumber(arr) {
  let largest = arr[0];

  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }

  return largest;
}

// problem 5

function removeDuplicates(arr) {
  let uniqueArr = [];

  for (let num of arr) {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  }

  return uniqueArr;
}

// problem 6

function sumArray(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
}
