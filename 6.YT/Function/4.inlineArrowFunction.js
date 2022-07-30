const calculation = (num, fn) => {
  let result = 0;
  for (let i = 0; i < num; i++) {
    const temp = fn(i);
    result += temp;
  }
  return result;
};

const sum = calculation(10, (x) => {
  return x + x;
}); // (x) => {  } inline function
console.log(sum);

const multiply = calculation(10, (x) => {
  return x * x;
});
console.log(multiply);
