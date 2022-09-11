//class of bananas that will need to be avoided by the player
class Banana {



	constructor() {
		this.img = loadImage('clean banana.png');

		this.x = random(.5 * width, .95 * width);
		this.y = random(.5 * height, .95 * height);
		this.radius = 6
		this.right = false
		this.left = false
		this.up = false
		this.down = false

	}

	display() {
		//changing the size of the banana image
		this.img.resize(.10 * width, .1 * length);
		//changes the mode in which coordinates place images
		imageMode(CENTER)

		image(this.img, this.x, this.y)



	}
	move() {
		//if (this.x <= strawberry.x + .08 * width && this.x >= strawberry.x - .08 * width && this.y <= strawberry.y + .05 * width && this.y >= strawberry.y - .035 * width) {
		//text("hello", 10, 10, 70, 80);

		//}
		//when the banana goes to the left side of the screen it will wrap back in a random spot on the right most tenth of the screen
		if (this.x < 0) {
			this.x = random(.9 * width, width);
		}
		//bananas will loop back to the bottom when going past the top of the screen and vice verse
		if (this.y > height) {
			this.y = 0;
		}
		if (this.y < 0) {
			this.y = height;
		}
		//creating random movement speeds for the bananas that will still move them left toward the player's(the strawberry) starting spot
		this.x -= random(0, 10)
		this.y += random(-22, 20)
	}






}