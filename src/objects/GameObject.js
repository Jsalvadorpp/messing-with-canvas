class GameObject {
	constructor(x, y, vx, vy) {
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;

		this.color = 'blue';
		this.collisionColor = 'red';

		this.isColliding = false;
		this.showDirection = true;
		this.isAffectedByGravity = true;
	}
	get dir() {
		return [ Math.sign(this.vx), Math.sign(this.vy) ];
	}
	get pos() {
		return [ this.x, this.y ];
	}
}
