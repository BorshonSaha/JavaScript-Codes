const square = (x) => {
  const fn = function () {
    return x * x;
  };
  return fn;
};

console.log(square(10)); // returns function

console.log(square(10)()); // returns value
