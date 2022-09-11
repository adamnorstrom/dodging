//this is the class for the strawberry that the player moves around the screen
class Strawberry {
	constructor() {
		this.x = 100;
		this.y = 200;
		this.radius = .01 * width
		this.right = false
		this.left = false
		this.up = false
		this.down = false




	}
	//this function creates the collision detction between the strawberry and the Bananas
	StrawbsCollision(Banana) {
		if (Banana.x <= this.x + .04 * width && Banana.x >= strawberry.x - .08 * width && Banana.y <= strawberry.y + .03 * width && Banana.y >= strawberry.y - .035 * width) {
			state = 2
		}
	}
	display() {

		//background(255)
		stroke(0, 300, 0)
		fill(0, 255, 0)
		//making the strawberry
		ellipse(this.x, this.y, .3 * this.radius, .9 * this.radius)
		//gives the strawbs its color
		fill(500, 0, 40)
		// the majority of the strawberry
		arc(this.x, this.y, 8 * this.radius, 10 * this.radius, 0, PI, OPEN)
		// the top of the strawberry
		arc(this.x, this.y, 8 * this.radius, 3.5 * this.radius, -PI, 0, CHORD)

	}

	move() {
		// moves the strawberry object using the keys WASD
		//key W
		if (keyIsDown(87)) {
			this.up = true;

		} else this.up = false
		//key d
		if (keyIsDown(68)) {
			this.right = true
		} else this.right = false
		//  key a
		if (keyIsDown(65)) {
			this.left = true
		} else this.left = false
		//key s
		if (keyIsDown(83)) {
			this.down = true
		} else this.down = false
		if (this.right) {
			this.x += 12;
		}
		//movement speed for going left
		if (this.left) {
			this.x -= 12;
		}
		if (this.up) {
			this.y -= 10;
		}
		if (this.down) {
			this.y += 10;
		}
		//edge protection for the right side
		if (this.x > width) {
			this.x = width
		}
		//edge protection for the left side
		if (this.x < 0) {
			this.x = 0
		}
		//screen wrap for when going past the bottom of the screen
		if (this.y > height) {
			this.y = 0
		}
		//screen wrap for when the going past the top of the screen
		if (this.y < 0) {
			this.y = height
		}
	}
}