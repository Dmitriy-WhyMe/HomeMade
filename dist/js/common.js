(function ($) {
	$(document).ready(function () {
		const swiper = new Swiper('.swiper', {
			direction: 'horizontal',
			loop: true,
			slidesPerView: 1,
			// Navigation arrows
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
		});

	});
})(jQuery);