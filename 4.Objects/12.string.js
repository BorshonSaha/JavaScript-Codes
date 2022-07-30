// String primitive
const message = 'hi';
console.log(typeof (message));

// String Object
const anotherString = new String('hi');
console.log(typeof (anotherString));

const str = "  This is my message  ";
console.log(str.includes('my'));
console.log(str.startsWith('This'));
console.log(str.endsWith('message'));
console.log(str.replace('my', 'your'));
console.log(str.toUpperCase());
console.log(str.trim());

const str2 = "This is my message";
console.log(str2.split(' '));

// follow string, escape notation MDN article