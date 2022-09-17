const frontTrackingButton = document.querySelector("#frontTrackingButton");
const backTrackingButton = document.querySelector("#backTrackingButton");
const trackingInput = document.querySelector(".tracking-input");
const invalidCodeMessage = document.querySelector(".invalid-code");

export const trackOrder = () => {
  frontTrackingButton.addEventListener("click", async () => {
    if (!trackingInput.value) {
      trackingInput.classList.add("border", "border-warning", "border-5");
      invalidCodeMessage.classList.add("d-block");
      return;
    }

    backTrackingButton.click();
  });

  trackingInput.addEventListener("input", () => {
    trackingInput.classList.remove("border", "border-danger", "border-5");
    invalidCodeMessage.classList.remove("d-block");
  });
};
