class GameObject {
	constructor(x, y, vx, vy) {
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;

		this.isColliding = false;
		this.showDirection = true;
	}
}
