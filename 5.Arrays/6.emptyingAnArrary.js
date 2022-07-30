let numbers = [1, 2, 3, 4, 5];
let another = numbers;

// solution 1
numbers = [];
console.log(numbers);
console.log(another);

// solution 2
numbers.length = 0;
console.log(numbers);
console.log(another);