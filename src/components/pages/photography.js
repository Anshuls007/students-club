import React from "react";
import './home.css';
import './literary.css';
import { Link } from "react-router-dom";

function Photography() {
    return <>
        <div id="photographypage" className="carousel slide border border-dark" data-bs-ride="carousel">
            <div className="carousel-inner ">
                <div className="carousel-item container1 active">
                    <img src="camera1.jpg" className="bg1 d-block w-100" alt="..." />
                    <div className="centered1">PHOTOGRAPHY<br />
                    <div className="centeredpara">"the photography club is to provide a platform for the interested students to share and exhibit their creativity, knowledge and passion for photography."
                    </div>
                    <Link className="regbtn" to="/Registration">Register</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="codinate">
            <div className="staffcodinate">
                <div className="sttitle">(Faculty coodinator)</div>
                <img src="person.jpg" className="stphoto"/>
                <div className="stallcompo">
                <div className="stname">prof. XYZ </div>
                <div className="stcompo">'ABC' department</div>
                <div className="stcompo">Email id :xyz@gmail.com</div>
                <div className="stcompo">Mobile no : 9865234451</div>
            </div>
            </div>
            <div className="studentcodinate">
                <div className="sttitle">(Student coodinator)</div>
                <img src="person.jpg" className="stphoto"/>
                <div className="stallcompo">
                <div className="stname">Anshul </div>
                <div className="stcompo">Btech CSE 3rd year</div>
                <div className="stcompo">Email id :xyz@gmail.com</div>
                <div className="stcompo">Mobile no : 9865234451</div>
                </div>
            </div>
        </div>
    </>
}

export default  Photography;