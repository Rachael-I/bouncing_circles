var circle_1;
var circle_2;
var circle_3;
var prettyColour;

function setup() {
  createCanvas(400, 400);
  circle_1 = new Circle();
  circle_2 = new Circle();
  circle_3 = new Circle();
  prettyColour = 1;
  increment = 1;
}

function draw() {
  if (prettyColour < 255) {
    prettyColour = prettyColour + 1;
  } else {
    prettyColour = prettyColour - 255;
  }
  
  background(prettyColour); 
  
  circle_1.draw();
  circle_1.slide();
  
  circle_2.y = 250;
  circle_2.draw();
  circle_2.slide();
  
  circle_3.x = 350;
  circle_3.draw();
  circle_3.bounce();
}

function Circle() {
  this.x = 98;
  this.y = 98;
  this.size = 50;
  this.changeBy = 1;
  this.draw = function() {
    ellipse (this.x, this.y, this.size, this.size);
  };
  this.grow = function() {
    if (this.size < 200) {
      this.size = this.size + 1;
    }
  }
  this.slide = function() {
    if (this.x > 200 || this.x < 25) {
      this.changeBy = 0 - this.changeBy;
    }
    this.x = this.x + this.changeBy;
  }
    this.bounce = function() {
    if (this.y > 200 || this.y < 25) {
      this.changeBy = 0 - this.changeBy;
    }
    this.y = this.y + this.changeBy;
  }
}