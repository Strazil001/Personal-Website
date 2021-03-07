gsap.registerPlugin(ScrollTrigger);

const topBtn = document.querySelector('#topBtn');

const tl = gsap.timeline({
	defaults: {
		ease: 'power1.out'
	}
});

tl.from('#intro-head-title', {
	opacity: 0,
	duration: 4,
})
.from('#intro-middle-title', {
	opacity: 0,
	duration: 2
}, '-=2.2')
.to('.intro', {
	opacity: 0,
	duration: 1,
	y: -1000
}, '-=1')
.from('#my-name', {
	opacity: 0,
	duration: 1,
	x: -150
}, '-=1')
.from('#function-title', {
	opacity: 0,
	duration: 1,
	x: 150 
}, '-=1')
.from('#my-profile-image', {
	opacity: 0,
	duration: 1.5,
	y: -450,
}, '-=2')
.from('#quote-john-woods', {
	opacity: 0,
	duration: 1,
	y: 150,
}, '+=0.5')

function init(){
	gsap.from('.h2-hard-skills', {
		duration: 1,
		opacity: 0,
		x: -450,
		scrollTrigger: {
			trigger: '.h2-hard-skills',
			start: 'top bottom-=200',
			end: 'top end+=300',
			scrub: true,
			markers: true
		}
	});
	gsap.from('.hard-skills-cards', {
		duration: 1,
		opacity: 0,
		x: -450,
		rotation: 360,
		scrollTrigger: {
			trigger: '.hard-skills-cards',
			start: 'top bottom-=200',
			end: 'top end+=300',
			scrub: true,
			markers: true
		}
	});
	gsap.from('#h2-projects', {
		duration: 1,
		opacity: 0,
		x: -450,
		scrollTrigger: {
			trigger: '#h2-projects',
			start: 'top bottom-=200',
			end: 'top end+=300',
			scrub: true,
			markers: true
		}
	});
	gsap.from('.projects', {
		duration: 1,
		opacity: 0,
		x: -450,
		scrollTrigger: {
			trigger: '.projects',
			start: 'top bottom-=200',
			end: 'top end+=300',
			scrub: true,
			markers: true
		}
	});
	gsap.from('.form-name', {
		duration: 1,
		opacity: 0,
		x: 250,
		scrollTrigger: {
			trigger: '.form-name',
			start: 'top bottom',
			end: 'top bottom-=400',
			scrub: true,
			markers: true
		}
	});
	gsap.from('.form-email', {
		duration: 1,
		opacity: 0,
		x: 250,
		scrollTrigger: {
			trigger: '.form-email',
			start: 'top bottom',
			end: 'top bottom-=400',
			scrub: true,
			markers: true
		}
	});
	gsap.from('.form-comments', {
		duration: 1,
		opacity: 0,
		x: 250,
		scrollTrigger: {
			trigger: '.form-comments',
			start: 'top bottom',
			end: 'top bottom-=400',
			scrub: true,
			markers: true
		}
	});
	gsap.from('.form-submit', {
		duration: 1,
		opacity: 0,
		x: 250,
		scrollTrigger: {
			trigger: '.form-submit',
			start: 'top bottom',
			end: 'top bottom-=200',
			scrub: true,
			markers: true
		}
	});
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		topBtn.style.display = 'block';
	}
	else {
		topBtn.style.display = 'none';
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

window.addEventListener('load', function(){
	init();
});