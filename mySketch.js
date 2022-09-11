//CHECK COLLISION DETECTION

// declaring the strawberry that the player controls
let strawberry
//variable for my banana object
//let billy
// this score array will accept a new value everytime a bannana goes off the screen
let score = 0
// this is being used to trigger the different screens
let state = 0
//variable for my banana image
let img
//creating an array for banana creation
let bananaList = []
//let bananaNum = random(0,35);
//let scorelist=[]
//needed to load the images of the bananas
function preload() {
	img = loadImage('assets/clean banana.png');

}

function setup() {
	//this number is used in the for loop to determine the number of bananas that can be generated
	let bananaNum = random(4, 5);

	createCanvas(windowWidth, windowHeight);
	background(100);
	strawberry = new Strawberry()
	billy = new Banana()
	// this for loop below creates the bananas by adding to the bananaList array and is limited by the bananaNum variable
	for (let i = 0; i < bananaNum; i++) {
		bananaList.push(new Banana())
	}
}

function draw() {
	let bananaNum = random(4, 5);
	if (state == 0) {
		startScreen();
	}

	if (state == 1) {
		background(139, 69, 19)
		strawberry.move()
		strawberry.display()
		//using a for loop to create the trunks of my background forest
		for (var x = 0; x < width; x = x + .1 * width) {
			for (var y = 0; y < height; y = y + .1 * width) {
				fill('brown');
				rect(x, y, .025 * width, .05 * width);
			}
		}

		//drawing the leaves
		for (var y = 0; y <= height; y += .1 * width) {
			for (var x = 0; x <= width; x += .1 * width) {
				fill(7, 232, 101);
				triangle((x - .0125 * width), (y + .02 * width), x + .0125 * width, y - .0225 * width, (x + .04 * width), (y + .02 * width));
			}
		}


		//drawing the second set of leaves
		for (var y = 0; y <= height; y += .105 * width) {
			for (var x = 0; x <= width; x += .1 * width) {
				fill(7, 232, 101);
				triangle((x - .0125 * width), (y + .02 * width), x + .0125 * width, y - .0225 * width, (x + .04 * width), (y + .02 * width));
			}
		}
		fill(0)
		textSize(.03 * width);

		text('score: ' + int(score), width * .5, height * .1);
		score += 1 / 60
		//scorelist+= 1/60
		//creates the bannanas upon start
		for (var banana of bananaList) {
			banana.move();
			banana.display();

			strawberry.StrawbsCollision(banana)
		}
		strawberry.display()
	}
	// produces the loss screen
	if (state == 2) {
		background(255)
		text("Game Over Loser. Press the Left arrow to restart", width * .5, height * .5);
		//text(int(scorelist),width/2,height/4)

		//for (let i = 0; i > bananaNum; i++) {
		//	bananaList.pop(new Banana())
		//	}
	}


	// game moves to state 2 which is the game over screen if there is contact between the strawberry and banana

	if (billy.x <= strawberry.x + .06 * width && billy.x >= strawberry.x - .06 * width &&
		billy.y <= strawberry.y + .04 * width && billy.y >= strawberry.y - .025 * width) {
		state = 2
	}
}

function keyPressed() {
	let bananaNum = random(4, 5);
	// if(Banana.x>width){
	// 	bananaNum+1
	// }
	//this has space bar start the game and pause the game
	if (key == ' ') {
		state = 1 - state;

	}
	// if (keyCode === LEFT_ARROW){
	// 	print("current state: " + state);
	// }
	// setting the reset conditions

	if (keyCode === LEFT_ARROW && state == 2) {
		state = 1
		score = 0
		strawberry.x = 100;
		strawberry.y = 200;
		billy.x = (random(.5 * width, .95 * width));
		billy.y = 300
		bananaList = [];
		// 	if(Banana.x>width){
		// 	bananaNum+=1
		// };
		for (let i = 0; i < bananaNum; i++) {
			bananaList.push(new Banana())
		}
		//banana.x=random(.5 * height, .95 * height);
		//banana.y=300
	}
}
// this is the screen before the game starts and has the commands for how to start as well as how to move

function startScreen() {
	background(100, 50, 160)
	fill(0);
	stroke(0);
	textSize(20);
	textAlign(CENTER);
	text('Press SPACEBAR to start game and use WASD to move the strawberry through the map. Avoid the Bananas!.', width / 2.3, height / 3, 150, 250);
}
