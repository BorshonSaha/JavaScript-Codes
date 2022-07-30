// Math.random();
// Math.round();
// Math.max();
// Math.min();

// follow MDN article

// getting a random number between two Values
function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandomValue(1, 10));

console.log(Math.round(1.9));

// get max from an array
function getMax(numbers) {
    return Math.max(...numbers);
}

const numbers = [1, 2, 99, 4, 5];
console.log(getMax(numbers))