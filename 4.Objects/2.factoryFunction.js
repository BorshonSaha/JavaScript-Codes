function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('Draw circle');
        }
    }
};

const circle1 = createCircle(1);
console.log(circle1);
circle1.draw();

const circle2 = createCircle(2);
console.log(circle2);

// factory function used to create object