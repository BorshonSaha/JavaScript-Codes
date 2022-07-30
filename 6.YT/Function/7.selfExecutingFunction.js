console.log(
  (() => {
    return new Date();
  })()
);

console.log(
  (function evaluateMe() {
    console.log("test");
    return "hello";
  })()
);
