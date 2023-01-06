
// Nav icon
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.header-top');
const menuIcon = document.querySelector('.menu-icon');
const logoHeader = document.querySelector('.logo');
const navCentral = document.querySelector('.nav-central');
const navList = document.querySelector('.nav-list');
const signUp = document.querySelector('.sign-up');

navBtn.onclick = function () {
	nav.classList.toggle('mobile-menu');
	menuIcon.classList.toggle('menu-icon-active');
	logoHeader.classList.toggle('logo_mobile');
	navCentral.classList.toggle('nav-central_mobile');
	document.body.classList.toggle('no-scroll');
	navList.classList.toggle('nav-list_mobile');
	signUp.classList.toggle('sign-up_mobile');
};
