// Bitwise OR (|)
console.log(1 | 2);

// Bitwise AND (&)
console.log(1 & 2);

// Read, Write, Execute
// 00000100 
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = (myPermission & readPermission) ? 'Yes' : 'No';
console.log(message);