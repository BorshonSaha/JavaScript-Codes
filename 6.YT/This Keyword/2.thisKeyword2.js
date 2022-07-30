name2 = "awesomeness";
c1 = {
  name: "MERN",
  lang: "JavaScript",
  getDetails: function () {
    name = "MERN2";
    return "Names: " + name + " " + this.name + " " + name2;
  },
  getDetails2: function () {
    return {
      name: "MERN4",
      getDetails3: function () {
        name = "MERN3";
        return "Names: " + name + " " + this.name + " " + name2;
      },
    };
  },
};

console.log(c1.getDetails2());
console.log(c1.getDetails2().getDetails3());
