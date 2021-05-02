//setup canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

// Start the first frame request
window.requestAnimationFrame(gameLoop);

function gameLoop(timeStamp) {
	clearScreen();
	//game's logic in main function
	main();

	// Keep requesting new frames
	window.requestAnimationFrame(gameLoop);
}

function clearScreen() {
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}
