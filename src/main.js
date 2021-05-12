/* init variables */
gameObjects = [];
const gravity = 20;

//generate random Boxes
/* for (let i = 0; i <= 50; i++) {
	let initBox = randomPosAndVelocity();
	gameObjects.push(new Box(initBox.x, initBox.y, initBox.vx, initBox.vy));
} */

//generate random Circles
for (let i = 0; i <= 50; i++) {
	let initBox = randomPosAndVelocity();
	gameObjects.push(new Circle(initBox.x, initBox.y, initBox.vx, initBox.vy));
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

			// Compare object1 with object2 , both objects are boxes
			/* 	if (boxIntersect(obj1, obj2)) {
				obj1.isColliding = true;
				obj2.isColliding = true;
			} */

			// Compare object1 with object2 , both objects are circles
			if (circleIntersect(obj1, obj2)) {
				obj1.isColliding = true;
				obj2.isColliding = true;
				reactToCollision(obj1, obj2);
			}
		}
	}

	return gameEntities;
}

function reactToCollision(obj1, obj2) {
	let vCollision = { x: obj2.x - obj1.x, y: obj2.y - obj1.y };
	let distance = Math.sqrt((obj2.x - obj1.x) * (obj2.x - obj1.x) + (obj2.y - obj1.y) * (obj2.y - obj1.y));

	let vCollisionNorm = { x: vCollision.x / distance, y: vCollision.y / distance }; //direction

	let vRelativeVelocity = { x: obj1.vx - obj2.vx, y: obj1.vy - obj2.vy };
	let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;

	if (speed < 0) {
		return;
	}

	obj1.vx -= speed * vCollisionNorm.x;
	obj1.vy -= speed * vCollisionNorm.y;
	obj2.vx += speed * vCollisionNorm.x;
	obj2.vy += speed * vCollisionNorm.y;
}

function randomPosAndVelocity() {
	let speed = 60;

	let x = Math.floor(Math.random() * window.innerWidth);
	let y = Math.floor(Math.random() * window.innerHeight);
	let vx = Math.random() < 0.5 ? -speed : speed;
	let vy = Math.random() < 0.5 ? -speed : speed;

	return { x, y, vx, vy };
}
