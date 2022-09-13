const scrollAnimation = () => {
  const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 1000,
    reset: true,
  });

  scrollReveal.reveal(
    `
        .home-article .main-title,
        .home-article .main-sub-title,
        .home-article .main-button,
        .home-img-col .home-img,
        .tracking-article .tracking-title,
        .tracking-article .tracking-form,
        .tracking-numbers,
        .how-works-container .how-works-title,
        .how-works-container .how-works-card,
        .faq-container .faq-title,
        .faq-container .faq-img,
        .faq-container .accordion
      `,
    { interval: 100 }
  );
};

export { scrollAnimation };
