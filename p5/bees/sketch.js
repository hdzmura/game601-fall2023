let beeArray = [];


//SETUP
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	for (let i = 0; i < 20; i++) {
		beeArray[i] = beeSettings(i);
	}
}


function draw() {
	background(255);

	for (let i = 0; i < 20; i++) {
		if (i <= 10) {
			drawBeeLeft(beeArray[i]);
		}
		if (i > 10) {
			drawBeeRight(beeArray[i]);
		}

	}
}



function beeSettings(i) {
	let bee = {};
	bee.x = random(100, width - 100);
	bee.y = random(86, height - 86);
	bee.xSpeed = random(1, 3);
	bee.ySpeed = random(-1, 1);
	return bee;
}



function drawBeeLeft(bee) {
	
	bee.x -= bee.xSpeed;
	bee.y += bee.ySpeed;

	if (bee.y < -100 || bee.y > height + 100 || bee.x < -100) {
		bee.x = width + 100;
		bee.y = random(86, height - 86);
		bee.xSpeed = random(1, 3);
		bee.ySpeed = random(-1, 1);
	}

	//WINGS
	noFill();
	strokeWeight(10);
	stroke('#23212c');
	triangle(bee.x + 40, bee.y + 25, bee.x + 20, bee.y - 46, bee.x + 60, bee.y - 46);
	arc(bee.x + 40, bee.y - 50, 43, 40, PI, TWO_PI, OPEN);
	triangle(bee.x + 40, bee.y - 25, bee.x + 20, bee.y + 46, bee.x + 60, bee.y + 46);
	arc(bee.x + 40, bee.y + 50, 43, 40, 0, PI, OPEN);

	noStroke();
	fill('white');
	triangle(bee.x + 40, bee.y + 25, bee.x + 20, bee.y - 50, bee.x + 60, bee.y - 50);
	arc(bee.x + 40, bee.y - 49, 40, 40, PI, TWO_PI, OPEN);
	triangle(bee.x + 40, bee.y - 25, bee.x + 20, bee.y + 50, bee.x + 60, bee.y + 50);
	arc(bee.x + 40, bee.y + 49, 40, 40, 0, PI, OPEN);

	//STINGER
	strokeWeight(5);
	stroke('#23212c');
	fill('#23212c');
	triangle(bee.x + 80, bee.y + 10, bee.x + 80, bee.y - 10, bee.x + 100, bee.y);

	//BODY
	fill('#fcb43a');
	ellipse(bee.x + 40, bee.y, 90, 65);

	//HEAD
	noStroke();
	fill('#23212c');
	circle(bee.x, bee.y, 45);

	//STRIPES
	strokeWeight(15);
	stroke('#23212c');
	line(bee.x + 40, bee.y - 27, bee.x + 40, bee.y + 27);
	line(bee.x + 65, bee.y - 21, bee.x + 65, bee.y + 21);
	line(bee.x + 15, bee.y - 20, bee.x + 15, bee.y + 20);

	//ANTENNAE
	strokeWeight(8);
	line(bee.x, bee.y - 5, bee.x - 30, bee.y - 20);
	line(bee.x, bee.y + 5, bee.x - 30, bee.y + 20);

}



function drawBeeRight(bee) {

	bee.x += bee.xSpeed;
	bee.y += bee.ySpeed;

	if (bee.y < -100 || bee.y > height + 100 || bee.x > width + 100) {
		bee.x = -100;
		bee.y = random(86, height - 86);
		bee.xSpeed = random(1, 3);
		bee.ySpeed = random(-1, 1);
	}

	//WINGS
	noFill();
	strokeWeight(10);
	stroke('#23212c');
	triangle(bee.x - 40, bee.y + 25, bee.x - 20, bee.y - 46, bee.x - 60, bee.y - 46);
	arc(bee.x - 40, bee.y - 50, 43, 40, PI, TWO_PI, OPEN);
	triangle(bee.x - 40, bee.y - 25, bee.x - 20, bee.y + 46, bee.x - 60, bee.y + 46);
	arc(bee.x - 40, bee.y + 50, 43, 40, 0, PI, OPEN);

	noStroke();
	fill('white');
	triangle(bee.x - 40, bee.y + 25, bee.x - 20, bee.y - 50, bee.x - 60, bee.y - 50);
	arc(bee.x - 40, bee.y - 49, 40, 40, PI, TWO_PI, OPEN);
	triangle(bee.x - 40, bee.y - 25, bee.x - 20, bee.y + 50, bee.x - 60, bee.y + 50);
	arc(bee.x - 40, bee.y + 49, 40, 40, 0, PI, OPEN);

	//STINGER
	strokeWeight(5);
	stroke('#23212c');
	fill('#23212c');
	triangle(bee.x - 80, bee.y + 10, bee.x - 80, bee.y - 10, bee.x - 100, bee.y);

	//BODY
	fill('#fcb43a');
	ellipse(bee.x - 40, bee.y, 90, 65);

	//HEAD
	fill('#23212c');
	circle(bee.x + 2, bee.y, 45);

	//STRIPES
	strokeWeight(15);
	stroke('#23212c');
	line(bee.x - 40, bee.y - 27, bee.x - 40, bee.y + 27);
	line(bee.x - 65, bee.y - 21, bee.x - 65, bee.y + 21);
	line(bee.x - 15, bee.y - 20, bee.x - 15, bee.y + 20);

	//ANTENNAE
	strokeWeight(8);
	line(bee.x + 2, bee.y - 5, bee.x + 32, bee.y - 20);
	line(bee.x + 2, bee.y + 5, bee.x + 32, bee.y + 20);

}
