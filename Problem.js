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
// problem 7
function getEvenNumbers(arr) {
  let evenNumbers = [];

  for (let num of arr) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }

  return evenNumbers;
}
// problem 8
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// problem 9
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}
// problem 10
function printPingPong() {
  const result = [];

  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("PingPong");
    } else if (i % 3 === 0) {
      result.push("Ping");
    } else if (i % 5 === 0) {
      result.push("Pong");
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log(
  printPingPong(
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  )
);
