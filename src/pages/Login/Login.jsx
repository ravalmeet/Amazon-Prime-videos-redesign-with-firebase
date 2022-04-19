import { useContext, useState } from "react";
import "./login.css";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navitage = useNavigate();

  // const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navitage("/");
        // dispatch({type:"LOGIN", payload:user})
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
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
        <div className="login">
          <h1 className="login__title">Sign In </h1>
          <form onSubmit={handleLogin}>
            <div className="login__group">
              <input
                className="login__group__input"
                type="text"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <label className="login__group__label">Email or phone number</label> */}
            </div>
            <div className="login__group">
              <input
                className="login__group__input"
                type="password"
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* <label className="login__group__label">Password</label> */}
            </div>
          </form>
          <button
            className="login__sign-in"
            type="button"
            onClick={handleLogin}
          >
            Sign In To Amazon Account
          </button>
          <div className="login__secondary-cta">
            <a className="login__secondary-cta__text" href="/">
              New to Amazon?
            </a>
            <a
              className="login__secondary-cta__text login__secondary-cta__text--need-help"
              href="/"
            >
              Need help?
            </a>
          </div>

          <button
            className="login__sign-in"
            type="button"
            onClick={handleRegister}
          >
            Create Your Amazon Account
          </button>
          {error && <span>Wrong email or password!</span>}
        </div>
      </div>
    </div>
  );
}

export default Login;
