import {
  scrollAnimation,
  toggleNavbar,
  updateFooterYear,
  updateTrackingsNumber,
  trackOrder,
  sendContactForm,
} from "./utils/index.js";

const trackingNumbersText = document.querySelector(".tracking-numbers-text p");

const start = async () => {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isInstagram = ua.indexOf("Instagram") > -1 ? true : false;

  if (isInstagram) {
    trackingNumbersText.style.fontSize = "0.9rem";
  }

  updateFooterYear();
  updateTrackingsNumber();
  toggleNavbar();
  scrollAnimation();
  trackOrder();
  sendContactForm();
};

start();
