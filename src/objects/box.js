class Box extends GameObject {
	constructor(x, y, vx, vy) {
		super(x, y, vx, vy);

		// Set default width and height
		this.width = 50;
		this.height = 50;
	}
	update(secondsPassed) {
		// Move with set velocity
		this.x += this.vx * secondsPassed;
		this.y += this.vy * secondsPassed;
	}
	get center() {
		return [ this.x + this.width / 2, this.y + this.height / 2 ];
	}
	draw() {
		ctx.fillStyle = this.isColliding ? this.collisionColor : this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);

		//display direction of the object
		if (this.showDirection) {
			ctx.beginPath();
			ctx.strokeStyle = 'white';
			ctx.lineWidth = 2;
			ctx.moveTo(this.center[0], this.center[1]);
			ctx.lineTo(this.center[0] + 35 * this.dir[0], this.center[1] + 35 * this.dir[1]);
			ctx.stroke();
		}
	}
}

function boxIntersect(box1, box2) {
	//check if boxes are not colliding
	if (box2.x > box1.x + box1.width) return false;
	if (box1.x > box2.x + box2.width) return false;
	if (box2.y > box1.y + box1.height) return false;
	if (box1.y > box2.y + box2.height) return false;

	return true;
}
