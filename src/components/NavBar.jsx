import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function NavBar() {
  return (
    <>
      <nav class="navbar">
        <a href="#" class="logo">
          <img src="./images/logo.png" alt="Logo" />
        </a>
        <ul class="navbar-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Collection</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
