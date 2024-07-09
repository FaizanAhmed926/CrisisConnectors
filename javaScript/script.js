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


// ..................................................page1 starts.............................................
var t2 = gsap.timeline({ defaults: { duration: 2, ease: 'expo.inOut' } });
t2.from(".page1-first h1,.page1-first h3", {
	x: -500,
	delay: 0.5,
	stagger: 1,
	opacity: 0,
	scale: 0,
})
// ................................................page1 eends...............................................

// ...............................................page2 starts...............................................
gsap.from(".page2-first h1,.page2-first h3", {
	x: 100,
	duration: 1,
	delay: 0.5,
	stagger: 1,
	opacity: 0,
	scale: 0,
	yoyo:true,
	scrollTrigger: {
		trigger: ".page2-first h1,.page2-first h3",
		scroller: "body",
		scrub:3,
		end:"top 37%"
	}
})
gsap.from(".page2-second",{
	borderRadius:100,
	delay: 0.5,
	x:-500,
	yoyo:true,
	// scale:0,
	scrollTrigger: {
		trigger: ".page2-second",
		scroller: "body",
		scrub:3,
		end:"top 42%"
	}

})
// ...................................................page2 ends.................................................

// ...................................................page3 starts...............................................
gsap.from(".page3-second h1,.page3-second h3", {
	x: -500,
	duration: 1,
	delay: 0.5,
	stagger: 1,
	opacity: 0,
	scale: 0,
	yoyo:true,
	scrollTrigger: {
		trigger: ".page3-second h1,.page3-second h3",
		scroller: "body",
		scrub:3,
		end:"top 65%"
	}
})
// ....................................................page3 ends...................................................

// ...............................................page4 starts...............................................
gsap.from(".page4-first h1,.page4-first h3", {
	x: 100,
	duration: 1,
	delay: 0.5,
	stagger: 1,
	opacity: 0,
	scale: 0,
	yoyo:true,
	scrollTrigger: {
		trigger: ".page4-first h1,.page4-first h3",
		scroller: "body",
		scrub:3,
		end:"top 37%"
	}
})
gsap.from(".page4-second",{
	borderRadius:100,
	delay: 0.5,
	x:-500,
	yoyo:true,
	scrollTrigger: {
		trigger: ".page4-second",
		scroller: "body",
		scrub:3,
		end:"top 55%"
	}

})
// ...................................................page4 ends.................................................


// ...................................................page5 starts...............................................
gsap.from(".page5-second h1,.page5-second h3", {
	x: -500,
	duration: 1,
	delay: 0.5,
	stagger: 1,
	opacity: 0,
	scale: 0,
	yoyo:true,
	scrollTrigger: {
		trigger: ".page5-second h1,.page5-second h3",
		scroller: "body",
		scrub:3,
		end:"top 65%"
	}
})
// ..................................................page5 ends...................................................