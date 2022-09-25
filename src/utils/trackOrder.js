import { fillTrackingInfo } from "./fillTrackingInfo.js";

const frontTrackingButton = document.querySelector("#frontTrackingButton");
const backTrackingButton = document.querySelector("#backTrackingButton");
const trackingInput = document.querySelector(".tracking-input");
const invalidCodeMessage = document.querySelector(".invalid-code");

export const trackOrder = async () => {
  frontTrackingButton.addEventListener("click", async () => {
    const trackingCode = trackingInput.value;

    if (!trackingCode) {
      showTrackingError();
      return;
    }

    let tracking;

    try {
      tracking = await axios({
        method: "get",
        url: `https://api.carteirodigital.com/track/order/${trackingCode}`,
      });
    } catch (error) {
      showTrackingError();
      return;
    }

    const eventos = tracking?.data?.events;

    fillTrackingInfo({
      events: eventos,
      trackingCode,
      packageType: tracking?.data?.packageType,
    });

    backTrackingButton.click();
  });

  trackingInput.addEventListener("input", () => {
    trackingInput.classList.remove("border", "border-danger", "border-5");
    invalidCodeMessage.classList.remove("d-block");
  });
};

const showTrackingError = () => {
  trackingInput.classList.add("border", "border-warning", "border-5");
  invalidCodeMessage.classList.add("d-block");
};
