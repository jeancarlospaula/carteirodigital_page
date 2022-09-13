const toggleNavbar = () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const menuToggle = document.getElementById("navbarSupportedContent");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const bsCollapse = new bootstrap.Collapse(menuToggle);
      bsCollapse.toggle();
    });
  });
};

export { toggleNavbar };
