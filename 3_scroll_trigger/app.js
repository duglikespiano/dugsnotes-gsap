document.addEventListener('DOMContentLoaded', () => {
	gsap.registerPlugin(ScrollTrigger);

	const navySquare = document.querySelector('.navy');
	const redSquare = document.querySelector('.red');
	const peachpuffSection = document.querySelector('.peachpuff');
	const burlywoodGuage = document.querySelector('.burlywood');

	gsap.to(navySquare, {
		scrollTrigger: {
			trigger: navySquare,
			start: 'top top',
			end: 'bottom top',
			scrub: true,
			markers: true,
		},
		duration: 2,
		x: 500,
	});
	gsap.to(redSquare, {
		scrollTrigger: {
			trigger: redSquare,
			start: 'top 70%',
			end: 'bottom center',
			toggleActions: 'restart pause reverse reset',
			// onEnter onLeave onEnterBack onLeaveBack
		},
		duration: 2,
		x: 500,
		rotation: 360,
	});
	gsap.to(redSquare, {
		scrollTrigger: {
			trigger: redSquare,
			start: 'top 70%',
			end: 'bottom center',
			scrub: true,
		},
		duration: 2,
		x: 500,
		rotation: 360,
	});
	gsap.to(burlywoodGuage, {
		scrollTrigger: {
			trigger: peachpuffSection,
			scrub: true,
			markers: true,
			pin: true,
		},
		width: '100%',
	});
});
