import { scrollAnimation } from "./utils/scrollAnimation.js";
import { toggleNavbar } from "./utils/toggleNavbar.js";

const start = () => {
  toggleNavbar();
  scrollAnimation();
};

start();
