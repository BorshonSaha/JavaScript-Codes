// this keyword represents the immediate parent context

name2 = "awesomeness";
c1 = {
  name: "MERN",
  lang: "JavaScript",
  getDetails: function () {
    name = "MERN2";
    return "Names: " + name + " " + this.name + " " + name2;
  },
  getDetails2: () => {
    // () => in this case This keyword does not represent parent
    name = "MERN3";
    return `Names2: ${name} ${this.name} ${name2}`;
  },
};

console.log(c1.getDetails());
console.log(c1.getDetails2());
