import React from "react";
import './navbar.css';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand bg-dark" href="#"><img className="logo" src="logo.png" alt="logo" /></a>
          <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="menu-link navbar-nav me-auto m-auto mb-2 section mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link active text-primary" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/Clubs">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/Registration">Register</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="/#aboutid">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="/#fqa">FAQ</a>
              </li>

            </ul>
            <div className="social-media ">
              <ul className="menu-link navbar-nav me-auto mb-2 section mb-lg-0 ">
                <li className="icon-size">
                  <a href="https://www.facebook.com/search/top?q=sangam%20university" target="_blank">
                    <FaFacebookSquare className="facebook" />
                  </a>
                </li>
                <li className="icon-size">
                  <a href="https://www.instagram.com/sangamuniversity/" target="_blank">
                    <FaInstagramSquare className="instagram" />
                  </a>
                </li>
                <li className="icon-size">
                  <a href="https://www.youtube.com/channel/UCBvIAgAsfA9l1zmZTVP7UPg" target="_blank">
                    <FaYoutubeSquare className="youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar