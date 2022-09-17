import { scrollAnimation } from "./utils/scrollAnimation.js";
import { toggleNavbar } from "./utils/toggleNavbar.js";

const start = () => {
  const footerYear = document.querySelector(".footer-year");
  const currentYear = new Date().getFullYear();
  footerYear.textContent = currentYear;

  toggleNavbar();
  scrollAnimation();
};

start();
