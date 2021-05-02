class Box {
	constructor(x, y, width, height, color) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
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
