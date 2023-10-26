class Cookie {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
}

let cookie1 = new Cookie("red");
let cookie2 = new Cookie("yellow");

//get color

// console.log(cookie1.getColor()); // red
// console.log(cookie2.getColor()); // yellow

//set color
cookie1.setColor("blue");

console.log(cookie1.getColor()); //blue
