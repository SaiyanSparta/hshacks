var s; 
var scl = 20; 
var pDir = "RIGHT"; 
var food; 

function setup() {
	createCanvas(600, 600); 
	s = new Snake(); 
	frameRate(10); 
	pickLocation(); 
}

function pickLocation() {
	var cols = floor(width/scl); 
	var rows = floor(height/scl); 
	food = createVector(floor(random(cols)), floor(random(rows))); 
	food.mult(scl); 
}

function draw() {
	background(51); 

	if (s.eat(food)) {
		pickLocation(); 
	}
	s.death(); 
	s.update(); 
	s.show(); 

	fill(255, 0, 100); 
	rect(food.x, food.y, scl, scl); 
}

function keyPressed() {
	if (keyCode === UP_ARROW && pDir !== "DOWN") {
		pDir = "UP";
		s.dir(0, -1); 
	}else if (keyCode === DOWN_ARROW && pDir != "UP") {
		pDir = "DOWN"; 
		s.dir(0, 1); 
	} else if (keyCode === RIGHT_ARROW && pDir !== "LEFT"){
		pDir = "RIGHT"; 
		s.dir(1, 0); 	
	} else if (keyCode === LEFT_ARROW && pDir != "RIGHT"){
		pDir = "LEFT"; 
		s.dir(-1, 0); 
	}
}

