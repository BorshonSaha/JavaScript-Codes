function inputType(a, b, ...rest) {
  console.log("a:", a, "b:", b);
  console.log("rest:", rest);
}
inputType(1, 2, 3, 4, 5, 6, 7, 8);

// 2
function inputType2({ name }) {
  console.log(name);
}
inputType2({ name: "Borshon" });

// 3
function inputType3() {
  console.log("arguments: ", arguments);
}
inputType3(1, 2, 3, 4, 5, 6, 7, 8);
