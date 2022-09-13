const toggleNavbar = () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const menuToggle = document.getElementById("navbarSupportedContent");
  const bsCollapse = new bootstrap.Collapse(menuToggle);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      bsCollapse.toggle();
    });
  });
};

export { toggleNavbar };
