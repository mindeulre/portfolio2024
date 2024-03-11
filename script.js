const ani1 = gsap.timeline();
ani1.from("#MINAbout .img_left-box", { x: 270 })
	.to("#MINAbout .img_left-box", { x: -980 })
	.from("#MINAbout .img_right-box", { x: -270 })
	.to("#MINAbout .img_right-box", { x: 980 });

ScrollTrigger.create({
	animation: ani1,
	trigger: "#MINAbout",
	start: "top top",
	end: "+=2000",
	scrub: true,
	pin: true,
	anticpatepin: 1,
	markers: false,
});

var Tab = Array();
Tab.push("RUSH");
Tab.push("ADIDAS");
Tab.push("세종시청");
Tab.push("준비중입니다");
// Tab.push("");
// Tab.push("");
// Tab.push("");

var swiper = new Swiper(".swiper-box-1 .mySwiper", {
	loop: true,
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
		el: ".swiper-box-1 .swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + Tab[index] + "</span>";
		},
	},
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-box-1 .swiper-button-next",
		prevEl: ".swiper-box-1 .swiper-button-prev",
	},
});

function MySliderBox1__init() {
	let swiper = new Swiper(".swiper-box-2 .swiper", {
		slidesPerView: 4,
		loop: true,
		spaceBetween: 40,
		slidesPerGroup: 1,
		navigation: {
			nextEl: ".swiper-box-2 .swiper-button-next",
			prevEl: ".swiper-box-2 .swiper-button-prev",
		},
	});
}
MySliderBox1__init();
