function functionValidation(event) {
  event.preventDefault();
  var inputs = event.target.getElementsByTagName("input");
  var errors = event.target.querySelectorAll("input + p");
  var isFormValid = true;
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    let error = errors[i];

    if (input.checkValidity()) {
      error.textContent = "";
    } else if (input.validity.valueMissing) {
      isFormValid = false;
      error.textContent = `${input.placeholder} cannot be empty`;
    } else if (input.validity.typeMismatch && input.type == "email") {
      error.textContent = "Looks like this is not an email";
      isFormValid = false;
    } else {
      error.textContent = input.validationMessage;
      isFormValid = false;
    }
  }

  if (isFormValid) {
    window.alert("The form is valid");
  }
}

export default functionValidation;
