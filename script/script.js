const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	effect: 'slider',
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
const reviews = new Swiper('.reviews', {
	direction: 'horizontal',
	effect: 'slider',
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});
const clients = new Swiper('.clients', {
	direction: 'horizontal',
	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	freeMode: {
		enabled: true,
		sticky: true,
	},
	slidesPerView: 4,
	spaceBetween: 100,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {

		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},

		480: {
			slidesPerView: 2,
			spaceBetween: 30
		},
	
		640: {
			slidesPerView: 2,
			spaceBetween: 40
		},
		900: {
			slidesPerView: 3,
			spaceBetween: 50
		},
		1110: {
			slidesPerView: 4,
			spaceBetween: 100
		}
	}
});

const navBtnElem = document.querySelector('.mobile');
const menuElem = document.querySelector('.menu');

const body = document.querySelector('body');


navBtnElem.addEventListener('click', () => {
	menuElem.classList.toggle('active');
})


const pointsArr = document.querySelectorAll('.points li');
const pageArr = document.querySelectorAll('.page');


[...document.querySelectorAll('.menu .points li'),
...document.querySelectorAll('.menu .btns li')].forEach(t => t.addEventListener('click', () => {
	menuElem.classList.remove('active');
}))