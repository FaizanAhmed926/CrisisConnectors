//........................................ navbar starts .....................................................
const open = document.querySelector('.hamburger');
const close = document.querySelector('.close');
var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
open.addEventListener('click', () => {
	open.firstElementChild.style.display = "none";
	if (tl.reversed()) {
		tl.play();
	} else {
		tl.to("#hamburger-navbar", {
			duration: 1,
			delay: 0.5,
			x: 600,
			opacity: 1,
			scale: 1
		})
		tl.to('nav', { right: 0 })
			.to('nav', { height: '100vh' }, '-=.1')
			.to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
			.to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
			.to('nav h2', { opacity: 1 }, '-=1');
	}
});

close.addEventListener('click', () => {
	tl.reverse();
	open.firstElementChild.style.display = "block";
});
// .................................................navbar ends...............................................