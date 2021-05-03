/* init variables */
gameObjects = [];

//generate randomBoxes
for (let i = 0; i <= 50; i++) {
	let initBox = randomPosAndVelocity();
	gameObjects.push(new Box(initBox.x, initBox.y, initBox.vx, initBox.vy));
}

/* game's logic here */
function main(secondsPassed) {
	//calculate game objects
	gameObjects = detectCollisions(gameObjects);

	// Draw each object
	for (let i = 0; i < gameObjects.length; i++) {
		gameObjects[i].draw();
	}

	// Loop over all game objects
	for (let i = 0; i < gameObjects.length; i++) {
		gameObjects[i].update(secondsPassed);
	}
}

function detectCollisions(gameEntities) {
	let obj1;
	let obj2;

	// Reset collision state of all objects
	for (let i = 0; i < gameEntities.length; i++) {
		gameEntities[i].isColliding = false;
	}

	// Start checking for collisions
	for (let i = 0; i < gameEntities.length; i++) {
		obj1 = gameEntities[i];

		for (let j = i + 1; j < gameEntities.length; j++) {
			obj2 = gameEntities[j];

			// Compare object1 with object2
			if (boxIntersect(obj1, obj2)) {
				obj1.isColliding = true;
				obj2.isColliding = true;
			}
		}
	}

	return gameEntities;
}

function boxIntersect(box1, box2) {
	//check if boxes are not colliding
	if (box2.x > box1.x + box1.width) return false;
	if (box1.x > box2.x + box2.width) return false;
	if (box2.y > box1.y + box1.height) return false;
	if (box1.y > box2.y + box2.height) return false;

	return true;
}

function randomPosAndVelocity() {
	let speed = 60;

	let x = Math.floor(Math.random() * window.innerWidth);
	let y = Math.floor(Math.random() * window.innerHeight);
	let vx = Math.random() < 0.5 ? -speed : speed;
	let vy = Math.random() < 0.5 ? -speed : speed;

	return { x, y, vx, vy };
}
