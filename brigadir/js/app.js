//#region IBG
/* function ibg() {
	let ibg = document.querySelectorAll("._ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg(); */
//#endregion

//#region _loaded
window.addEventListener("load", function () {
	if (document.querySelector('.wrapper')) {
		setTimeout(function () {
			document.querySelector('.wrapper').classList.add('_loaded');
		}, 0);
	}
});

let unlock = true;
//#endregion

//#region ActionsOnHash
if (location.hash) {
	const hsh = location.hash.replace('#', '');
	if (document.querySelector('.popup_' + hsh)) {
		popup_open(hsh);
	} else if (document.querySelector('div.' + hsh)) {
		_goto(document.querySelector('.' + hsh), 500, '');
	}
}
//#endregion

//#region Menu_burger
let iconMenu = document.querySelector(".icon-menu");
let menuMobileClose = document.querySelector('.menu-mobile__close');
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu-mobile");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock_add(delay);
			menuBody.classList.add("_active");
		}
	});
	menuMobileClose.addEventListener("click", function (e) {
		menuBody.classList.remove("_active");
		body_lock_remove(delay)
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu-mobile");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//#endregion

//#region BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);
		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");
		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//#endregion

//#region LettersAnimation
let title = document.querySelectorAll('._letter-animation');
if (title) {
	for (let index = 0; index < title.length; index++) {
		let el = title[index];
		let txt = el.innerHTML;
		let txt_words = txt.replace('  ', ' ').split(' ');
		let new_title = '';
		for (let index = 0; index < txt_words.length; index++) {
			let txt_word = txt_words[index];
			let len = txt_word.length;
			new_title = new_title + '<p>';
			for (let index = 0; index < len; index++) {
				let it = txt_word.substr(index, 1);
				if (it == ' ') {
					it = '&nbsp;';
				}
				new_title = new_title + '<span>' + it + '</span>';
			}
			el.innerHTML = new_title;
			new_title = new_title + '&nbsp;</p>';
		}
	}
}
//#endregion

//#region Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		if (tabs_item.closest('.menu-lt__sub-item')) {

			tabs_item.addEventListener("mouseenter", function (e) {
				for (let index = 0; index < tabs_items.length; index++) {
					let tabs_item = tabs_items[index];
					tabs_item.classList.remove('_active');
					tabs_blocks[index].classList.remove('_active');
				}
				tabs_item.classList.add('_active');
				tabs_blocks[index].classList.add('_active');
				e.preventDefault();
			});
		} else {
			tabs_item.addEventListener("click", function (e) {
				for (let index = 0; index < tabs_items.length; index++) {
					let tabs_item = tabs_items[index];
					tabs_item.classList.remove('_active');
					tabs_blocks[index].classList.remove('_active');
				}
				tabs_item.classList.add('_active');
				tabs_blocks[index].classList.add('_active');
				e.preventDefault();
			});
		}

	}
}
//#endregion

//#region SPOLLERS
/*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.
Например: 
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/

const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
	// Получение обычных слойлеров
	const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
		return !item.dataset.spollers.split(",")[0];
	});
	// Инициализация обычных слойлеров
	if (spollersRegular.length > 0) {
		initSpollers(spollersRegular);
	}

	// Получение слойлеров с медиа запросами
	const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
		return item.dataset.spollers.split(",")[0];
	});

	// Инициализация слойлеров с медиа запросами
	if (spollersMedia.length > 0) {
		const breakpointsArray = [];
		spollersMedia.forEach(item => {
			const params = item.dataset.spollers;
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});

		// Получаем уникальные брейкпоинты
		let mediaQueries = breakpointsArray.map(function (item) {
			return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
		});
		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		});

		// Работаем с каждым брейкпоинтом
		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(",");
			const mediaBreakpoint = paramsArray[1];
			const mediaType = paramsArray[2];
			const matchMedia = window.matchMedia(paramsArray[0]);

			// Объекты с нужными условиями
			const spollersArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint && item.type === mediaType) {
					return true;
				}
			});
			// Событие
			matchMedia.addListener(function () {
				initSpollers(spollersArray, matchMedia);
			});
			initSpollers(spollersArray, matchMedia);
		});
	}
	// Инициализация
	function initSpollers(spollersArray, matchMedia = false) {
		spollersArray.forEach(spollersBlock => {
			spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
			if (matchMedia.matches || !matchMedia) {
				spollersBlock.classList.add('_init');
				initSpollerBody(spollersBlock);
				spollersBlock.addEventListener("click", setSpollerAction);
			} else {
				spollersBlock.classList.remove('_init');
				initSpollerBody(spollersBlock, false);
				spollersBlock.removeEventListener("click", setSpollerAction);
			}
		});
	}
	// Работа с контентом
	function initSpollerBody(spollersBlock, hideSpollerBody = true) {
		const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
		if (spollerTitles.length > 0) {
			spollerTitles.forEach(spollerTitle => {
				if (hideSpollerBody) {
					spollerTitle.removeAttribute('tabindex');
					if (!spollerTitle.classList.contains('_active')) {
						spollerTitle.nextElementSibling.hidden = true;
					}
				} else {
					spollerTitle.setAttribute('tabindex', '-1');
					spollerTitle.nextElementSibling.hidden = false;
				}
			});
		}
	}
	function setSpollerAction(e) {
		const el = e.target;
		if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
			const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
			const spollersBlock = spollerTitle.closest('[data-spollers]');
			const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
			if (!spollersBlock.querySelectorAll('._slide').length) {
				if (oneSpoller && !spollerTitle.classList.contains('_active')) {
					hideSpollersBody(spollersBlock);
				}
				spollerTitle.classList.toggle('_active');
				_slideToggle(spollerTitle.nextElementSibling, 500);
			}
			e.preventDefault();
		}
	}
	function hideSpollersBody(spollersBlock) {
		const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
		if (spollerActiveTitle) {
			spollerActiveTitle.classList.remove('_active');
			_slideUp(spollerActiveTitle.nextElementSibling, 500);
		}
	}
}
//#endregion

//#region Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
	gallery_init();
}
function gallery_init() {
	for (let index = 0; index < gallery.length; index++) {
		const el = gallery[index];
		lightGallery(el, {
			counter: false,
			selector: 'a',
			download: false
		});
	}
}
//#endregion

//#region Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
	const el = popup_link[index];
	el.addEventListener('click', function (e) {
		if (el.closest('.menu-mobile')) {
			return
		}
		if (el.classList.contains('menu-lt__category') && el.nextElementSibling.closest('._active')) {
			popup_close()
		}
		if (unlock) {
			let item = el.getAttribute('href').replace('#', '');
			let video = el.getAttribute('data-video');
			popup_open(item, video);
		}
		e.preventDefault();
	})
}
for (let index = 0; index < popups.length; index++) {
	const popup = popups[index];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__body')) {
			popup_close(e.target.closest('.popup'));
		}
	});
}
function popup_open(item, video = '') {
	let activePopup = document.querySelectorAll('.popup._active');
	if (activePopup.length > 0) {
		popup_close('', false);
	}
	let curent_popup = document.querySelector('.popup_' + item);
	if (curent_popup && unlock) {
		if (video != '' && video != null) {
			let popup_video = document.querySelector('.popup_video');
			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector('.menu-mobile._active')) {
			body_lock_add(500);
		}
		if (curent_popup.closest('.menu-lt__item')) {
			let header = document.querySelector(".header");
			let page = document.querySelector(".page");
			header.classList.add("open-menu-lt");
			page.classList.add("open-menu-lt");
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_close(item, bodyUnlock = true) {
	let header = document.querySelector(".header");
	let page = document.querySelector(".page");
	header.classList.remove("open-menu-lt");
	page.classList.remove("open-menu-lt");
	if (unlock) {
		if (!item) {
			for (let index = 0; index < popups.length; index++) {
				const popup = popups[index];
				let video = popup.querySelector('.popup__video');
				if (video) {
					video.innerHTML = '';
				}
				popup.classList.remove('_active');

			}
		} else {
			let video = item.querySelector('.popup__video');
			if (video) {
				video.innerHTML = '';
			}
			item.classList.remove('_active');
		}
		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState('', '', window.location.href.split('#')[0]);
	}
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
	for (let index = 0; index < popup_close_icon.length; index++) {
		const el = popup_close_icon[index];
		el.addEventListener('click', function () {
			popup_close(el.closest('.popup'));
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.code === 'Escape') {
		popup_close();
	}
});
//#endregion

//#region SlideToggle
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}
//#endregion

//#region IsHidden
function _is_hidden(el) {
	return (el.offsetParent === null)
}
//#endregion

//#region RATING
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
	initRatings();
}
// Основная функция
function initRatings() {
	let ratingActive, ratingValue;
	// "Бегаем" по всем рейтингам на странице
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}

	// Инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();

		if (rating.classList.contains('rating_set')) {
			setRating(rating);
		}
	}

	// Инициализайция переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}
	// Изменяем ширину активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
	// Возможность указать оценку 
	function setRating(rating) {
		const ratingItems = rating.querySelectorAll('.rating__item');
		for (let index = 0; index < ratingItems.length; index++) {
			const ratingItem = ratingItems[index];
			ratingItem.addEventListener("mouseenter", function (e) {
				// Обновление переменных
				initRatingVars(rating);
				// Обновление активных звезд
				setRatingActiveWidth(ratingItem.value);
			});
			ratingItem.addEventListener("mouseleave", function (e) {
				// Обновление активных звезд
				setRatingActiveWidth();
			});
			ratingItem.addEventListener("click", function (e) {
				// Обновление переменных
				initRatingVars(rating);

				if (rating.dataset.ajax) {
					// "Отправить" на сервер
					setRatingValue(ratingItem.value, rating);
				} else {
					// Отобразить указанную оцнку
					ratingValue.innerHTML = index + 1;
					setRatingActiveWidth();
				}
			});
		}
	}

	async function setRatingValue(value, rating) {
		if (!rating.classList.contains('rating_sending')) {
			rating.classList.add('rating_sending');

			// Отправика данных (value) на сервер
			let response = await fetch('rating.json', {
				method: 'GET',

				//body: JSON.stringify({
				//	userRating: value
				//}),
				//headers: {
				//	'content-type': 'application/json'
				//}

			});
			if (response.ok) {
				const result = await response.json();

				// Получаем новый рейтинг
				const newRating = result.newRating;

				// Вывод нового среднего результата
				ratingValue.innerHTML = newRating;

				// Обновление активных звезд
				setRatingActiveWidth();

				rating.classList.remove('rating_sending');
			} else {
				alert("Ошибка");

				rating.classList.remove('rating_sending');
			}
		}
	}
}
//#endregion

// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle




function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "max") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
/* Javscript Document
Dev By BWD [andrikanich@gmail.com]
console.info();
*/

//PLAYER Жекин код
/*var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
//========
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '310',
		width: '557',
		videoId: 'x4krSLXzxo8',
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}
function onPlayerReady(event) {
	//player.playVideo();
}
var done = false;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		$('.parnners-video').addClass('active');
	} else {
		$('.parnners-video').removeClass('active');
	}
}
function stopVideo() {
	player.stopVideo();
}

//================================================================

$(document).ready(function () {
	var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
	if (isMobile.any()) {
		$('body').addClass('touch');
		$('.mobilemenu__icon').click(function (event) {
			$('.menu').toggleClass('active');
			$('body').toggleClass('menu');
		});
		$('.header__menuicon').click(function (event) {
			$('.menu').toggleClass('active');
			$('body').toggleClass('menu');
		});
		$('.fullmenu__close').click(function (event) {
			$(this).toggleClass('active');
			$('.fullmenu').removeClass('active');
			$('.menu__link').removeClass('active');
		});
		$('ul.catalog-menu-catalog.left>li>a').click(function () {
			$(this).parent().toggleClass('hover');
			return false;
		});
		$('.catalog-menu__icon').click(function (event) {
			$(this).toggleClass('active');
			$('.catalog-menu-catalog.right').toggleClass('active');
		});
		$('.catalog-filter-price').click(function () {
			$(this).addClass('hover');
		});
		$(document).on('click touchstart', function (e) {
			if (!$(e.target).is(".catalog-filter-price *") && !$(e.target).is(".catalog-filter-price")) {
				$('.catalog-filter-price').removeClass('hover');
			};
		});
	} else {
		$('ul.catalog-menu-catalog li').hover(function () {
			$(this).toggleClass('hover');
		}, function () {
			$(this).toggleClass('hover');
		});
		$('.menu').hover(function () {
			$(this).toggleClass('hover');
		}, function () {
			$(this).toggleClass('hover');
		});
		$('.menu__icon').hover(function () {
			$(this).toggleClass('hover');
		}, function () {
			$(this).toggleClass('hover');
		});
		$('.menu-list li').hover(function () {
			$(this).toggleClass('hover');
		}, function () {
			$(this).toggleClass('hover');
		});
		$('.catalog-filter-price').hover(function () {
			$(this).toggleClass('hover');
		}, function () {
			$(this).toggleClass('hover');
		});
	}
	$('.openmenu').click(function (event) {
		if ($(this).hasClass('active')) {
			$('.fullmenu').removeClass('active');
			$('.menu').removeClass('active');
			$('.fullmenu__close').removeClass('active');
		} else {
			$('.fullmenu').removeClass('active');
			$('.openmenu').removeClass('active');
			$('.menu').addClass('active');
			if ($(this).hasClass('menu__icon')) {
				$('.fullmenu_all').addClass('active');
			}
			if ($(this).hasClass('menu__link_1')) {
				$('.fullmenu_products').toggleClass('active');
			}
			if ($(this).hasClass('menu__link_2')) {
				$('.fullmenu_pholosofy').toggleClass('active');
			}
			$('.fullmenu__close').addClass('active');
		}
		$(this).toggleClass('active');
		return false;
	});
	$(document).on('click touchstart', function (e) {
		if (!$(e.target).is(".fullmenu *") && !$(e.target).is(".menu *") && !$(e.target).is(".fullmenu") && !$(e.target).is(".menu")) {
			$('.menu').removeClass('active hover');
			$('.fullmenu').removeClass('active');
			$('.openmenu').removeClass('active');
		};
	});
	if ($('.parnners-video').length > 0) { };
	$('.parnners-video-content').click(function (event) {
		player.playVideo();
	});

	$('.tabs').tabs();

	$('.fullmenu-body-block__label').click(function (event) {
		$(this).next().slideToggle(300);
	});

	$('.catalog-filter__item').click(function (event) {
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$(this).find('input').val(1);
		} else {
			$(this).find('input').val(0);
		}
	});
	$('.catalog-filter-ingridients__action').click(function (event) {
		$(this).toggleClass('active');
		$('.catalog-filter-ingridients').slideToggle(300);
	});
	$('.check').click(function (event) {
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$(this).find('input').val(1);
		} else {
			$(this).find('input').val(0);
		}
	});

	if ($('.product-images-slider').length > 0) {
		$('.product-images-slider').slick({
			//autoplay: true,
			dots: false,
			arrows: true,
			vertical: true,
			verticalSwiping: true,
			draggable: false,
			slidesToShow: 3,
			autoplaySpeed: 3000
		});
		$('.product-images-slider').on('afterChange', function (event, slick, currentSlide) {
			$('.product-images-item img').attr('src', $('.product-images-slide.slick-current').find('img').data('big'));
		});
		$('.product-images-slide').click(function (event) {
			$('.product-images-slider').slick('slickGoTo', Math.abs($(this).data('slick-index')));
			$('.product-images-item img').attr('src', $(this).find('img').data('big'));
		});
	}

	if ($('.product-related-slider').length > 0) {
		$('.product-related-slider').slick({
			//autoplay: true,
			dots: false,
			arrows: true,
			slidesToShow: 3,
			autoplaySpeed: 3000,
			nextArrow: '<button type="button" class="slick-next"></button>',
			prevArrow: '<button type="button" class="slick-prev"></button>',
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
			}]
		});
	}

	$('.rating.edit .star').hover(function () {
		$(this).parent().find('.star').removeClass('active');
		var ind = $(this).index();
		var $this = $(this);
		for (var i = 0; i <= ind; i++) {
			$(this).parent().find('.star').eq(i).addClass('active');
		};
	}, function () {
		$(this).parent().find('.star').removeClass('active');
		var ind = $(this).parent().find('input').val() - 1;
		for (var i = 0; i <= ind; i++) {
			$(this).parent().find('.star').eq(i).addClass('active');
		};
	});
	$('.rating.edit .star').click(function (event) {
		var re = $(this).parent().find('.star.active').length;
		$(this).parent().find('input').val(re);
	});
	$.each($('.rating'), function (index, val) {
		var ind = $(this).find('input').val() - 1;
		for (var i = 0; i <= ind; i++) {
			$(this).parent().find('.star').eq(i).addClass('active');
		}
	});

	$('.catalog-filter__clinbtn').click(function (event) {
		$('.catalog-filter__item').removeClass('active');
		$('.catalog-filter__item input').val('0');
		$('.catalog-filter-ingridients__item').removeClass('active');
		$('.catalog-filter-ingridients__item input').val('0');
		$('#rangefrom').val($("#range").slider("option", "min"));
		$('#rangeto').val($("#range").slider("option", "max"));
		$("#range").slider("values", 0, $("#range").slider("option", "min"));
		$("#range").slider("values", 1, $("#range").slider("option", "max"));
	});

	if ($('.select').length > 0) {
		//$(".select-options-inside").niceScroll();
		$('.select').click(function (event) {
			if (!$(this).hasClass('disabled')) {
				$('.select').not(this).removeClass('active').find('.select-options').slideUp(50);
				$(this).toggleClass('active');
				$(this).find('.select-options').slideToggle(50, function () {
					//	$(".select-options-inside").getNiceScroll().resize();
				});
			}
		});
		$('.select-options__value').click(function () {
			$(this).parents('.select').find('.select-title__value').html($(this).html());
			if ($.trim($(this).data('value')) != '') {
				$(this).parents('.select').find('input').val($(this).data('value'));
			} else {
				$(this).parents('.select').find('input').val($(this).html());
			}
		});
		$(document).click(function (e) {
			if (!$(e.target).is(".select *")) {
				$('.select').removeClass('active');
				$('.select-options').slideUp(50, function () {
					//$(".select-options-inside").getNiceScroll().resize();
				});
			};
		});
	}

	$('.popup__link').click(function (event) {
		var pad = 0;
		if ($(window).outerWidth() > 929) { pad = 150; }
		$('.popup').css({ top: $(window).scrollTop() + pad });
		$('.popup-bg').fadeIn(300);
		$('.menu').removeClass('active');
		$('.fullmenu').removeClass('active');
		$('body').removeClass('menu');
		if ($(this).hasClass('menu__link_4')) {
			$('.popup-mailus').fadeIn(300);
		}
		if ($(this).hasClass('header__callback') || $(this).hasClass('menu__link_5')) {
			$('.popup-callback').fadeIn(300);
		}
		if ($(this).hasClass('parnners-whatwedo__link')) {
			$('.popup-callback2').fadeIn(300);
		}
		if ($(this).hasClass('parnners__download')) {
			$('.popup-callback3').fadeIn(300);
		}
		if ($(this).hasClass('product-collage-product__mail')) {
			$('.popup-mailme').fadeIn(300);
		}
		if ($(this).hasClass('product-reviews__add')) {
			$('.popup-addreview').fadeIn(300);
		}
		if ($(this).hasClass('article__masterclass')) {
			$('.popup-masterclass').fadeIn(300);
		}
		if ($(this).hasClass('videolink')) {
			$('.popup-video-item').html('<div id="popupvideo"></div>');
			$('.popup-video').fadeIn(300);

			player = new YT.Player('popupvideo', {
				height: '310',
				width: '557',
				videoId: $(this).parents('.articles-item').data('video'),
				events: {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange
				}
			});
			function onPlayerReady(event) {
				player.playVideo();
			}
			var done = false;
			function onPlayerStateChange(event) {
				if (event.data == YT.PlayerState.PLAYING && !done) {
					$('.parnners-video').addClass('active');
				} else {
					$('.parnners-video').removeClass('active');
				}
			}
			function stopVideo() {
				player.stopVideo();
			}
		}
		return false;
	});
	$('.popup-bg,.popup-close,.popup__back,.popup-addtocart-bottom__back').click(function (event) {
		$('.popup,.popup-bg').fadeOut(300);
		if ($('#popupvideo').length > 0) {
			$('.popup-video-item').html('');
		}
	});
	$('.buy').click(function (event) {
		var pad = 0;
		if ($(window).outerWidth() > 929) { pad = 150; }
		$('.popup').fadeOut(0).css({ top: $(window).scrollTop() + pad });
		$('.popup-bg').fadeIn(300);
		$('.menu').removeClass('active');
		$('body').removeClass('menu');
		$('.popup-addtocart').fadeIn(300);
		return false;
	});

	if ($('.mainslider').length > 0) {
		$('.mainslider').slick({
			//autoplay: true,
			dots: true,
			arrows: true,
			slidesToShow: 1,
			autoplaySpeed: 3000,
			nextArrow: '<button type="button" class="slick-next"></button>',
			prevArrow: '<button type="button" class="slick-prev"></button>'
		});
		$.each($('.mainslider-slide__image'), function (index, val) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr("src") + '")');
		});
		$('.mainslider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
			//gostatanim();
		});
		gostatanim();
	}
	function gostatanim() {
		$.each($('.mainslider-slide-info__value').not('.active'), function (index, val) {
			var $this = $(this);
			var val = parseInt($this.find('span').html());
			var speed = Math.round(1000 / val);
			$this.find('span').html('0');
			var digit = setInterval(function () {
				if ($this.find('span').html() != val) {
					$this.find('span').html(parseInt($this.find('span').html()) + 1);
				} else {
					clearInterval(digit);
				}
			}, speed);
			$(this).addClass('active');
		});
	}
	if ($('.categoriesmodule-linkslider').length > 0) {
		$('.categoriesmodule-linkslider').slick({
			autoplay: true,
			dots: false,
			arrows: false,
			vertical: true,
			verticalSwiping: true,
			slidesToShow: 1,
			autoplaySpeed: 1000,
			nextArrow: '<button type="button" class="slick-next"></button>',
			prevArrow: '<button type="button" class="slick-prev"></button>'
		});
	}
	function forms() {
		$('input,textarea').focus(function () {
			if ($(this).val() == $(this).attr('data-value')) {
				$(this).addClass('focus');
				if ($(this).attr('data-type') == 'pass') {
					$(this).attr('type', 'password');
				};
				$(this).val('');
			};
		});
		$('input[data-value], textarea[data-value]').each(function () {
			if (this.value == '' || this.value == $(this).attr('data-value')) {
				this.value = $(this).attr('data-value');
			}
			$(this).click(function () {
				if (this.value == $(this).attr('data-value')) {
					if ($(this).attr('data-type') == 'pass') {
						$(this).attr('type', 'password');
					};
					this.value = '';
				};
			});
			$(this).blur(function () {
				if (this.value == '') {
					this.value = $(this).attr('data-value');
					$(this).removeClass('focus');
					if ($(this).attr('data-type') == 'pass') {
						$(this).attr('type', 'text');
					};
				};
			});
		});
	}
	forms();

	//UP
	$(window).scroll(function () {
		var w = $(window).width();
		if ($(window).scrollTop() > 50) {
			$('#up').fadeIn(300);
		} else {
			$('#up').fadeOut(300);
		}
		if ($(window).scrollTop() > 5) {
			$('header').addClass('fix');
		} else {
			$('header').removeClass('fix');
		}
		if ($('.products-module').length > 0) {
			if ($(window).scrollTop() > $('.products-module').offset().top - ($(window).outerHeight() - 50)) {
				gostatanim();
			}
		}
	});
	$('#up').click(function (event) {
		$('body,html').animate({ scrollTop: 0 }, 300);
	});
	$('form button[type=submit]').click(function () {
		var er = 0;
		var form = $(this).parents('form');
		$.each(form.find('.req'), function (index, val) {
			if ($(this).attr('name') == 'email' || $(this).hasClass('email')) {
				if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test($(this).val()))) {
					er++;
					$(this).addClass('err');
				} else {
					$(this).removeClass('err');
				}
			} else {
				if ($(this).val() == '' || $(this).val() == $(this).attr('data-value')) {
					er++;
					if ($(this).parents('.select').length > 0) {
						$(this).parents('.select').addClass('err');
					} else {
						$(this).addClass('err');
					}
				} else {
					if ($(this).parents('.select').length > 0) {
						$(this).parents('.select').removeClass('err');
					} else {
						$(this).removeClass('err');
					}

				}
			}
		});
		if (er == 0) {
			if ($(this).hasClass('checkoutbtn')) {
				var pad = 0;
				if ($(window).outerWidth() > 929) { pad = 150; }
				$('.popup').css({ top: $(window).scrollTop() + pad });
				$('.popup-bg').fadeIn(300);
				$('.popup-checkout').fadeIn(300);
				return false;
			}
		} else {
			console.log('error');
			return false;
		}
	});

	//RANGE
	if ($("#range").length > 0) {
		$("#range").slider({
			range: true,
			min: 0,
			max: 5000,
			values: [0, 5000],
			slide: function (event, ui) {
				$('#rangefrom').val(ui.values[0]);
				$('#rangeto').val(ui.values[1]);
			},
			change: function (event, ui) {
				if (ui.values[0] != $("#range").slider("option", "min") || ui.values[1] != $("#range").slider("option", "max")) {
					$('#range').addClass('act');
				} else {
					$('#range').removeClass('act');
				}
				if ($(this).parents('.filter').length > 0) {
					filterpanel($(this));
				}
			}
		});
		$('#rangefrom').val($("#range").slider("values", 0));
		$('#rangeto').val($("#range").slider("values", 1));

		$('.clinall').click(function () {
			$('#rangefrom').val($("#price-range").slider("option", "min"));
			$('#rangeto').val($("#price-range").slider("option", "max"));
			$("#range").slider("values", 0, $("#range").slider("option", "min"));
			$("#range").slider("values", 1, $("#range").slider("option", "max"));
		});
		$("#rangefrom").bind("change", function () {
			if ($(this).val() * 1 > $("#range").slider("option", "max") * 1) {
				$(this).val($("#range").slider("option", "max"));
			}
			if ($(this).val() * 1 < $("#range").slider("option", "min") * 1) {
				$(this).val($("#range").slider("option", "min"));
			}
			$("#range").slider("values", 0, $(this).val());
		});
		$("#rangeto").bind("change", function () {
			if ($(this).val() * 1 > $("#range").slider("option", "max") * 1) {
				$(this).val($("#range").slider("option", "max"));
			}
			if ($(this).val() * 1 < $("#range").slider("option", "min") * 1) {
				$(this).val($("#range").slider("option", "min"));
			}
			$("#range").slider("values", 1, $(this).val());
		});
		$('.ui-slider-handle').eq(0).addClass('left');
		$('.ui-slider-handle').eq(1).addClass('right');
	}

	$('.cartnext').click(function (event) {
		$('.cart-body_cart,.cart-body_checkout').slideToggle(300);
		return false;
	});
	$('.cartprev').click(function (event) {
		$('.cart-body_cart,.cart-body_checkout').slideToggle(300);
		return false;
	});

	$('.option').click(function (event) {
		$(this).parents('.options').find('.option').removeClass('active');
		$(this).toggleClass('active');
		$(this).parents('.options').children('input').val($(this).data('value'));
	});

	$('.quantity__btn').click(function (event) {
		var n = parseInt($(this).parents('.quantity').find('.quantity__input').val());
		if ($(this).hasClass('dwn')) {
			n = n - 1;
			if (n < 1) { n = 1; }
		} else {
			n = n + 1;
		}
		$(this).parents('.quantity').find('.quantity__input').val(n);
		return false;
	});

	//РњР°СЃРєР° С‚РµР»РµС„РѕРЅР°
	var maskList = $.masksSort(['#'], /[0-9]|#/, "mask");
	var maskOpts = {
		inputmask: {
			definitions: {
				'#': {
					validator: "[0-9]",
					cardinality: 1
				}
			},
			clearIncomplete: true,
			showMaskOnHover: false,
			autoUnmask: true
		},
		match: /[0-9]/,
		replace: '#',
		list: maskList,
		listKey: "mask",
		onMaskChange: function (maskObj, completed) {
			$(this).attr("placeholder", $(this).inputmask("getemptymask"));
		}
	};
	$('input.phone').focus(function () {
		$(this).removeClass('err');
		$(this).addClass('focus');
	});
	$('input.phone').inputmasks(maskOpts);

	if ($('#map').length > 0) {
		var myMap;
		ymaps.ready(function () {
			myMap = new ymaps.Map("map", {
				center: [55.76, 37.64],
				zoom: 15
			});
			var myPlacemark = new ymaps.Placemark([55.76, 37.64], {}, {
				iconImageHref: '../img/pointer.svg',
				iconImageSize: [42, 56],
				iconImageOffset: [-21, -56]
			});
			myMap.geoObjects.add(myPlacemark);
		});
	}
});
*/