import {
  scrollAnimation,
  toggleNavbar,
  updateFooterYear,
  updateTrackingsNumber,
  trackOrder,
} from "./utils/index.js";

const start = async () => {
  updateFooterYear();
  updateTrackingsNumber();
  toggleNavbar();
  scrollAnimation();
  trackOrder();
};

start();
