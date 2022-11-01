# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/intro-component-with-signup-form-using-react-and-scss-5iURbwoOjT](https://www.frontendmentor.io/solutions/intro-component-with-signup-form-using-react-and-scss-5iURbwoOjT)
- Live Site URL: [https://intro-component-with-signup-form-miguelzaga.vercel.app/](https://intro-component-with-signup-form-miguelzaga.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learned about the Constraint Validation API. I used it to validate the form with the following function:

```js
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
}
```

### Continued development

I did not know that form validation was so extensive. I think I need to learn more about it.

### Useful resources

- [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - I was able to complete the form validation with this.

## Author

- Frontend Mentor - [@miguelzaga](https://www.frontendmentor.io/profile/miguelzaga)

