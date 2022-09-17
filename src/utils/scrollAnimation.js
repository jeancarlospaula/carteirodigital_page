export const scrollAnimation = () => {
  const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
    reset: true,
  });
  scrollReveal.reveal(
    `.home-article .home-main-title,
    .home-article .home-main-sub-title,
    .home-article .home-main-button,
    .home-img-col .home-img,
    .tracking-article .tracking-title,
    .tracking-article .tracking-form,
    .tracking-article .tracking-numbers-text,
    .how-works-container .how-works-title,
    .how-works-container .how-works-card,
    .faq-container .faq-title,
    .faq-container .faq-img,
    .faq-container .accordion`,
    { interval: 100 }
  );
  const scrollRevealAccordion = ScrollReveal({
    origin: "top",
    distance: "-75%",
    duration: 700,
    reset: true,
  });
  scrollRevealAccordion.reveal(`.faq-container .accordion`, { interval: 100 });
};
