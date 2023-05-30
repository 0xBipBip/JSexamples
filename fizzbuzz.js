function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// Prompt the user to enter a number
const input = prompt('Enter a number:');
const number = parseInt(input);

// Call the fizzBuzz function with the user's input
if (!isNaN(number)) {
  fizzBuzz(number);
} else {
  console.log('Invalid input. Please enter a valid number.');
}
