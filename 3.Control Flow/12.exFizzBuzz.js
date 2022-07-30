// divisible by 3 => Fizz
// divisible by 5 => Buzz
// divisible by both 3 and 5 => FizzBuzz
// not divisible by 3 or 5 => input
// not a number => 'Not a number'

// typeof(NaN) => number

function fizBuzz(input) {
    if (typeof input !== 'number') {
        console.log('Not a number');
        return;
    }
    if (input % 3 === 0 && input % 5 === 0) console.log('FizzBuzz');
    else if (input % 3 === 0) console.log('Fizz');
    else if (input % 5 === 0) console.log('Buzz');
    else console.log(input);
}

fizBuzz(15);

console.log(typeof(NaN)); // number