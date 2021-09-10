"use strict";
const navbar = document.querySelector("#navbar");
const navbarLists = document.querySelector(".navbar__lists");
const navbarList = document.querySelector(".navbar__list");
const navbarSidebarMenu = document.querySelector(".navbar__sidebar__menus");
const navbarSidebarMenuExit = document.querySelector(".navbar__sidebar__menu_exit");
const hambuger1 = document.querySelector(".navbar__hambuger1");
const hambuger2 = document.querySelector(".navbar__hambuger2");
const serviceFeatures = document.querySelector("#service__features");
const serviceFeaturesFlag = document.querySelectorAll(".service__features__flag");
const screenshotImage = document.querySelector(".screenshot__images");
const screenshotImageFlag = document.querySelectorAll('.screenshot__image__background');
const buttonHambugers = document.querySelector(".navbar__hambugers");

let serviceFeaturesIndex = 0;
let screenshotImageIndex = 0;

//네비게이션 바 (웹) - 요소 클릭시 페이지 이동.
const navbarMoveScroll = (event) => {
  if(isSafari) {
    const element = document.querySelector(`#${event.target.dataset.link}`);
    safariScroll(element);
    ;
  } else {
    const location = document.querySelector(`#${event.target.dataset.link}`).offsetTop;
    window.scrollTo({top: location - 110,behavior: "smooth" } );
  }
};
//네비게이션바 (모바일) - 요소 클릭시 페이지 이동.
const onMovePage = (event) => {
  if (isSafari) {
    const element = document.querySelector(`#${event.target.dataset.link}`);
    safariScroll(element);
    onExit();
  } else {
    const location = document.querySelector(`#${event.target.dataset.link}`).offsetTop;
    window.scrollTo({top: location - 110,behavior: "smooth" } );
    onExit();
  }
}

//네비게이션 바 - 스크롤의 따른 네비게이션바 배경,요소 색상 변경.
const navbarRepaint = () => {
  if (window.pageYOffset > 200) {
    navbar.classList.add("navbar__move");
    hambuger1.classList.remove("on");
    hambuger2.classList.add("on");
  } else {
    navbar.classList.remove("navbar__move");
    hambuger1.classList.add("on");
    hambuger2.classList.remove("on");
  }
}

//서비스 특징 - 무료 와이파이 리스트 클릭시 변경.
const changeFeatures = () => {
  serviceFeaturesFlag[serviceFeaturesIndex % 3].classList.remove("on");
  serviceFeaturesIndex = (serviceFeaturesIndex + 1) % 3;
  serviceFeaturesFlag[serviceFeaturesIndex].classList.add("on");
}

//앱 스크린샷 - 클릭시 이미지 변경.
const changeScreenshot = () => {
  screenshotImageFlag[screenshotImageIndex % 4].classList.remove("on");
  screenshotImageIndex = (screenshotImageIndex + 1) % 4;
  screenshotImageFlag[screenshotImageIndex].classList.add("on");
}

//모바일용 네비게이션바 햄버거버튼 on
const onSidebarMenu = () => {
  navbarSidebarMenu.classList.add("on")
}
//모바일용 네비게이션바 햄버거버튼 off
const onExit = () => {
  navbarSidebarMenu.classList.remove("on")
}

//이미지 슬라이드 반복
setInterval(changeFeatures, 6000);
setInterval(changeScreenshot, 6000);

navbarLists.addEventListener("click", navbarMoveScroll);
window.addEventListener("scroll", navbarRepaint);
serviceFeatures.addEventListener("click", changeFeatures);
screenshotImage.addEventListener("click", changeScreenshot);
buttonHambugers.addEventListener("click", onSidebarMenu);
navbarSidebarMenuExit.addEventListener("click", onExit);
navbarSidebarMenu.addEventListener("click", onMovePage)