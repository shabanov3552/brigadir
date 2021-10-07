//#region BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}
function sliders_bild_callback(params) { }
//#endregion



if (document.querySelector('.advantages__slider')) {
	new Swiper('.advantages__slider', {
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		speed: 800,
		thumbs: {
			swiper: {
				el: '.advantages__row',
				slidesPerView: 6,
				simulateTouch: true,
				loop: true,
				breakpoints: {
					320: {
						slidesPerView: 2,
						//spaceBetween: 20,
					},
					940: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1280: {
						slidesPerView: 4,
					},
					1440: {
						slidesPerView: 5,
						loop: true,
					},
					1920: {
						loop: false,
						slidesPerView: 6,
					},
				},
			}
		},
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		simulateTouch: false,
		loop: true,
		parallax: true,
	});
}