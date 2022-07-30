// Primitives are copied by their value
// Objects are copied by their reference

let number = 10;
function increase(number) {
    number++; 
}

increase(number);
console.log(number);



let object = {value: 10};
function increment(object) {
    object.value++;
}

increment(object);
console.log(object);
