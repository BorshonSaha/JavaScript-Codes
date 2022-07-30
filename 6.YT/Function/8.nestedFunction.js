function outer(x) {
  function inner(y) {
    return x + y;
  }
  return inner;
}

const temp = outer(10);
console.log(temp(20));

const result = outer(5)(3);
console.log(result);

// 2nd program

function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

const result2 = outside()(10);
console.log(result2); // returns 20 instead of 10
