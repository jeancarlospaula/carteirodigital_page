const toggleNavbar = () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const menuToggle = document.getElementById("navbarSupportedContent");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (screen.width < 992) {
        const bsCollapse = new bootstrap.Collapse(menuToggle);
        bsCollapse.toggle();
      }
    });
  });
};

export { toggleNavbar };
