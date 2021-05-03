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
	get center() {
		return [ this.x + this.width / 2, this.y + this.height / 2 ];
	}
	draw() {
		ctx.fillStyle = this.color;
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
