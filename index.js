// Task One
// Write a loop 1 to 200. Use break to exit the loop once you find 100.

for (let i = 1; i <= 200; i++) {
  console.log(i);
  if (i === 100) {
    console.log("100 is the best number");
    break;
  }
}

// Task Two
// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

let i = 1;
let sum = 0;
while (i < 200) {
  sum += i;
  if (sum >= 100) {
    console.log("100 is the best number");
    break;
  }
  i++;
}

// Task Three

// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

for (let i = 1; i <= 100; i++) {
  if (Number.isInteger(Math.sqrt(i)) && i > 1) {
    console.log(i + " is perfect square number");
    break;
  }
}

// Task Four

// Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.

for (let i = 1; i <= 40; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  // console.log(i);
}

// Task Five

// display odd number from 55 to 85 and skip the numbers divisible by 5.

for (let i = 55; i <= 85; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    continue;
  }
  console.log(i);
}

// Task Six

// "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

let index = 0;
for (let i = 1; i <= 60; i++) {
  index++;
  console.log(index + ". I will invest at least 6 hrs every single day for next 60 days!");
}

// Task Seven
// Find all the odd numbers from 61 to 100.

for (let i = 61; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log("The odd numbers between 61 and 100 are: " + i);
  }
}

// Task Eight
// Find all the even numbers from 78 to 98.

for (let i = 78; i <= 98; i++) {
  if (i % 2 === 0) {
    console.log("The even numbers between 78 and 98 are: " + i);
  }
}

// Task Nine
// Display sum of all the odd numbers from 91 to 129.
let sum1 = 0;
for (let i = 91; i <= 129; i++) {
  if (i % 2 !== 0) {
    sum1 += i;
    console.log(sum1);
  }
}
console.log("The sum of odd numbers between 91 and 129 is: " + sum1);

// Task Ten
// Display sum of all the even numbers from 51 to 85.
let sum2 = 0;
for (let i = 51; i <= 85; i++) {
  if (i % 2 !== 0) {
    sum2 += i;
    console.log(sum2);
  }
}
console.log("The sum of odd numbers between 51 and 85 is: " + sum2);

// Task Eleven
// Generate a multiplication table for number 9
for (let i = 1; i <= 10; i++) {
  console.log("9 * " + i + " = " + 9 * i);
}

// Task Twelve
// Implement a countdown timer that counts down from 81 to 65.
for (let i = 81; i >= 65; i--) {
  console.log(i);
}

// while loop task
let num = 0;
while (num <= 60) {
  console.log("I will invest at least 6 hrs every single day for next 60 days!");
  num++;
}
