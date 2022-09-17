export const updateFooterYear = async () => {
  const footerYear = document.querySelector(".footer-year");
  const currentYear = new Date().getFullYear();
  footerYear.textContent = currentYear.toString();
};
