const codeInput = document.querySelector("#tracking-form-code");
const statusInput = document.querySelector("#tracking-form-status");
const typeInput = document.querySelector("#tracking-form-type");
const localInput = document.querySelector("#tracking-form-local");
const destinyInput = document.querySelector("#tracking-form-destiny");
const dateInput = document.querySelector("#tracking-form-date");

export const fillTrackingInfo = ({ events, trackingCode, packageType }) => {
  showTrackingFormFields();

  const lastUpdate = events.at(-1);

  codeInput.value = trackingCode;
  statusInput.value = lastUpdate.status;
  typeInput.value = packageType;
  localInput.value = getAddressMessage(lastUpdate.location);
  destinyInput.value = getAddressMessage(lastUpdate.destination);
  dateInput.value = `${lastUpdate.dateUpdate
    .split("-")
    .reverse()
    .join("/")} - ${lastUpdate.timeUpdate}`;

  hideEmptyTrackingFormFields([
    codeInput,
    statusInput,
    typeInput,
    localInput,
    destinyInput,
    dateInput,
  ]);
};

const hideEmptyTrackingFormFields = (fields) => {
  fields.forEach((field) => {
    if (!field.value) {
      field.parentElement.classList.add("d-none");
    }
  });
};

const showTrackingFormFields = () => {
  const fields = [
    codeInput,
    statusInput,
    typeInput,
    localInput,
    destinyInput,
    dateInput,
  ];

  fields.forEach((field) => {
    field.parentElement.classList.remove("d-none");
    field.value = "";
  });
};

const getAddressMessage = (address) => {
  if (!address) return "";

  if (address.type === "Internacional") return address.type;

  let message = "";

  if (address.city) {
    message = address.city;
  }

  if (address.state) {
    message += ` - ${address.state}`;
  }

  if (address.type) {
    message += ` (${address.type})`;
  }

  return message;
};
