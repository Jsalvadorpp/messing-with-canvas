/* init variables */
gameObjects = [
	new Box(250, 50, 0, 50),
	new Box(250, 300, 0, -50),
	new Box(150, 0, 50, 50),
	new Box(250, 150, 50, 50),
	new Box(350, 75, -50, 50),
	new Box(300, 300, 50, -50)
];

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
