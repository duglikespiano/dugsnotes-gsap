document.addEventListener('DOMContentLoaded', () => {
	//timeline
	const greenBox = document.querySelector('.box.green');
	const yellowBox = document.querySelector('.box.yellow');
	const purpleBox = document.querySelector('.box.purple');
	const pinkBox = document.querySelector('.box.pink');
	const aquaBox = document.querySelector('.box.aqua');
	const tl = gsap.timeline();
	tl.to(greenBox, {
		duration: 1,
		y: 100,
	});
	tl.to(yellowBox, {
		duration: 1,
		y: -100,
	});
	tl.to(purpleBox, {
		duration: 1,
		scale: 1.5,
	});
	tl.to(pinkBox, {
		duration: 1,
		rotate: 100,
	});
	tl.to(aquaBox, {
		duration: 1,
		opacity: 0.25,
	});

	//Position Parameter
	const redCircle = document.querySelector('.circle.red');
	const goldCircle = document.querySelector('.circle.gold');
	const blackCircle = document.querySelector('.circle.black');
	const animation = gsap.timeline();
	animation
		.to(redCircle, {
			duration: 1,
			x: 300,
		})
		.to(
			goldCircle,
			{
				duration: 1,
				x: 300,
			},
			'+=1'
		)
		.to(
			blackCircle,
			{
				duration: 1,
				x: 300,
			},
			1
		);

	//Timeline Labels and Control
	const grayBox = document.querySelector('.box.gray');
	const grayBoxTimeline = gsap.timeline();
	grayBoxTimeline
		.to(grayBox, {
			duration: 1,
			x: 300,
		})
		.addLabel('smaller')
		.to(grayBox, {
			duration: 1,
			x: '+=300',
			y: 200,
		})
		.to(grayBox, {
			duration: 1,
			x: 300,
			y: 500,
		})
		.to(grayBox, {
			duration: 1,
			x: 1000,
			y: 0,
		});

	document.querySelector('.play').addEventListener('click', () => {
		grayBoxTimeline.play();
	});
	document.querySelector('.pause').addEventListener('click', () => {
		grayBoxTimeline.pause();
	});
	document.querySelector('.reverse').addEventListener('click', () => {
		grayBoxTimeline.reverse();
	});
	document.querySelector('.restart').addEventListener('click', () => {
		grayBoxTimeline.restart();
	});
	document.querySelector('.play-delay').addEventListener('click', () => {
		grayBoxTimeline.play('smaller');
	});
});
