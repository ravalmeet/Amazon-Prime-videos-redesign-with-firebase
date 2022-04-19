import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navitage = useNavigate();

  const signout  = () => {
    signOut(auth).then(() => {
      console.log("signed out");
      navitage("/login");
    }).catch((error) => {
      console.log(error.message);
    });
  }

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  console.log(show);

  return (
    <div className="Navbar">
      <div className="nav-left">
        <a href="/" id="nav-left-first">
          Home
        </a>
        <a href="/">TV Shows</a>
        <a href="/">Movies</a>
        <a href="/">Kids</a>
      </div>
      <Link to="/">
        <img
          className="prime-logo"
          src="https://medias.unifrance.org/medias/79/121/227663/format_hd/amazon-prime-video.jpg"
          alt="prime logo"
        />
      </Link>

      <div className="nav-right">
        <Link to="/account">
          <img
            src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
            alt=""
          />
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <p>Meet Raval</p>
        </Link>
        <HiChevronDown className="icon-nav" onClick={handleClick} />
        {show && (
          <div className="icon-box">
            {/* <br /> */}
            {/* <hr className="box-hr" /> */}
            <p>Setting</p>
            <hr className="box-hr" />
            <p>Admin Panel</p>
            <hr className="box-hr" />
            
            <p onClick={signout}>Sign Out</p>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
