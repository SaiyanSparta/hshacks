var angle = 0; 
var ratio = .67; 
var aRatio = 1; 
var slider; 
var rSlider; 
function setup() {
	createCanvas(400, 400); 
	slider = createSlider(0, TWO_PI, PI/4, .1); 
	rSlider = createSlider(0, 0.75, .667, .05);
	aSlider = createSlider(0, 2, 1, .1); 
}

function draw() {
	background(51); 
	angle = slider.value(); 
	ratio = rSlider.value(); 
	aRatio = aSlider.value(); 
	stroke(255); 
	translate(200, height); 
	branch(100, angle); 
}

function branch(len, angle) {
	line(0, 0, 0, -len); 
	translate(0, -len); //translate up to rotate 
	if (len > 4) {
		push(); 
		rotate(angle); 
		branch(len * ratio, angle*aRatio); 
		pop(); //keep state 
		push(); 
		rotate(-angle); 
		branch(len*ratio, angle*aRatio); 
		pop(); 
	}
}