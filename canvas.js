//setup canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
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

//function for event listeners
const addBoxOnClick = (e) => {
	let size = 25;
	let box = new Box(e.x - size / 2, e.y - size / 2, size, size, '#a3bfd1');
	box.draw();
};

//event listeners
//canvas.addEventListener('click', addBoxOnClick);

function render() {}
