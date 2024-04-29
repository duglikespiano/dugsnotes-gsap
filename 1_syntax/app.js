document.addEventListener('DOMContentLoaded', () => {
	//from, to, fromTo
	const greenSquare = document.querySelector('.green.square');
	gsap.to(greenSquare, {
		x: 300,
		rotation: 360,
		opacity: 0.5,
		backgroundColor: 'red',
		duration: 2,
		ease: 'power1.out',
	});
	const orangeSquare = document.querySelector('.orange.square');
	gsap.from(orangeSquare, {
		x: 500,
		opacity: 0,
		scale: 0.5,
		rotation: -90,
		duration: 2,
		ease: 'bounce.out',
	});
	const purpleSquare = document.querySelector('.purple.square');
	gsap.to(purpleSquare, {
		x: 500,
		rotation: 360,
		borderRadius: '50%',
		backgroundColor: 'green',
		duration: 2,
		ease: 'bounce.out',
	});
	const blueSquare = document.querySelector('.blue.square');
	gsap.fromTo(
		blueSquare,
		{
			x: -500,
			opacity: 0,
		},
		{
			x: 500,
			opacity: 1,
			duration: 2,
		}
	);

	//duration, repeat, repeat
	const yellowCircle = document.querySelector('.circle.yellow');
	gsap.to(yellowCircle, {
		x: 500,
		duration: 1,
	});
	const pinkCircle = document.querySelector('.circle.pink');
	gsap.to(pinkCircle, {
		x: 500,
		delay: 1,
		repeat: 3,
		duration: 1,
		yoyo: true,
	});
	const aquaCircle = document.querySelector('.circle.aqua');
	gsap.to(aquaCircle, {
		x: 500,
		delay: 2,
		repeat: -1,
		duration: 1,
	});

	//ease
	const brownCircle = document.querySelector('.circle.brown');
	gsap.to(brownCircle, {
		x: 500,
		repeat: -1,
		duration: 3,
		ease: 'elastic.out',
	});

	//stagger
	gsap.from('.box', {
		y: -50,
		stagger: {
			each: 0.1,
			from: 'edges',
		},
	});
});
