import React from "react";
import Fqa from "./fqa";
import Aboutus from "../pages/about";
import Testimonial from "../pages/testimonial";
// import Navbar from "../Navbar";
import './home.css';
import { Link } from "react-router-dom";


function Home() {
    
    return <>
        <div  className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner ">
                <div className="carousel-item container1 active">
                    <img src="university_image.jpg" className="cos_img bg d-block w-100" alt="..." />
                    <div className="centered">WELCOME TO<br /> STUDENT'S CLUBS<hr className="u-line1 bg-primary d-none d-md-block" /></div>
                </div>
            </div>
        </div>

        <div className="mydiv ">
            <Link className="clubgroup" to="/Literary">
                <img src="literary_logo1.png" alt="no found" /><br/>
                <div className="clubbutton1"><span className="clubtext">LITERARY</span></div>
            </Link>
            <Link className="clubgroup" to="/Techworms">
                <img src="TECH.png" alt="no found" /><br />
                <div className="clubbutton1 "><span className="clubtext2">TECHWORMS</span></div>
            </Link>
            <Link className="clubgroup" to="/Artculture#artculturepage">
                <img className="imglogo" src="ART_CULTURE.png" alt="no found" /><br />
                <div className="clubbutton1"><span className="clubtext3">ART & CULTURE</span></div>
            </Link>
            <Link className="clubgroup" to="/Sports">
                <img src="sports1.png" alt="no found" /><br />
                <div className="clubbutton1 club_sport"><span className="clubtext1">SPORTS</span></div>
            </Link>
            <Link className="clubgroup" to="/Photography">
                <img className="imglogo" src="PHOTOlogo.png" alt="no found" /><br />
                <div className="clubbutton1"><span className="clubtext4">PHOTOGRAPHY</span></div>
            </Link>
        </div>
        <Aboutus/>
        <Testimonial/>
        <Fqa/>
        



    </>
}

export default Home;