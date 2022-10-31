function functionValidation(event) {
  event.preventDefault();
  var inputs = event.target.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    console.log(inputs[i].type);
  }
}

export default functionValidation;
