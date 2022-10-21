import { useState } from "react";

function App() {
  return (
    <main>
      <div>
        <h1> Learn to code by watching others </h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div>
        <div>Try it free 7 days then $20/mo. thereafter</div>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name " />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
          <button type="submit">Claim your free trial</button>
          <p>
            By clicking the button, you are agreeing to our Terms and Services
          </p>
        </form>
      </div>
    </main>
  );
}

export default App;
