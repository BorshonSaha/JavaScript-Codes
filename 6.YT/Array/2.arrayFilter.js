const isGreater = (x) => x > 20;

const arr = [10, 14, 15, 99, 20, 26];

const result = arr.filter(isGreater);
console.log(result);

const result2 = arr.filter((x) => x > 15);
console.log(result2);
