const nameInput = document.querySelector("#contact-form-name");
const emailInput = document.querySelector("#contact-form-email");
const messageInput = document.querySelector("#contact-form-message");
const submitButton = document.querySelector("#contact-form-submit");
const contactForm = document.getElementById("contact-form");

export const sendContactForm = async () => {
  contactForm.addEventListener("submit", async (event) => {
    submitButton.disabled = true;
    event.preventDefault();

    const body = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };

    try {
      await axios.post("https://api.carteirodigital.com/contact", body);

      alert("Mensagem enviada com sucesso!");

      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
      submitButton.disabled = false;
    } catch (error) {
      alert(
        "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde."
      );
      submitButton.disabled = false;
    }
  });
};
