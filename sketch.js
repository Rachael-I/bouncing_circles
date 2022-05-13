var circle_1;
var circle_2;
var circle_3;
var pretty;
var groovy;

function setup() {
  createCanvas(400, 400);
  circle_1 = new Circle();
  circle_2 = new Circle();
  circle_3 = new Circle();
  
  pretty = {
    prettyColour: 50,
    change() {
      if (this.prettyColour < 255) {
        this.prettyColour = this.prettyColour + 1;
      } else {
        this.prettyColour = this.prettyColour - 255;
      } 
      return this.prettyColour;
    }
   };
  
  groovy = {
    groovyColour: 50,
    change() {
      if (this.groovyColour < 105) {
        this.groovyColour = this.groovyColour + 1;
      } else {
        this.groovyColour = this.groovyColour - 255;
      } 
      return this.groovyColour;
    }
   };
}

function draw() {
  var c = pretty.change();
  background(c, 200, 200); 
  noStroke();
  
  var d = groovy.change();
  fill(d, d, 200);
  circle_1.draw();
  circle_1.slide();
  
  fill(d, 200, d);
  circle_2.y = 250;
  circle_2.draw();
  circle_2.slide();
  
  fill(200, d, d);
  circle_3.x = 350;
  circle_3.draw();
  circle_3.bounce();
}

function Circle() {
  this.x = 98;
  this.y = 98;
  this.size = 50;
  this.changeBy = 1;
  this.changeUp = 2;
  this.draw = function() {
    ellipse (this.x, this.y, this.size, this.size);
  };
  this.grow = function() {
    if (this.size < 200) {
      this.size = this.size + 1;
    }
  }
  this.slide = function() {
    if (this.x > 300 || this.x < 25) {
      this.changeBy = 0 - this.changeBy;
    }
    this.x = this.x + this.changeBy;
  }
    this.bounce = function() {
    if (this.y > 375 || this.y < 25) {
      this.changeUp = 0 - this.changeUp;
    }
    this.y = this.y + this.changeUp;
  }
}