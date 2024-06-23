let canvas = document.getElementById("background");
let context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const SLIME_COLOR = "rgb(0, 255, 0)";
const NUM_SLIMES = 500;

const SLIME_START_HEIGHT = 0.1 * window.innerHeight;
const SLIME_STOP_GROW_HEIGHT = 0.15 * window.innerHeight;

const MAX_STARTING_RADIUS = 5;
const MIN_GROWTH_RATE = 0.005;
const MAX_GROWTH_RATE = 0.1;
const MIN_FALL_SIZE = 10;
const MAX_FALL_SIZE = 30;
const GRAVITY = 0.01;

class Slime {
	constructor() {
		this.Reset();
	}

	Reset() {
		this.x = Math.random() * window.innerWidth;
		this.y = SLIME_START_HEIGHT;
		this.radius = Math.random() * MAX_STARTING_RADIUS;
		this.growthRate = Math.random() * (MAX_GROWTH_RATE - MIN_GROWTH_RATE) + MIN_GROWTH_RATE;
		this.fallSize = Math.random() * (MAX_FALL_SIZE - MIN_FALL_SIZE) + MIN_FALL_SIZE;
		this.fallSpeed = 0;
	}

	ProgressFrame() {
		if (this.radius > this.fallSize) {
			this.fallSpeed += (GRAVITY * this.radius) / MAX_FALL_SIZE;
			this.y += this.fallSpeed;
		}
		if (this.y < SLIME_STOP_GROW_HEIGHT) {
			this.radius += this.growthRate;
		}
		if (this.y > window.innerHeight) {
			this.Reset();
		}
	}

	Draw() {
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		context.fill();
	}
}

let slimes = [];
for (let i = 0; i < NUM_SLIMES; i++) {
	slimes.push(new Slime());
}

function Animate() {
	context.clearRect(0, 0, window.innerWidth, window.innerHeight);
	context.fillStyle = SLIME_COLOR;

	slimes.forEach((slime) => {
		slime.ProgressFrame();
		slime.Draw();
	});

	requestAnimationFrame(Animate);
}

Animate();
