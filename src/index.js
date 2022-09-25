import {
  scrollAnimation,
  toggleNavbar,
  updateFooterYear,
  updateTrackingsNumber,
  trackOrder,
  sendContactForm,
} from "./utils/index.js";

const start = async () => {
  updateFooterYear();
  updateTrackingsNumber();
  toggleNavbar();
  scrollAnimation();
  trackOrder();
  sendContactForm();
};

start();
