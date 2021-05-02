/* init variables */
gameObjects = [];

for (let i = 0; i <= 10; i++) {
	let initBox = randomPosAndVelocity();
	gameObjects.push(new Box(initBox.x, initBox.y, initBox.vx, initBox.vy));
}

/* game's logic here */
function main(secondsPassed) {
	// Do the same to draw
	for (let i = 0; i < gameObjects.length; i++) {
		gameObjects[i].draw();
	}

	// Loop over all game objects
	for (let i = 0; i < gameObjects.length; i++) {
		gameObjects[i].update(secondsPassed);
	}
}

function randomPosAndVelocity() {
	let speed = 60;

	let x = Math.floor(Math.random() * window.innerWidth);
	let y = Math.floor(Math.random() * window.innerHeight);
	let vx = Math.random() < 0.5 ? -speed : speed;
	let vy = Math.random() < 0.5 ? -speed : speed;

	return { x, y, vx, vy };
}
