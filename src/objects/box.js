class Box extends GameObject {
	constructor(x, y, vx, vy) {
		super(x, y, vx, vy);

		// Set default width and height
		this.width = 50;
		this.height = 50;

		this.color = 'blue';
	}
	update(secondsPassed) {
		// Move with set velocity
		this.x += this.vx * secondsPassed;
		this.y += this.vy * secondsPassed;
	}
	get pos() {
		return [ this.x, this.y ];
	}
	get center() {
		return [ this.x + this.width / 2, this.y + this.height / 2 ];
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
