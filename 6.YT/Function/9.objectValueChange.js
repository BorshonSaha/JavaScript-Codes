var m = { x: 10 };
function change(n) {
  n.x = 30; // referential change
}

change(m);
console.log(m);

var n = { x: 50 };
function change2(a) {
  a = { x: 99 }; // full object replacing
}

change2(n);
console.log(n);
