// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw circle');
    }
}

const circle = new Circle(1);
console.log(circle);
console.log(circle.radius);
circle.draw();