const circle = {
    radius: 1
};

// circle = {}; cannot be reassigned because of const
// but can be add or delete new properties

circle.color = 'yellow';
circle.draw = function() {

};

delete circle.color;
delete circle.draw;

console.log(circle);