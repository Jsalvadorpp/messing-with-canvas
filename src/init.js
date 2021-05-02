//setup canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

// Start the first frame request
window.requestAnimationFrame(gameLoop);

//global variables
let secondsPassed;
let oldTimeStamp;
let fps;

function gameLoop(timeStamp) {
	clearScreen();
	//game's logic in main function
	main();

	//calculate Fps
	calculateFPS(timeStamp);

	// Keep requesting new frames
	window.requestAnimationFrame(gameLoop);
}

function calculateFPS(timeStamp) {
	// Calculate the number of seconds passed since the last frame
	secondsPassed = (timeStamp - oldTimeStamp) / 1000;
	oldTimeStamp = timeStamp;

	// Calculate fps
	fps = Math.round(1 / secondsPassed);

	// Draw number to the screen
	ctx.font = '25px Arial';
	ctx.fillStyle = 'white';
	ctx.fillText('FPS: ' + fps, 10, 30);
}

function clearScreen() {
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}
