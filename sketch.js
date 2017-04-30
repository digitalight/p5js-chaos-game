var pointA;
var pointB;
var pointC;
var d;
var dice;
var run = false;
var count = 0;
var fpsSlider;
var fpsLabel;
var fps = 30;
var fpsValue = fps;

function setup() {
	var myCanvas = createCanvas(innerHeight-110,innerHeight-110);
	myCanvas.parent('game');
	myCanvas.position(innerWidth/2-width/2,50);
	background(20);
	stroke(255);
	frameRate(fps);

	//Create Triangle
	pointA = createVector(width/2, 60);
	pointB = createVector(60, height - 60);
	pointC = createVector(width-60, height-60);

	// Draw Triangle
	strokeWeight(8);
	point(pointA.x, pointA.y);
	point(pointB.x, pointB.y);
	point(pointC.x, pointC.y);

	// Text around Triangle
	noStroke();
	fill(255);
	textSize(24);
	text("A", width/2-8, 40);
	text("B", 30, height - 52);
	text("C", width-40, height-52);
	stroke(255);

	// Slider
	fpsLabel = createP(fpsValue);
	fpsLabel.style("color", "white");
	fpsLabel.position((innerWidth/2-120),innerHeight-40);
	fpsSlider = createSlider(4,60,fps,2);
	fpsSlider.position(innerWidth/2-300,innerHeight-40);
	fpsSlider.style('width', '160px');

	// Make new Dice
	dice = new Dice;
	d = new Dot;

	// Status info
	countLabel = select('#counter');
	countLabel.html(nf(count,6,0));
	diceLabel = select('#dice');
	diceLabel.html("-");
	startBtn = select('#start');
	startBtn.position(innerWidth/2-60, 10)
	startBtn.mousePressed(toggleRun);
	restartBtn = select('#restart');
	restartBtn.position(innerWidth/2, 10)
	restartBtn.mousePressed(restartGame);
}

function draw() {
  //Make new Dot;
  		var fps = fpsSlider.value();
  		frameRate(fps);
  		fpsLabel.html(fps + " fps");


  		if (run == true) {
  			d.display();
			d.halfway(dice.choice());
			count++;
			countLabel.html(nf(count,6,0));
			diceLabel.html(dice.selected);
  		}
}

function toggleRun() {
	run = !run;
	if (run) {
		startBtn.class("btn btn-danger text-center");
		startBtn.html("Stop");
		diceLabel.html(dice.selected);
	}
	if (!run) {
		startBtn.class("btn btn-success text-center");
		startBtn.html("Start");
		diceLabel.html("-");
	}

}

function restartGame() {
	location.reload();
}
