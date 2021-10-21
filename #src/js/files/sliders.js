
if (document.querySelector('.popular__slider')) {
	new Swiper('.popular__slider', {
		/* autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		}, */
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 2,
			},
			980: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
			1740: {
				slidesPerView: 5,
			},
		},
		speed: 800,
		observer: true,
		observeParents: true,
		slidesPerView: 5,
		loop: true,
		navigation: {
			nextEl: ".popular__nav-next_1",
			prevEl: ".popular__nav-prev_1",
		},
	});
}

if (document.querySelector('.popular__slider2')) {
	new Swiper('.popular__slider2', {
		/* autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		}, */
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 2,
			},
			980: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
			1740: {
				slidesPerView: 5,
			},
		},
		speed: 800,
		observer: true,
		observeParents: true,
		slidesPerView: 5,
		loop: true,
		navigation: {
			nextEl: ".popular__nav-next_2",
			prevEl: ".popular__nav-prev_2",
		},
	});
}

if (document.querySelector('.index-works__slider')) {
	new Swiper('.index-works__slider', {
		/* autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		}, */
		breakpoints: {
			320: {
				slidesPerView: 1,
			},

			700: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 3,
			},
		},
		speed: 800,
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		navigation: {
			prevEl: ".index-works__nav-prev",
			nextEl: ".index-works__nav-next",
		},
	});
}