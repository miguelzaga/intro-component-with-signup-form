import { useState } from "react";

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
          Try it free 7 days then $20/mo. thereafter
        </div>
        <form className="intro__form">
          <input
            className="intro__input"
            type="text"
            placeholder="First Name"
          />
          <input
            className="intro__input"
            type="text"
            placeholder="Last Name "
          />
          <input
            className="intro__input"
            type="text"
            placeholder="Email Address"
          />
          <input className="intro__input" type="text" placeholder="Password" />
          <button type="submit" className="intro__button">
            Claim your free trial
          </button>
          <p className="intro__terms">
            By clicking the button, you are agreeing to our Terms and Services
          </p>
        </form>
      </div>
    </main>
  );
}

export default App;
