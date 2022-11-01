import { useState } from "react";
import formValidation from "./scripts/formValidation";

function App() {
  return (
    <main className="intro">
      <div className="intro__text">
        <h1 className="intro__title"> Learn to code by watching others </h1>
        <p className="intro__parag">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="intro__cta">
        <div className="intro__trial">
          <b className="bold">Try it free 7 days</b> then $20/mo. thereafter
        </div>
        <form onSubmit={formValidation} noValidate className="intro__form">
          <div className="intro__input-container">
            <input
              className="intro__input"
              type="text"
              name="first_name"
              placeholder="First Name"
              required
            />
            <p className="intro__input-error"></p>
          </div>
          <div className="intro__input-container">
            <input
              className="intro__input"
              name="last_name"
              type="text"
              placeholder="Last Name "
              required
            />
            <p className="intro__input-error"></p>
          </div>
          <div className="intro__input-container">
            <input
              className="intro__input"
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />
            <p className="intro__input-error"></p>
          </div>
          <div className="intro__input-container">
            <input
              className="intro__input"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <p className="intro__input-error"></p>
          </div>
          <button type="submit" className="intro__button">
            Claim your free trial
          </button>
          <p className="intro__terms">
            By clicking the button, you are agreeing to our{" "}
            <a className="intro__terms-anchor" href="#">
              Terms and Services
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}

export default App;
