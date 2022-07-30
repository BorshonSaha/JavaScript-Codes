const numbers = [3, 4];

// Adding at End
numbers.push(5, 6);
console.log(numbers);

// Adding at Beginning
numbers.unshift(1, 2);
console.log(numbers)

// Adding at desired position
numbers.splice(2, 0, 'a', 'b'); // here 0 means, Inserting without deleting index 2 value 
console.log(numbers);