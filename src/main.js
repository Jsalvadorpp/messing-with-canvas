const addBoxOnClick = (e) => {
	let size = 25;
	let box = new Box(e.x - size / 2, e.y - size / 2, size, size, '#a3bfd1');
	box.draw();
};

//event listeners
//canvas.addEventListener('click', addBoxOnClick);
let box = new Box(0, 0, 25, 25, '#a3bfd1');

/* game's logic here */
function main() {
	box.draw();

	box.x += 1;
}
