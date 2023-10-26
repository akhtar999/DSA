class Cookie {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  setColor() {
    this.color = color;
  }
}

let cookie1 = new Cookie("red");
let cookie2 = new Cookie("yellow");

console.log(cookie1.getColor());
console.log(cookie2.getColor());
