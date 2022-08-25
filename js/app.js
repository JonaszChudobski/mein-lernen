const firstnameEl = document.querySelector("#firstname");
const lastnameEl = document.querySelector("#lastname");
const streetEl = document.querySelector("#street");
const cityEl = document.querySelector("#city");

const form = document.querySelector("#data-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isFirstnameValid = checkFirstname(),
    isLastnameValid = checkLastname(),
    isStreetValid = checkStreet(),
    isCityValid = checkCity();

  let isFormValid =
    isFirstnameValid && isLastnameValid && isStreetValid && isCityValid;

  if (isFormValid) {
  }
});

const isRequired = (value) => (value === "" ? false : true);

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  const error = formField.querySelector("small");
  error.textContent = "";
};

const checkFirstname = () => {
  let valid = false;
  const firstname = firstnameEl.value.trim();

  if (!isRequired(firstname)) {
    showError(firstnameEl, "Pole z imieniem nie może być puste.");
  } else {
    showSuccess(firstnameEl);
    valid = true;
  }
  return valid;
};

const checkLastname = () => {
  let valid = false;
  const lastname = lastnameEl.value.trim();

  if (!isRequired(lastname)) {
    showError(lastnameEl, "Pole z nazwiskiem nie może być puste.");
  } else {
    showSuccess(lastnameEl);
    valid = true;
  }
  return valid;
};

const checkStreet = () => {
  let valid = false;
  const street = streetEl.value.trim();

  if (!isRequired(street)) {
    showError(streetEl, "Pole z nazwą miasta nie może być puste.");
  } else {
    showSuccess(streetEl);
    valid = true;
  }
  return valid;
};

const checkCity = () => {
  let valid = false;
  const city = cityEl.value.trim();

  if (!isRequired(city)) {
    showError(cityEl, "Pole z nazwą miasta nie może być puste.");
  } else {
    showSuccess(cityEl);
    valid = true;
  }
  return valid;
};
