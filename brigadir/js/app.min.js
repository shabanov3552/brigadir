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