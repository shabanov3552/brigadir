//#region Переключатель отображения в каталоге
let sort__layout_btns = document.querySelectorAll(".sort__layout-btn");


for (let index = 0; index < sort__layout_btns.length; index++) {
	let catalog__content = document.querySelector(".catalog__content");
	if (catalog__content === null) {
		continue;
	}
	let row = document.querySelector('.layout-row');
	let col = document.querySelector('.layout-col ');
	let sort__layout_btn = sort__layout_btns[index];
	if (localStorage.getItem('catalog_layout') == 'row') {
		catalog__content.classList.add('catalog__content_row');
		catalog__content.classList.remove('catalog__content_col');
		row.classList.add('_active');
		col.classList.remove('_active');
	} else {
		catalog__content.classList.add('catalog__content_col');
		catalog__content.classList.remove('catalog__content_row');
		col.classList.add('_active');
		row.classList.remove('_active');
	}
	sort__layout_btn.addEventListener("click", function (e) {
		if (col.classList.contains('_active')) {
			catalog__content.classList.add('catalog__content_row');
			catalog__content.classList.remove('catalog__content_col');
			localStorage.setItem('catalog_layout', 'row')
		}
		if (row.classList.contains('_active')) {
			catalog__content.classList.remove('catalog__content_row');
			catalog__content.classList.add('catalog__content_col');
			localStorage.setItem('catalog_layout', 'col')
		}
		for (let index = 0; index < sort__layout_btns.length; index++) {
			let sort__layout_btn = sort__layout_btns[index];
			sort__layout_btn.classList.remove('_active');
		}
		sort__layout_btn.classList.add('_active');
	});
};

//#endregion

//#region автовысота для textarea

document.addEventListener("click", function (e) {
	const el = e.target;
	if (el.closest('textarea')) {
		el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
		el.classList.add('auto');
		el.addEventListener('input', e => {
			el.style.height = 'auto';
			el.style.height = (el.scrollHeight) + 10 + 'px';
		});
	}
});

//#endregion

//#region Кнопка вверх и лого


/* window.addEventListener('scroll', buttonToTop);
function buttonToTop(e) {
	let scr_val = window.pageYOffset;
	const btnTop = document.querySelector('.top-button');
	const btnLogo = document.querySelector('.catalog-btn__logo');
	if (scr_val > 1500) {
		btnTop.classList.add('_active');
		btnLogo.classList.add('_active');
	} else {
		btnTop.classList.remove('_active');
		btnLogo.classList.remove('_active');
	}
	btnTop.addEventListener("click", function (e) {
		e.preventDefault()
		window.scrollTo(0, 0);
	});
}; */

//#endregion

//#region nice-select init

$(document).ready(function () {
	$('select').niceSelect();
});

//#endregion