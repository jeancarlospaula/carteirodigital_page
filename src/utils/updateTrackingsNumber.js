export const updateTrackingsNumber = async () => {
  const trackingsNumberElement = document.querySelector(".tracking-numbers");

  try {
    const trackingsNumber = await axios({
      method: "get",
      url: "https://api.carteirodigital.com/track/ordersNumber",
    });

    trackingsNumberElement.textContent =
      trackingsNumber?.data?.trackedOrders || 127;
  } catch (error) {
    trackingsNumberElement.textContent = 127;
  }
};
