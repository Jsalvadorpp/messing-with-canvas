class Circle extends GameObject {
	constructor(x, y, vx, vy) {
		super(x, y, vx, vy);

		this.color = 'blue';
		this.collisionColor = 'red';

		//default radius
		this.radius = 25;
	}
	update(secondsPassed) {
		// Move with set velocity
		this.x += this.vx * secondsPassed;
		this.y += this.vy * secondsPassed;
	}
	draw() {
		ctx.fillStyle = this.isColliding ? this.collisionColor : this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.fill();

		//display direction of the object
		if (this.showDirection) {
			ctx.beginPath();
			ctx.strokeStyle = 'white';
			ctx.lineWidth = 2;
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(this.x + 25 * this.dir[0], this.y + 25 * this.dir[1]);
			ctx.stroke();
		}
	}
}
