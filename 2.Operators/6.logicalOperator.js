// Logical AND (&&)
// returns true if both operands are true
console.log('true && true : ', true && true);
console.log('false && false : ',false && false);

// Logical OR (||)
// returns true if one of the operands is true
console.log('true || false : ',true || false);
console.log('false || false : ',false || false);
console.log('false || true : ',false || true);

// NOT Operator (!)
console.log('!true : ',!true);
console.log('!false : ',!false);

// Confusing
console.log('false || Borshon : ',false || 'Borshon');
console.log('false || 1 : ',false || 1);
console.log('false || 1 || 2 : ',false || 1 || 2); // short-circuiting

// Falsy Values: 
// undefined
// null
// 0
// false
// ''
// NaN

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);