import React from "react";
import "./register.css";

function Login1() {
  return (
    <div className="full-login">
      <div className="logo1">
        <img
          className="prime-logo1"
          src="https://medias.unifrance.org/medias/79/121/227663/format_hd/amazon-prime-video.jpg"
          alt="prime logo"
        />
      </div>
      <div className="main-login-page">
        <div class="login">
          <h1 class="login__title">Sign up</h1>
          <div class="login__group">
            <input
              class="login__group__input input-1"
              type="text"
              required="true"
              placeholder="Enter Your Name"
            />
            <input
              class="login__group__input"
              type="text"
              required="true"
              placeholder="Enter Your Email"
            />
            {/* <label class="login__group__label">Email or phone number</label> */}
          </div>
          <div class="login__group">
            <input
              class="login__group__input input-1"
              type="password"
              required="true"
              placeholder="Enter Your Password"
            />
            <input
              class="login__group__input"
              type="password"
              required="true"
              placeholder="Conform Your Password"
            />
            {/* <label class="login__group__label">Password</label> */}
          </div>
          <div className="checkbox">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="check-data">&nbsp; &nbsp; I accept all terms and conditions.</label>
            <br />
            <br />
          </div>


          <div class="login__secondary-cta">
            <a class="login__secondary-cta__text" href="/">
              Already have an account? <a className="login-a"href="/">Sign in</a>
            </a>
            <a
              class="login__secondary-cta__text login__secondary-cta__text--need-help"
              href="/"
            >
              Need help?
            </a>
          </div>
          <button class="login__sign-in" type="button">
            Create Your Amazon Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login1;
